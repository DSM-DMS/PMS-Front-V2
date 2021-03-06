import styled from "styled-components";

export const MYPAGE_COLOR = {
  MAIN_COLOR: "#f6f6f6",
  MAIN_BORDER_COLOR: "#c8c8c8",
  MAIN_FONT_COLOR: "#9e9e9e",
};
export const MainWrapper = styled.div`
  width: 100%;
  height: 1130px;
  background-color: ${MYPAGE_COLOR.MAIN_COLOR};
`;
export const MyPageWrapper = styled.div`
  position: relative;
  top: -7%;
  margin: 0 auto;
  width: 78%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 5px #00000029;
  background: #ffffff 0% 0% no-repeat padding-box;
`;
export const MyPageItem = styled.div`
  width: 85%;
  border-top: 1px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
  height: 80%;
  display: flex;
`;
export const ItemBox = styled.div`
  width: 50%;
  height: 97%;
  box-sizing: border-box;
  padding-top: 3%;
  & h4 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
export const ChildrenInformation = styled.div`
  width: 100%;
  height: 98%;
  border-top: 1px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
  background-color: ${MYPAGE_COLOR.MAIN_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
