import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import { AnswersWrapper, ButtonStyled, Wrapper } from "./QuestionCreateStyle";

export const QuestionCreate = ({ addFunc }) => {
  const [open, setOpen] = useState(false);

  const [questionText, setQuestionText] = useState("");
  const [trueAnswer, setTrueAnswer] = useState("");
  const [fillerAnswer1, setFillerAnswer1] = useState("");
  const [fillerAnswer2, setFillerAnswer2] = useState("");
  const [fillerAnswer3, setFillerAnswer3] = useState("");

  const onConfirmClick = () => {
    if (
      !questionText ||
      !trueAnswer ||
      !fillerAnswer1 ||
      !fillerAnswer2 ||
      !fillerAnswer3
    ) {
      openSnackBar();
    } else {
      const quest = {
        text: questionText,
        answers: [trueAnswer, fillerAnswer1, fillerAnswer2, fillerAnswer3],
        right: 1,
      };
      addFunc(quest);
      setQuestionText("");
      setTrueAnswer("");
      setFillerAnswer1("");
      setFillerAnswer2("");
      setFillerAnswer3("");
    }
  };

  const openSnackBar = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <TextField
        id="outlined-multiline-static"
        label="Question text"
        multiline
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        rows={2}
        sx={{ width: "530px", backgroundColor: "white" }}
      />
      <AnswersWrapper>
        <TextField
          id="outlined-multiline-static"
          label="Right answer"
          multiline
          value={trueAnswer}
          onChange={(e) => setTrueAnswer(e.target.value)}
          rows={2}
          sx={{ width: "250px", backgroundColor: "white" }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Filler answer"
          multiline
          value={fillerAnswer1}
          onChange={(e) => setFillerAnswer1(e.target.value)}
          rows={2}
          sx={{ width: "250px", backgroundColor: "white" }}
        />
      </AnswersWrapper>
      <AnswersWrapper>
        <TextField
          id="outlined-multiline-static"
          label="Filler answer"
          multiline
          value={fillerAnswer2}
          onChange={(e) => setFillerAnswer2(e.target.value)}
          rows={2}
          sx={{ width: "250px", backgroundColor: "white" }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Filler answer"
          multiline
          value={fillerAnswer3}
          onChange={(e) => setFillerAnswer3(e.target.value)}
          rows={2}
          sx={{ width: "250px", backgroundColor: "white" }}
        />
      </AnswersWrapper>
      <ButtonStyled onClick={() => onConfirmClick()}>
        confirm question
      </ButtonStyled>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        severity="error"
        open={open}
        onClose={handleClose}
        message="Quest text and answers must be filled"
      />
    </Wrapper>
  );
};
