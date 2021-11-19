import React, { useEffect, useState } from "react";
import * as S from "../style/myPageStyle";
import {
  MyPage,
  Profile,
  MealGreen,
  MealRed,
  Home,
  Remain,
} from "../../../assets";
import StudentItemBox from "./StudentItemBox";
import {
  bonusPoint,
  mealApplied,
  minusPoint,
  stayStatus,
  studentName,
  studentNumber,
} from "../../../utils/variable/student";
import {
  StudentClass,
  StudentGrade,
  StudentNumber,
} from "../../../utils/hook/studentInfoHook";
import { StudentUser } from "../../../utils/api/myPage";
import axios from "axios";
import { MainURL } from "../../../utils/axios/axios";

const Mypage = (props) => {
  const userData = StudentUser();

  const [stdSelect, setStdSelect] = useState(0); // 자녀 선택
  const [arrowSelect, setArrowSelect] = useState(false);
  const [user, setUser] = useState({});
  const [userInfo, setUserInfo] = useState(); // 자녀 정보
  const [stdGrade, setStdGrade] = useState(""); // 자녀 학년
  const [stdCls, setStdCls] = useState(); // 자녀 반
  const [stdNumber, setStdNumber] = useState(); // 자녀 번호
  const [studentData, setStudentData] = useState(); //학생 정보
  const token = localStorage.getItem("access-token");

  //학생 정보 api

  useEffect(() => {
    setUserInfo(studentData);
    if (userData !== undefined) {
      setStdGrade(StudentGrade(userData, stdSelect));
      setStdCls(StudentClass(userData, stdSelect));
      setStdNumber(StudentNumber(userData, stdSelect));
      setUser(userData);
      if (
        userData?.students[`${stdSelect}`]?.[`${studentNumber}`] ===
          undefined ||
        userData?.students[`${stdSelect}`]?.[`${studentNumber}`] === "" ||
        stdGrade === ""
      ) {
        return;
      }
      let studentNum;
      if (stdNumber < 10) {
        studentNum = "0" + String(stdNumber);
      } else {
        studentNum = String(stdNumber);
      }
      axios
        .get(`${MainURL}/user/student/${stdGrade}${stdCls}${studentNum}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          setStudentData(res.data);
        })
        .catch((e) => {
          throw e;
        });
    }
  }, [studentData, userData, stdSelect, stdGrade, stdNumber, stdCls, token]);

  const LoginBtnClick = () => {
    props.history.push("/login");
  };

  return (
    <S.StudentInfo>
      <div className="container club">
        <S.Title>마이페이지</S.Title>
        {token ? (
          <>
            <S.StudentContainer>
              <span className="student-title">{user?.name} 학부모님</span>
              <S.StudentNameScore>
                <S.StudenSelect>
                  <StudentItemBox
                    stdGrade={stdGrade}
                    stdCls={stdCls}
                    stdNumber={stdNumber}
                    user={user?.students}
                    stdSelect={stdSelect}
                    setArrowSelect={setArrowSelect}
                    arrowSelect={arrowSelect}
                  />
                  {arrowSelect ? (
                    <>
                      {user?.students?.length === 0 ? (
                        <></>
                      ) : (
                        <S.StudentMore>
                          {user?.students?.map((students, index) => {
                            return (
                              <div
                                className="student-name-wrapper"
                                key={index}
                                onClick={() => {
                                  setStdSelect(index);
                                  setArrowSelect(!arrowSelect);
                                }}
                              >
                                <div className="student-name-info-wrapper">
                                  <img
                                    className="profile-img"
                                    src={Profile}
                                    alt="프로필 사진"
                                  />
                                  <div className="student-name">
                                    <span>
                                      {StudentGrade(userData, index)}학년{" "}
                                      {StudentClass(userData, index)}반{" "}
                                      {StudentNumber(userData, index)}번
                                    </span>
                                    <span>
                                      {`소프트웨어개발과 ${
                                        user?.students[index]?.[
                                          `${studentName}`
                                        ]
                                      }`}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </S.StudentMore>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
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
                      src={
                        userInfo?.[`${mealApplied}`] === 2 ? MealGreen : MealRed
                      }
                      alt="급식신청여부"
                    ></img>
                    <img
                      src={userInfo?.[`${stayStatus}`] !== 4 ? Home : Remain}
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
