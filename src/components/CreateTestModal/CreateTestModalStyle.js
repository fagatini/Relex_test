import styled from 'styled-components'
import Box from "@mui/material/Box";

export const ButtonStyled = styled.button`
    border-color:black;
    border-radius: 30px;

    width:150px;
    height:31px;
    margin-bottom:25px;
    margin-right:35px;

    font-size: 18px;
    cursor:pointer;
`

export const CreateButtonWrapper = styled.div`
    width:802px;
`

export const InputStyled = styled.input`
    border-color:black;
    border-radius: 30px;
    
    width:200px;
    height:35px;
    margin: 35px 0 20px 35px;
    padding-left:12px;

    font-size: 18px;
`

export const QuestBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 460px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    background-color: #e2f4f6;
    border-radius: 30px;
    padding: 4px;
`

export const TitleSaveBlock = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end;
`
