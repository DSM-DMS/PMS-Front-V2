import React, { useEffect, useState } from "react";
import * as S from "../style";
import {
  Arrow,
  MyPage,
  Profile,
  MealGreen,
  MealRed,
  Home,
} from "../../../assets";
import { StudentUser, StudentUserInfo } from "../../../utils/api/myPage";

const Mypage = (props) => {
  const [stdName, setStdName] = useState("");
  const [stdNumber, setStdNumber] = useState("");
  const [studentChange, setStudentChagne] = useState(false);
  const stdGrade = Math.floor(stdNumber / 1000);
  const stdCls = Math.floor((stdNumber % 1000) / 100);
  const stdNum = Math.floor((stdNumber % 1000) % 100);

  const isAccessToken = localStorage.getItem("access-token");
  const studentName = "student-name";
  const studentNumber = "student-number";
  const bonusPoint = "bonus-point";
  const minusPoint = "minus-point";
  const mealApplied = "meal-applied";
  const stayStatus = "stay-status";

  const user = StudentUser();

  useEffect(() => {
    setStdName(user?.students[0]?.[`${studentName}`]);
    setStdNumber(user?.students[0]?.[`${studentNumber}`]);
  }, [user?.students]);

  const LoginBtnClick = () => {
    props.history.push("/login");
  };

  const userInfo = StudentUserInfo(stdNumber);

  return (
    <S.StudentInfo>
      <div className="container club">
        <S.Title>마이페이지</S.Title>
        {isAccessToken ? (
          <>
            <S.StudentContainer>
              <span className="student-title">{user?.name} 학부모님</span>
              <S.StudentNameScore>
                <div className="student-name-wrapper">
                  <div className="student-name-info-wrapper">
                    <img
                      className="profile-img"
                      src={Profile}
                      alt="프로필 사진"
                    />
                    <div className="student-name">
                      <span>
                        {stdGrade}학년 {stdCls}반 {stdNum}번
                      </span>
                      <span>소프트웨어개발과 {stdName}</span>
                    </div>
                  </div>
                  <img
                    onClick={() => setStudentChagne(!studentChange)}
                    className="arrow-img"
                    src={Arrow}
                    alt="화살표"
                  ></img>
                  <S.StudentChangeToggle
                    style={{ display: studentChange ? "flex" : "none" }}
                  ></S.StudentChangeToggle>
                </div>
                <div className="student-score-wrppaer">
                  <span>상 / 벌점</span>
                  <div className="student-score">
                    <div className="point" style={{ marginRight: "10px" }}>
                      {userInfo?.[`${bonusPoint}`]}
                    </div>
                    <div
                      className="point"
                      style={{ backgroundColor: "#D37C7C" }}
                    >
                      {userInfo?.[`${minusPoint}`]}
                    </div>
                  </div>
                  <span>신청 상태</span>
                  <div className="student-score">
                    <img
                      style={{ marginRight: "10px" }}
                      src={userInfo?.[`${mealApplied}`] ? MealGreen : MealRed}
                      alt="급식신청여부"
                    ></img>
                    <img
                      src={userInfo?.[`${stayStatus}`] ? Home : MealRed}
                      alt="잔류신청여부"
                    ></img>
                  </div>
                </div>
              </S.StudentNameScore>
            </S.StudentContainer>
          </>
        ) : (
          <>
            <S.SubTitle>로그인 후 이용 가능합니다.</S.SubTitle>
            <S.LoginButton onClick={LoginBtnClick}>로그인</S.LoginButton>
          </>
        )}
      </div>
      <img src={MyPage} alt="마이페이지 사진"></img>
    </S.StudentInfo>
  );
};

export default Mypage;
