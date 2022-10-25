import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ControlBlock,
  HeaderWrapper,
  LogoutIconStyled,
  NavigationText,
} from "./HeaderStyle";

export const Header = () => {
  let navigate = useNavigate();

  const onLogoutClick = () => {
    localStorage.setItem("logged", false);
    navigate("/");
  };

  const onTestsClick = () => {
    navigate("/tests");
  };

  const onpPofilesClick = () => {
    navigate("/profiles");
  };

  return (
    <HeaderWrapper>
      <ControlBlock>
        <h1>Tester.net</h1>
        <NavigationText onClick={() => onTestsClick()}>Tests</NavigationText>
        <NavigationText onClick={() => onpPofilesClick()}>
          Profiles
        </NavigationText>
      </ControlBlock>
      <div>
        <LogoutIconStyled onClick={() => onLogoutClick()} fontSize="medium" />
      </div>
    </HeaderWrapper>
  );
};
