import React from "react";
import { studentName } from "../../../utils/variable/student";
import { Profile, Arrow } from "../../../assets";
import * as S from "../style/myPageStyle";

const StudentItemBox = (props) => {
  return (
    <>
      <div className="student-name-wrapper">
        <div className="student-name-info-wrapper">
          <img className="profile-img" src={Profile} alt="프로필 사진" />
          <div className="student-name">
            <span>
              {props.stdGrade}학년 {props.stdCls}반 {props.stdNumber}번
            </span>
            <span>
              소프트웨어개발과{" "}
              {props.user?.[`${props.stdSelect}`]?.[`${studentName}`]}
            </span>
          </div>
        </div>
        <S.ArrowImg
          style={
            props.arrowSelect
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
          src={Arrow}
          alt="자녀 선택 화살표"
          onClick={() => props.setArrowSelect(!props.arrowSelect)}
        />
      </div>
    </>
  );
};

export default StudentItemBox;
