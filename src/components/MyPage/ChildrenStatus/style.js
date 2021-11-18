import styled from "styled-components";
import { MYPAGE_COLOR } from "../style";

import { Profile, Triangle } from "../../../assets/index";
export const ChildrenStatus = styled.div`
  width: 95%;
  height: 83%;
  margin-top: 2%;
  display: flex;
`;
export const StatusItemWrapper = styled.div`
  width: 52%;
  height: 100%;
  box-sizing: border-box;
  color: ${MYPAGE_COLOR.MAIN_FONT_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ChildrenStatusItem = styled.div`
  width: 100%;
  height: 23%;
  background-color: white;
  border: 1px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
  box-sizing: border-box;
  padding: 2%;
  .itemTitle {
    color: ${MYPAGE_COLOR.MAIN_FONT_COLOR};
    font-size: 15px;
    border-bottom: 1px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
  }
`;
export const ItemInnerWrapper = styled.div`
  width: 98%;
  height: 60%;
  margin-top: 3%;
  display: flex;
  .checkStatus {
    color: ${MYPAGE_COLOR.MAIN_FONT_COLOR};
    width: 60%;
    height: 100%;
    font-size: 14px;
    text-align: left;
    padding-left: 7%;
    line-height: 2;
  }
  .img-wrapper {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  & ul:hover {
    cursor: pointer;
  }
`;
export const Point = styled.div`
  color: white;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  padding-top: 5%;
  font-size: 18px;
  background-color: ${(props) => (props.blue ? "#4775b2" : "#d37c7c")};
`;

//childrenInfo

export const Container = styled.div`
  width: 95%;
  height: 55px;
`;
export const MyChildren = styled.div`
  background-color: white;
  width: 100%;
  height: 55px;
  border: 1px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
  display: ${(props) => (props.props ? "flex" : "none")};
  align-items: center;
  box-sizing: border-box;
  padding: 0 2%;
  position: relative;
  z-index: 2;
  h5 {
    font-size: 15px;
  }
  cursor: ${(props) => (props.cursor ? "pointer" : "initial")};
  border-top: ${(props) => (props.border === 0 ? "1px solid #c8c8c8" : "none")};
`;
export const ChildrenProfileImage = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${Profile});
  margin-top: 6px;
`;
export const ChildrenInformationValue = styled.div`
  margin-left: 2%;
  width: 85%;
  height: 80%;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const TriangleImg = styled.div`
  background-image: url(${Triangle});
  width: 15px;
  height: 8px;
  :hover {
    cursor: pointer;
  }
`;
export const AddChildren = styled.span`
  color: #9e9e9e;
  font-size: 14px;
  margin-left: 15px;
`;

//modal

export const ModalContainer = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 18px;
  }
`;
