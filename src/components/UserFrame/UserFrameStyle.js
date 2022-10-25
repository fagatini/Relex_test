import styled from 'styled-components'
import Box from "@mui/material/Box";

export const StatisticBox = styled(Box)`
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

export const ButtonStyled = styled.button`
    border-color:black;
    border-radius: 30px;

    width:160px;
    height:31px;
    /* margin-bottom:25px; */
    margin-right:15px;

    font-size: 18px;
    cursor:pointer;
`

export const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

    width:750px;
    height:65px;

    border-radius: 30px;
    border: 1px solid black;

    padding-left:25px;
    padding-right:25px;
    margin-bottom:25px;
`

export const TextStyled = styled.div`
    font-size: 18px;
    font-weight:500;
`