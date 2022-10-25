import styled from 'styled-components'
import LogoutIcon from "@mui/icons-material/Logout";


export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    position:absolute;
    width:100vw;

    background: #e2f4f6;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`

export const ControlBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-left:30px;
    width:330px;
`

export const NavigationText = styled.div`
    position:relative;
    top:6px;
    align-self:center;
    cursor: pointer;

    font-size: 18px;
    font-weight:500;
`

export const LogoutIconStyled = styled(LogoutIcon)`
    padding-right:30px;
    cursor: pointer;
`

