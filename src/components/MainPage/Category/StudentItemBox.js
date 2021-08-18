import React from "react";
import { studentName } from "../../../utils/variable/student";
import { Profile, Arrow } from "../../../assets";
import * as S from "../style";

const StudentItemBox = (props) => {
  return (
    <>
      <div className="student-name-wrapper">
        <div className="student-name-info-wrapper">
          <img className="profile-img" src={Profile} alt="프로필 사진" />
          <div className="student-name">
            <span>
              {props.stdGrade}학년 {props.stdCls}반 {props.stdNum}번
            </span>
            <span>
              소프트웨어개발과
              {props.user?.students[`${props.stdSelect}`]?.[`${studentName}`]}
            </span>
          </div>
        </div>
        <img className="arrow-img" src={Arrow} alt="화살표"></img>
      </div>
    </>
  );
};

export default StudentItemBox;
