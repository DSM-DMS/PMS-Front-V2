import styled from "styled-components";
import { MYPAGE_COLOR } from "../../style";

export const ChildrenCurrentStatus = styled.div`
  display: block;
  width: 43%;
  margin-left: 2%;
  background-color: white;
  font-size: 12px;
  border: 1px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
  padding: 1%;
  overflow: scroll;
`;
export const ChildrenCurrentStatusTitle = styled.div`
  border-bottom: 1px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
  font-size: 16px;
`;
//상벌점 내역, 다벌점 봉사 내역, 외출 내역
export const Point = styled.div`
  width: 25%;
  height: 100%;
  box-sizing: border-box;
  padding: 5% 3%;
  font-size: 25px;
  text-align: right;
`;
export const PointReason = styled.div`
  font-weight: 550;
  font-size: 17px;
`;
export const PointWrapper = styled.div`
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
  display: ${(props) => props.display};
  width: 98%;
  box-sizing: border-box;
  margin: auto;
  margin-top: 5%;
  overflow-y: scroll;
  .pointTitle {
    width: 75%;
    height: 100%;
    box-sizing: border-box;
    padding: 3%;
    font-size: 15px;
  }
`;
export const NoneBreakdown = styled(PointWrapper)`
  color: black;
  border: 1px solid #92b5f9;
  font-size: 15px;
  padding: 0;
  justify-content: center;
  height: 20%;
  align-items: center;
  overflow-y: visible;
  display: flex;
`;
//잔류 신청 내역, 주말 급식 신청 내역
export const RemainWrapper = styled(PointWrapper)`
  border: 1px solid ${(props) => props.borderColor};
  height: 30%;
  color: black;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 35% 0;
  overflow-y: visible;
  display: flex;
  img {
    width: 17%;
  }
  h2 {
    margin: 4% 0 8% 0;
    font-size: 16px;
  }
  .remainContent {
    font-weight: 500;
    font-size: 14px;
  }
`;
