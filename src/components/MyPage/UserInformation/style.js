import styled from "styled-components";
import { MYPAGE_COLOR } from "../style";

export const UserInformation = styled.div`
  width: 100%;
  height: 30%;
  h4 {
    font-size: 18px;
    margin-bottom: 4%;
    font-weight: 600;
  }
`;
export const UserInformationItem = styled.div`
  width: 90%;
  height: 28%;
  border-top: 0.5px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
  display: flex;
`;
export const UserInformationItemBot = styled(UserInformationItem)`
  border-bottom: 0.5px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
`;
export const ItemTitle = styled.div`
  background: #f6f6f6 0% 0% no-repeat padding-box;
  width: 80px;
  height: 100%;
  color: ${MYPAGE_COLOR.MAIN_FONT_COLOR};
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ItemContent = styled.div`
  width: 70%;
  height: 100%;
  color: ${MYPAGE_COLOR.MAIN_FONT_COLOR};
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
export const NickNameInput = styled.input`
  outline: none;
  border: 1px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
  color: black;
  width: 200px;
  height: 35px;
  border-radius: 2px;
  box-sizing: border-box;
  padding-left: 2%;
  font-size: 15px;
`;
