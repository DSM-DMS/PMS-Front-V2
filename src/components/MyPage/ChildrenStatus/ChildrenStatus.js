import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Bike, Home, MealGreen, MealRed, Remain } from "../../../assets/index";
import ChildrenCurrentStatus from "./ChildrenCurrentStatus/ChildrenCurrentStatus";
import { StudentUser } from "../../../utils/api/myPage";
import { request } from "../../../utils/axios/axios";
import { AddChildren } from "../../../assets";
import { MainURL } from "../../../utils/axios/axios";
import { token } from "../../../utils/axios/axios";
import axios from "axios";
function ChildrenStatus() {
  const student = StudentUser();
  const [studentName, setStudentName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [open, setOpen] = useState(0);
  const [studentAim, setStudentAim] = useState(0);

  const [userInformation, setUserInformation] = useState("");
  useEffect(() => {
    setStudentName(student?.students[studentAim]["student-name"]);
    setStudentNumber(student?.students[studentAim]["student-number"]);
    if (studentNumber !== undefined && studentNumber !== "") {
      axios
        .get(`${MainURL}/user/student/${studentNumber}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          setUserInformation(res);
        })
        .catch((e) => {
          throw e;
        });
    }
  }, [student?.students, studentAim, studentNumber]);

  const getCode = () => {
    const stdNumber = prompt("자녀확인 코드를 입력해주세요");
    request(
      "post",
      `/user/student`,
      {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
      { number: stdNumber }
    );
  };
  const onClick = () => {
    open ? setOpen(0) : setOpen(1);
  };
  const onClickAim = (i) => {
    setStudentAim(i);
    setOpen(0);
  };
  const studentInfo = (num, state) => {
    if (state === 1) {
      return Math.floor(num / 1000);
    } else if (state === 2) {
      return Math.floor((num % 1000) / 100);
    } else if (state === 3) {
      return Math.floor((num % 1000) % 100);
    } else {
      return Math.floor(num / 1000) === 1
        ? "공통교육과정"
        : Math.floor((num % 1000) / 100) === 3
        ? "임베디드 소프트웨어 개발과"
        : Math.floor((num % 1000) / 100) === 4
        ? "정보보안과"
        : "소프트웨어 개발과";
    }
  };
  const [phrase, setPhrase] = useState(1);
  const clickPhrase = (num) => {
    setPhrase(num);
  };
  return (
    <>
      <S.Container>
        <S.MyChildren props={2} border={0}>
          <S.ChildrenProfileImage />
          <S.ChildrenInformationValue>
            <h5>{studentName}</h5>
            {studentInfo(studentNumber, 1)}학년
            {studentInfo(studentNumber, 2)}반{studentInfo(studentNumber, 3)}번 -
            {studentInfo(studentNumber, 4)}
          </S.ChildrenInformationValue>
          <S.TriangleImg onClick={onClick} />
        </S.MyChildren>
        {student?.students.map((student, i) => (
          <S.MyChildren
            props={open && i !== studentAim}
            key={i}
            onClick={() => onClickAim(i)}
            cursor={1}
            border={1}
          >
            <S.ChildrenProfileImage />
            <S.ChildrenInformationValue>
              <h5>{student["student-name"]}</h5>
              {studentInfo(student["student-number"], 1)}학년
              {studentInfo(student["student-number"], 2)}반
              {studentInfo(student["student-number"], 3)}번 -
              {studentInfo(student["student-number"], 4)}
            </S.ChildrenInformationValue>
          </S.MyChildren>
        ))}
        <S.MyChildren
          props={open}
          cursor={1}
          border={1}
          onClick={() => getCode()}
        >
          <img src={AddChildren} alt="" />
          <S.AddChildren>학생 추가</S.AddChildren>
        </S.MyChildren>
      </S.Container>
      <S.ChildrenStatus>
        <S.StatusItemWrapper>
          <S.ChildrenStatusItem>
            <div className="itemTitle">기숙사 생활</div>
            <S.ItemInnerWrapper>
              <div className="checkStatus">
                <ul>
                  <li onClick={() => clickPhrase(1)} id="1">
                    다벌점 봉사 활동 내역
                  </li>
                  <li onClick={() => clickPhrase(2)} id="2">
                    상벌점 내역 확인
                  </li>
                </ul>
              </div>
              <div className="img-wrapper">
                <S.Point blue>{userInformation?.data?.["bonus-point"]}</S.Point>
                <S.Point>{userInformation?.data?.["minus-point"]}</S.Point>
              </div>
            </S.ItemInnerWrapper>
          </S.ChildrenStatusItem>
          <S.ChildrenStatusItem>
            <div className="itemTitle">학교 생활</div>
            <S.ItemInnerWrapper>
              <div className="checkStatus">
                <ul>
                  <li onClick={() => clickPhrase(3)}>외출 내역 확인</li>
                </ul>
              </div>
              <div className="img-wrapper">
                <img src={Bike} alt=""></img>
              </div>
            </S.ItemInnerWrapper>
          </S.ChildrenStatusItem>
          <S.ChildrenStatusItem>
            <div className="itemTitle">신청 상태</div>
            <S.ItemInnerWrapper>
              <div className="checkStatus">
                <ul>
                  <li onClick={() => clickPhrase(4)}>이번주 잔류 신청 상태</li>
                  <li onClick={() => clickPhrase(5)}>주말 급식 신청 여부</li>
                </ul>
              </div>
              <div className="img-wrapper">
                <img
                  src={
                    userInformation?.data?.["stay-status"] === 4 ? Remain : Home
                  }
                  alt="잔류여부"
                ></img>
                <img
                  src={
                    userInformation?.data?.["meal-apply"] === 2
                      ? MealGreen
                      : MealRed
                  }
                  alt="급식신청여부"
                ></img>
              </div>
            </S.ItemInnerWrapper>
          </S.ChildrenStatusItem>
          <S.ChildrenStatusItem>
            <div className="itemTitle">동아리</div>
            <S.ItemInnerWrapper>
              <div className="checkStatus">
                <h3>이 기능은 아직 사용할 수 없습니다.</h3>
              </div>
              <div className="img-wrapper"></div>
            </S.ItemInnerWrapper>
          </S.ChildrenStatusItem>
        </S.StatusItemWrapper>
        <ChildrenCurrentStatus value={phrase} number={studentNumber} />
      </S.ChildrenStatus>
    </>
  );
}

export default ChildrenStatus;
