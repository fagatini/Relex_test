import * as React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { QuestionCreate } from "../QuestionCreate/QuestionCreate";
import testsStore from "../../store/testsStore";
import {
  ButtonStyled,
  CreateButtonWrapper,
  InputStyled,
  QuestBox,
  TitleSaveBlock,
} from "./CreateTestModalStyle";

export default function CreateTestModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState("");
  const [questionList, setQuestionList] = useState([]);

  const addQuestion = (quest) => {
    setQuestionList([...questionList, quest]);
  };

  const onSaveClick = () => {
    testsStore.createNewTest({ questions: questionList, title: title });
    setTitle("");
    setQuestionList([]);
  };

  return (
    <>
      <CreateButtonWrapper>
        <ButtonStyled onClick={handleOpen}>Create test</ButtonStyled>
      </CreateButtonWrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <QuestBox>
          <TitleSaveBlock>
            <InputStyled
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="title"
            ></InputStyled>
            {/* {questionList.length !== 0 ? (
            <select onChange={}>
              {questionList.map((quest, index) => (
                <option key={quest.text}>{index + 1}</option>
              ))}
              <option selected>{questionList.length + 1}</option>
            </select>
          ) : null} */}
            {questionList.length >= 5 ? (
              <ButtonStyled onClick={() => onSaveClick()}>
                save test
              </ButtonStyled>
            ) : null}
          </TitleSaveBlock>
          {questionList.length <= 15 ? (
            <QuestionCreate addFunc={addQuestion} />
          ) : null}
        </QuestBox>
      </Modal>
    </>
  );
}
