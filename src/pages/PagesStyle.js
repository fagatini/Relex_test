import styled from 'styled-components'

export const LoginBlock = styled.div`
    width:800px;
    height:550px;

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    background: #e2f4f6;
    
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

export const LoginWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    height:100vh;
`

export const InputStyled = styled.input`
    border-color:black;
    border-radius: 30px;
    
    width:300px;
    height:35px;
    margin: 20px 0 20px 0;
    padding-left:12px;

    font-size: 18px;
`

export const LoginButtonStyled = styled.button`
    border-color:black;
    border-radius: 30px;

    width:90px;
    height:41px;
    margin: 20px 0 20px 0;

    font-size: 18px;
    cursor:pointer;
`

export const HeaderPadding = styled.div`
    padding-top:130px;
`

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const EmptyBlock = styled.strong`
    align-items:center;
    font-size:30px;
`
