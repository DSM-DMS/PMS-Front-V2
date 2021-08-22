import styled from "styled-components";
import { MyPage } from "../../../assets";
import { SchoolInfo } from "./schoolInfoStyle";

// 메인페이지 마이페이지
export const StudentContainer = styled.div`
  width: 100%;
  height: 500px;

  .student-title {
    font-size: 18px;
  }
`;

// subtitle
export const SubTitle = styled.span`
  font-size: 18px;
`;

// 토큰 없을 시 로그인 버튼
export const LoginButton = styled.button`
  width: 200px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  border: none;
  outline: none;
  color: #70c0fd;
  margin-top: 25px;
  cursor: pointer;
`;

export const StudentInfo = styled(SchoolInfo)`
  background-color: #70c0fd;

  .student-info-img {
    margin: 16px 10px 0;
    width: 400px;
    height: 147px;
    background-image: url(${MyPage});
  }

  > img {
    position: relative;
    bottom: 117px;
    margin-left: 15px;
  }
`;

export const StudentNameScore = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .student-name-wrapper {
    display: flex;
    flex-direction: row;
    width: 335px;
    height: 60px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 10px;
    color: black;
    margin-top: 12px;
    align-items: center;
    justify-content: space-between;

    .student-name {
      display: flex;
      flex-direction: column;
    }
    .profile-img {
      margin: 6px 0 0 7px;
    }

    .student-name-info-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;

      & img {
        margin-right: 10px;
      }
    }
  }

  .student-score-wrppaer {
    z-index: 1;
    width: 179px;
    height: 214px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;

    > span {
      font-size: 15px;
      font-weight: bold;
      margin: 15px;
    }

    .student-score {
      display: flex;
      flex-direction: row;

      .point {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: #4775b2;
        font-size: 18px;
        font-weight: bold;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const StudentMore = styled(StudentNameScore)`
  background-color: white;
  color: black;
  z-index: 99;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
`;

export const StudenSelect = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArrowImg = styled.img`
  width: 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.5s;
`;

export const Title = styled.span`
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 500;
`;
