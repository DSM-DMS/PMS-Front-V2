import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Home, MealGreen, MealRed, Remain } from "../../../../assets";
import axios from "axios";
import { MainURL } from "../../../../utils/axios/axios";

function StatusItem(props) {
  const [stdNum, setStdNum] = useState();
  const token = `${localStorage.getItem("access-token")}`;
  const [studentUserPoint, setStudentUserPoint] = useState("");
  const [studentUserOuting, setStudentUserOuting] = useState("");
  const [userInformation, setUserInformation] = useState("");
  useEffect(() => {
    setStdNum(props.number);
    if (stdNum !== undefined && stdNum !== "") {
      axios
        .get(`${MainURL}/user/student/point/${stdNum}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          setStudentUserPoint(res);
        })
        .catch((e) => {
          throw e;
        });
      axios
        .get(`${MainURL}/user/student/outing/${stdNum}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          setStudentUserOuting(res);
        })
        .catch((e) => {
          throw e;
        });
      axios
        .get(`${MainURL}/user/student/${stdNum}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          setUserInformation(res);
        })
        .catch((e) => {
          throw e;
        });
    }
  }, [props.number, stdNum, token]);
  const [remainPhrase, setRemainPhrase] = useState("");
  const [remainComment, setRemainComment] = useState("");

  useEffect(() => {
    const stdStay = userInformation?.data?.["stay-status"];
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
          {studentUserPoint?.data?.points?.map((point, index) => (
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
      if (studentUserOuting?.data?.outings.length === 0) {
        return <S.NoneBreakdown>외출 내역이 없습니다</S.NoneBreakdown>;
      }
      return (
        <>
          {studentUserOuting?.data?.outings?.map((outing, i) => (
            <S.PointWrapper borderColor="#92B5F9" color="#92B5F9" key={i}>
              <div className="pointTitle">
                <S.PointReason>{outing.date}</S.PointReason>
                {outing.place}
              </div>
            </S.PointWrapper>
          ))}
        </>
      );
    case 4:
      return (
        <S.RemainWrapper borderColor="#56AD9E">
          <img
            src={userInformation?.data?.["stay-status"] ? Remain : Home}
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
            userInformation?.data?.["meal-applied"] ? "#56AD9E" : "#D37C7C"
          }
        >
          <img
            src={userInformation?.data?.["meal-applied"] ? MealGreen : MealRed}
            alt="급식신청여부"
          ></img>
          <h2>
            {userInformation?.data?.["meal-applied"]
              ? "주말 급식 신청"
              : "주말 급식 미신청"}
          </h2>
        </S.RemainWrapper>
      );
    default:
      return (
        <>
          {studentUserPoint?.data?.points?.map((point, index) => (
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
