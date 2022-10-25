import React from "react";
import { Header } from "../components/Header/Header";
import testsStore from "../store/testsStore";
import { observer } from "mobx-react-lite";
import { TestFrame } from "../components/TestFrame/TestFrame";
import CreateTestModal from "../components/CreateTestModal/CreateTestModal";
import { EmptyBlock, HeaderPadding, Wrapper } from "./PagesStyle";

export const TestsPage = observer(() => {
  return (
    <div>
      <Header />
      <HeaderPadding>
        <Wrapper>
          <CreateTestModal />
          {testsStore.tests.length ? (
            <>
              {testsStore.tests.map((test) => {
                return <TestFrame test={test} key={test.id} />;
              })}
            </>
          ) : (
            <EmptyBlock>list of test is empty</EmptyBlock>
          )}
        </Wrapper>
      </HeaderPadding>
    </div>
  );
});
