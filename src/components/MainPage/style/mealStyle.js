import styled from "styled-components";
import { ClubInfo } from "./schoolInfoStyle";

export const TodayMeals = styled(ClubInfo)`
  background-color: #4775b2;
`;

export const MealMenu = styled.div`
  border-radius: 10px;
  width: 80%;
  height: 75%;
  max-height: 75%;
  min-height: 75%;
  background: #4b6d9a 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  overflow: auto;

  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 20px;
    font-size: 18px;
  }

  & li {
    list-style: none;
    margin: 2px;
    text-align: center;
  }
`;

export const MealButton = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  > div {
    width: 10px;
    height: 10px;
    border-radius: 50px;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 500;
`;
