import React, { useEffect, useState } from "react";
import userStore from "../../store/profilesStore";
import testsStore from "../../store/testsStore";
import { observer } from "mobx-react-lite";
import Modal from "@mui/material/Modal";
import {
  ButtonStyled,
  StatisticBox,
  TextStyled,
  Wrapper,
} from "./UserFrameStyle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const UserFrame = observer(({ user }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedTest, setSelectedTest] = useState("");
  const [passedTests, setPassedTests] = useState([]);

  const [attemptsNumber, setAttemptsNumber] = useState(null);
  const [succesCount, setSuccesCount] = useState(null);
  const [succesPercent, setSuccesPercent] = useState(null);
  const [avgScores, setAvgScores] = useState(null);
  const [allAttempts, setAllAttempts] = useState([]);

  useEffect(() => {
    const idArray = [
      ...new Set(user.attempts.map((attempt) => attempt.testId)),
    ];
    const titles = idArray.map((id) => ({
      title: testsStore.tests.filter((test) => test.id === id)[0].title,
      id: id,
    }));
    setPassedTests(titles);
  }, [open]);

  const handleChange = (event) => {
    setSelectedTest(event.target.value);
  };

  useEffect(() => {
    const testAttempts = user.attempts.filter(
      (attempt) => attempt.testId === selectedTest
    );

    setAttemptsNumber(testAttempts.length);

    const correctTestNum =
      testAttempts.length -
      testAttempts.filter((attemp) => attemp.result.includes(false)).length;
    setSuccesCount(correctTestNum);
    setSuccesPercent((correctTestNum / testAttempts.length) * 100);

    const scoreSum = testAttempts.reduce((sum, elem) => {
      return sum + elem.result.filter((answer) => answer === true).length;
    }, 0);
    setAvgScores(
      scoreSum / (testAttempts.length * testAttempts[0]?.result.length)
    );

    // setAllAttempts(testAttempts);
  }, [selectedTest]);

  return (
    <Wrapper>
      <TextStyled>
        <strong>{user.FIO}</strong>
      </TextStyled>
      <ButtonStyled onClick={() => handleOpen()}>show statistic</ButtonStyled>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StatisticBox>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">test</InputLabel>
            <Select
              labelId="demo-select-small"
              value={selectedTest}
              label="Test"
              onChange={handleChange}
            >
              {passedTests.map((test) => (
                <MenuItem key={test.id} value={test.id}>
                  {test.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {attemptsNumber}
          {"  "}
          {succesCount}
          {"  "}
          {succesPercent}%{"  "}
          {avgScores}
          {"  "}
          {allAttempts}
          {"  "}
        </StatisticBox>
      </Modal>
    </Wrapper>
  );
});
