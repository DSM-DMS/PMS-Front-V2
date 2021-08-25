import styled from 'styled-components';
import { MYPAGE_COLOR } from '../style'

export const ChangePassword = styled.div`
    width: 100%;
    height: 60%;
`
export const ChangePasswordInput = styled.input`
    width:95%;
    height: 25%;
    outline: none;
    border: none;
    color: ${MYPAGE_COLOR.MAIN_FONT_COLOR};
    font-size:16px;
    margin: 15px 0;
`;
export const ChangePasswordItemBox = styled.div`
    width:100%;
    height: 20%;
    border-bottom: 1px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
    display: flex;
    align-items: flex-end;
`;
export const ChangePasswordTitle = styled.div`
    display: flex;
    font-size: 13px;
    color: ${MYPAGE_COLOR.MAIN_FONT_COLOR};
    h4{
        font-size: 18px;
        color: black;
        margin-right: 2%;
    }
`;
export const ErrorMessage = styled.div`
    color: #ff0000;
    font-size: 13px;
    display: none;
`;
export const ChangePasswordWrapper = styled.div`
    width:90%;
    height: 100%;
`;
export const ChangePasswordBtn = styled.button`
    width: 25%;
    height: 12%;
    background-color:${MYPAGE_COLOR.MAIN_BORDER_COLOR};
    color: white;
    border: none;
    border-radius: 2px;
    margin-top: 20px;
    font-size: 16px;
`;