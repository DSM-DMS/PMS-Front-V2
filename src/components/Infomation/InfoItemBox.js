import React from "react";
import * as S from "./style";

const InfoItemBox = (props) => {
  return (
    <S.ItemBox
      onClick={() => {
        props.setModalBool(!props.modalBool);
        props.setClubTitle(props.clubName);
      }}
    >
      <div className="img-wrapper">
        <img src={props.clubImg} alt="로고" />
      </div>
      <h3>{props.clubName}</h3>
      <p>{props.explanation}</p>
      <span>{props.resolution}</span>
    </S.ItemBox>
  );
};

export default InfoItemBox;
