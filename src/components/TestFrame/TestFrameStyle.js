import styled from 'styled-components'

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

export const InfoWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`

export const ControlWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`

export const ButtonStyled = styled.button`
    border-color:black;
    border-radius: 30px;

    width:100px;
    height:31px;
    margin-left:20px;

    font-size: 18px;
    cursor:pointer;
`