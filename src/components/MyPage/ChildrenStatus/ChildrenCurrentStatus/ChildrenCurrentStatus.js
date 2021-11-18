import React, { useState, useEffect } from "react";
import * as S from "./style";
import StatusItem from "./StatusItem";
const ChildrenCurrentStatus = (props) => {
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    switch (props.value) {
      case 2:
        setPhrase("상벌점 내역 확인");
        break;
      case 3:
        setPhrase("외출 내역 확인");
        break;
      case 4:
        setPhrase("이번주 잔류 신청 상태");
        break;
      case 5:
        setPhrase("주말 급식 신청 여부");
        break;

      default:
        setPhrase("다벌점 봉사 활동 내역");
    }
  }, [props.value]);

  return (
    <S.ChildrenCurrentStatus>
      <S.ChildrenCurrentStatusTitle>{phrase}</S.ChildrenCurrentStatusTitle>
      <StatusItem value={props.value} number={props.number} />
    </S.ChildrenCurrentStatus>
  );
};

export default ChildrenCurrentStatus;
