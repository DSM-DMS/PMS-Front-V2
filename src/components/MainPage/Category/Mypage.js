import React, { useState } from "react";
import * as S from "../style";
import {
  Arrow,
  MyPage,
  Profile,
  MealGreen,
  MealRed,
  Home,
  Remain,
} from "../../../assets";
import { StudentUser, StudentUserInfo } from "../../../utils/api/myPage";
import StudentItemBox from "./StudentItemBox";
import {
  bonusPoint,
  mealApplied,
  minusPoint,
  stayStatus,
  studentName,
  studentNumber,
} from "../../../utils/variable/student";

const Mypage = (props) => {
  const [stdSelect, setStdSelect] = useState(0);

  const isAccessToken = localStorage.getItem("access-token");

  // 학생, 학생 정보 조회 api
  const user = StudentUser();
  const userInfo = StudentUserInfo(
    user?.students[`${stdSelect}`]?.[`${studentNumber}`]
  );

  const stdGrade = Math.floor(
    user?.students[`${stdSelect}`]?.[`${studentNumber}`] / 1000
  );
  const stdCls = Math.floor(
    (user?.students[`${stdSelect}`]?.[`${studentNumber}`] % 1000) / 100
  );
  const stdNum = Math.floor(
    (user?.students[`${stdSelect}`]?.[`${studentNumber}`] % 1000) % 100
  );

  const LoginBtnClick = () => {
    props.history.push("/login");
  };

  return (
    <S.StudentInfo>
      <div className="container club">
        <S.Title>마이페이지</S.Title>
        {isAccessToken ? (
          <>
            <S.StudentContainer>
              <span className="student-title">{user?.name} 학부모님</span>
              <S.StudentNameScore>
                <S.StudenSelect>
                  <StudentItemBox
                    stdGrade={stdGrade}
                    stdCls={stdCls}
                    stdNum={stdNum}
                    user={user}
                    stdSelect={stdSelect}
                  />

                  <S.StudentMore>
                    {user?.students.map((student, i) => {
                      return (
                        <>
                          {/* {student[`${studentNumber}`]}번  {user?.students[i]?.[`${studentName}`]}*/}
                          <StudentItemBox
                            key={i}
                            onClick={() => setStdSelect(i)}
                            stdGrade={stdGrade}
                            stdCls={stdCls}
                            stdNum={stdNum}
                          />
                        </>
                      );
                    })}
                  </S.StudentMore>
                </S.StudenSelect>
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
                      src={userInfo?.[`${stayStatus}`] ? Home : Remain}
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
