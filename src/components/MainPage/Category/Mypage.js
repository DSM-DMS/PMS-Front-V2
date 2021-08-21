import React, { useEffect, useState } from "react";
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
import useSWR from "swr";
import { authFetcher, MainURL } from "../../../utils/axios/axios";

const Mypage = (props) => {
  const [stdSelect, setStdSelect] = useState(0); // 자녀 선택
  const [user, setUser] = useState({});
  const [userInfo, setUserInfo] = useState(); // 자녀 정보
  const [stdGrade, setStdGrade] = useState(""); // 자녀 학년
  const [stdCls, setStdCls] = useState(); // 자녀 반
  const [stdNum, setStdNum] = useState(); // 자녀 학번
  const [stdNumber, setStdNumber] = useState(); // 자녀 번호

  const isAccessToken = localStorage.getItem("access-token");

  //userData API
  const userData = useSWR(`${MainURL}/user`, authFetcher);

  useEffect(() => {
    setUser(userData.data);
    setStdNum(userData?.data?.students[`${stdSelect}`]?.[`${studentNumber}`]);
  }, [userData.data, stdSelect]);

  //학생 정보 api
  const studentData = useSWR(`${MainURL}/user/student/${stdNum}`, authFetcher);

  useEffect(() => {
    setUserInfo(studentData.data);
    if (userData.data !== undefined) {
      setStdGrade(
        Math.floor(
          userData?.data?.students[`${stdSelect}`]?.[`${studentNumber}`] / 1000
        )
      );
      setStdCls(
        Math.floor(
          (userData?.data?.students[`${stdSelect}`]?.[`${studentNumber}`] %
            1000) /
            100
        )
      );
      setStdNumber(
        Math.floor(
          (userData?.data?.students[`${stdSelect}`]?.[`${studentNumber}`] %
            1000) %
            100
        )
      );
    }
  }, [studentData.data, stdSelect, userData]);

  const LoginBtnClick = () => {
    props.history.push("/login");
  };

  console.log("학년", stdGrade);

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
                    user={user?.students}
                    stdSelect={stdSelect}
                  />

                  <S.StudentMore>
                    {user &&
                      user.stdudents &&
                      user.students.map((students, i) => {
                        console.log(students);
                        return (
                          <>
                            <div
                              className="student-name-wrapper"
                              key={i}
                              onClick={() => {
                                setStdSelect(i);
                              }}
                            >
                              <div className="student-name-info-wrapper">
                                <img
                                  className="profile-img"
                                  src={Profile}
                                  alt="프로필 사진"
                                />
                                <div className="student-name">
                                  {!stdGrade ? (
                                    <>정보가 없습니다.</>
                                  ) : (
                                    <>
                                      <span>
                                        {stdGrade}학년 {stdCls}반 {stdNum}번
                                      </span>
                                      <span>
                                        {`소프트웨어개발과 ${user?.students[i]?.[`${studentName}`]}`}
                                      </span>
                                    </>
                                  )}
                                </div>
                              </div>
                              <img
                                className="arrow-img"
                                src={Arrow}
                                alt="화살표"
                              ></img>
                            </div>
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
