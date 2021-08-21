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
  const [stdSelect, setStdSelect] = useState(0);
  const [user, setUser] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const [stdGrade, setStdGrade] = useState();
  const [stdCls, setStdCls] = useState();
  const [stdNum, setStdNum] = useState();

  const isAccessToken = localStorage.getItem("access-token");

  const { data } = useSWR(`${MainURL}/user`, authFetcher);

  useEffect(() => {
    console.log(data);
  }, []);

  /*  const func = async () => {
    await setUser(data);
    //const user = await StudentUser();
    setUserInfo(
      StudentUserInfo(user?.students[`${stdSelect}`]?.[`${studentNumber}`])
    );

    setStdGrade(
      Math.floor(user?.students[`${stdSelect}`]?.[`${studentNumber}`] / 1000)
    );
    setStdCls(
      Math.floor(
        (user?.students[`${stdSelect}`]?.[`${studentNumber}`] % 1000) / 100
      )
    );
    setStdNum(
      Math.floor(
        (user?.students[`${stdSelect}`]?.[`${studentNumber}`] % 1000) % 100
      )
    );
  };

  useEffect(() => {
    func();
  }, []); */

  const [student, setStudent] = useState({
    stdGrade: "",
    stdCls: "",
    stdNum: "",
  });

  useEffect(() => {
    setStudent({
      stdGrade: stdGrade,
      stdCls: stdCls,
      stdNum: stdNum,
    });
  }, [stdGrade, stdCls, stdNum]);

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
                    user={user?.students}
                    stdSelect={stdSelect}
                  />

                  <S.StudentMore>
                    {user &&
                      user.stdudents &&
                      user.students.map((students, i) => {
                        console.log(student);
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
                                  <span>
                                    {stdGrade}학년 {stdCls}반 {stdNum}번
                                  </span>
                                  <span>
                                    소프트웨어개발과
                                    {user?.students[i]?.[`${studentName}`]}
                                  </span>
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
