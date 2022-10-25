import React from "react";
import testsStore from "../../store/testsStore";
import { observer } from "mobx-react-lite";
import {
  ButtonStyled,
  ControlWrapper,
  InfoWrapper,
  TextStyled,
  Wrapper,
} from "./TestFrameStyle";

export const TestFrame = observer(({ test }) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <TextStyled>
          id:{test.id}
          <strong> {test.title}</strong>
        </TextStyled>
      </InfoWrapper>
      <div>
        <ControlWrapper>
          <ButtonStyled onClick={() => testsStore.changeShowTest(test.id)}>
            {test.isShowed ? (
              <TextStyled>visible</TextStyled>
            ) : (
              <TextStyled>invisible</TextStyled>
            )}
          </ButtonStyled>
          <ButtonStyled onClick={() => testsStore.removeTest(test.id)}>
            remove
          </ButtonStyled>
        </ControlWrapper>
      </div>
    </Wrapper>
  );
});
