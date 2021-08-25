import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: 1230px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
`;

const CalenderWrapper = styled.div`
  position: relative;
  top: -7%;
  margin: 0 auto;
  width: 78%;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21%;
  height: 100%auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 5px #00000029;
`;

const Title = styled.div`
  margin: 25px;
  font-size: 20px;
  font-weight: 600;
`;

const MiddleWrapper = styled(SideWrapper)`
  width: 53%;
  overflow: auto;
`;

//리스트들 묶음 스크롤 기능 있음
const ListWrapper = styled.div`
  margin-bottom: 20px;
  height: 100%auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  width: 90%;
`;

const Event = styled.div`
  margin: 7%;
  width: 80%;
  height: 60px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const EventName = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .circle {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    background-color: ${({ EventColor }) => EventColor};
    border-radius: 50px;
  }
  span {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 600;
  }
`;

const EventDate = styled.div`
  height: 48px;
  font: normal normal normal 14px/14px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #7d7d7d;
  display: flex;
  align-items: center;
  width: 20%;
`;

//오늘의 급식
const SelectData = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin: 15px;
`;

const MealsList = styled.div`
  cursor: pointer;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px;
  width: 80%;
  height: 280px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
  border-radius: 30px;
  overflow: auto;
  & span {
    margin: 7px;
    font-size: 18px;
  }
  & img {
    display: none;
    object-fit: cover;
    width: 90%;
  }
`;

const Nav = styled.div`
  margin-bottom: 10px;
  width: 80%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const MealButton = styled.button`
  width: 53px;
  height: 28px;
  background-color: ${({ mealButtonColor }) => mealButtonColor};
  color: ${({ mealButtonFontColor }) => mealButtonFontColor};
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const CalenderMain = styled.tbody`
  margin: 15px;
  width: 95%;
  height: 670px;

  .content-wrapper {
    width: 94%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .content {
      align-items: center;
      display: flex;
      flex-direction: row;
    }

    .circle {
      width: 7px;
      height: 7px;
      min-width: 7px;
      min-height: 7px;
      border-radius: 50%;
      background-color: #56ad9e;
    }
  }

  .calBodyWrapper {
    width: 100%;
    height: 100%;

    .controlbutton {
      height: 50px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;

      h3 {
        font-weight: bold;
        margin: 0 10px;
      }

      button {
        border: none;
        background-color: white;
        width: 40px;
        height: 30px;
        border-radius: 5px;
        :hover {
          background: #8080802e;
        }
      }
    }
  }

  .calBodyHeader {
    width: 100%;
    height: 30px;
    //background-color: #efbf43;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    align-items: center;
  }

  // 각 요일 영역 셀 공통
  .calBodyHeaderCell {
    font-size: 16px;
  }

  // 요일별 셀 속성
  .date-sun {
    color: red;
  }
  .date-sat {
    color: blue;
  }
  .date-weekday {
    color: black;
  }

  & table {
    width: 100%;
    height: 100%;

    & tbody {
      display: flex;
      flex-direction: column;
    }
    span {
      font-size: 14px;
      color: #4e4c4c;
      font-weight: 600;
    }
  }

  tr {
    display: flex;
  }

  & td {
    cursor: pointer;
    display: flex;
    border: 0.5px solid #80808057;
    width: 5.4vw;
    height: 14vh;
    flex-direction: column;
    overflow: auto;

    span {
      margin: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    :hover {
      background-color: #56ad7752;
    }
  }
`;

export {
  MainWrapper,
  CalenderWrapper,
  SideWrapper,
  Title,
  MiddleWrapper,
  ListWrapper,
  Event,
  EventName,
  EventDate,
  SelectData,
  MealsList,
  Nav,
  MealButton,
  CalenderMain,
};
