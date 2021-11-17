import React, { useState, useEffect } from "react";
import * as S from "./style";
import {
  StudentUserPoint,
  StudentUserInfo,
  StudentUserOuting,
} from "../../../../utils/api/myPage";
import { Home, MealGreen, MealRed, Remain } from "../../../../assets";

function StatusItem(props) {
  const [stdNum, setStdNum] = useState();
  useEffect(() => {
    setStdNum(props.number);
    console.log(props.number);
  }, [props.number]);

  const studentUserPoint = StudentUserPoint(stdNum);
  const userInformation = StudentUserInfo(stdNum);
  const studentUserOuting = StudentUserOuting(stdNum);
  const [remainPhrase, setRemainPhrase] = useState("");
  const [remainComment, setRemainComment] = useState("");

  useEffect(() => {
    const stdStay = userInformation?.["stay-status"];
    switch (stdStay) {
      case 4:
        setRemainPhrase("잔류");
        setRemainComment("기숙사에 잔류합니다.");
        break;
      default:
        setRemainPhrase("금요 귀가");
        setRemainComment("일요일 6시 30분 이후 귀가");
    }
  }, [userInformation]);
  const penaltyEducation = (str) => {
    if (str.endsWith("다벌점 교육 완료")) {
      return 1;
    } else {
      return 0;
    }
  };
  switch (props.value) {
    case 1:
      return (
        <>
          {studentUserPoint?.points?.map((point, index) => (
            <S.PointWrapper
              display={penaltyEducation(point.reason) ? "flex" : "none"}
              borderColor={point.type ? "#4775b2" : "#de7373"}
              color={point.type ? "#4775b2" : "#de7373"}
              key={index}
            >
              <div className="pointTitle">
                <S.PointReason>{point.reason}</S.PointReason>
                {point.date}
              </div>
              <S.Point>
                {point.point > 0 ? "+" : "-"}
                {point.point}
              </S.Point>
            </S.PointWrapper>
          ))}
        </>
      );
    case 3:
      if (studentUserOuting?.outings.length === 0) {
        return <S.NoneBreakdown>외출 내역이 없습니다</S.NoneBreakdown>;
      }
      return (
        <S.PointWrapper borderColor="#92B5F9" color="#92B5F9">
          <div className="pointTitle">
            <S.PointReason>{studentUserOuting?.outings[0]?.date}</S.PointReason>
            {studentUserOuting?.outings[0]?.place}
          </div>
        </S.PointWrapper>
      );
    case 4:
      return (
        <S.RemainWrapper borderColor="#56AD9E">
          <img
            src={userInformation?.["stay-status"] ? Remain : Home}
            alt="잔류여부"
          ></img>
          <h2>{remainPhrase}</h2>
          <div className="remainContent">{remainComment}</div>
        </S.RemainWrapper>
      );
    case 5:
      return (
        <S.RemainWrapper
          borderColor={
            userInformation?.["meal-applied"] ? "#56AD9E" : "#D37C7C"
          }
        >
          <img
            src={userInformation?.["meal-applied"] ? MealGreen : MealRed}
            alt="급식신청여부"
          ></img>
          <h2>
            {userInformation?.["meal-applied"]
              ? "주말 급식 신청"
              : "주말 급식 미신청"}
          </h2>
        </S.RemainWrapper>
      );
    default:
      return (
        <>
          {studentUserPoint?.points?.map((point, index) => (
            <S.PointWrapper
              display={penaltyEducation(point.reason) ? "none" : "flex"}
              borderColor={point.type ? "#4775b2" : "#de7373"}
              color={point.type ? "#4775b2" : "#de7373"}
              key={index}
            >
              <div className="pointTitle">
                <S.PointReason>{point.reason}</S.PointReason>
                {point.date}
              </div>
              <S.Point>
                {point.point > 0 ? "+" : "-"}
                {point.point}
              </S.Point>
            </S.PointWrapper>
          ))}
        </>
      );
  }
}

export default StatusItem;
