import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import {
  LoginBlock,
  LoginWrapper,
  InputStyled,
  LoginButtonStyled,
} from "./PagesStyle";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  const onLoginClick = () => {
    if (login === "Administrator" && password === "12345") {
      localStorage.setItem("logged", true);
      navigate("/profiles");
    } else {
      openSnackBar();
    }
  };

  const openSnackBar = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        severity="error"
        open={open}
        onClose={handleClose}
        message="Wrong login or password"
      />
      <LoginWrapper>
        <LoginBlock>
          <InputStyled
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="login"
            type="text"
          ></InputStyled>
          <InputStyled
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          ></InputStyled>
          <LoginButtonStyled onClick={() => onLoginClick()}>
            login
          </LoginButtonStyled>
        </LoginBlock>
      </LoginWrapper>
    </div>
  );
};
