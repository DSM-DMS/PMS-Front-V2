import React from "react";
import * as S from "./style";

const InfoItemBox = (props) => {
  //모달 클릭시 나타나게 해줌

  return (
    <>
      <S.ItemBox>
        <S.ItemContainer>
          <div className="img-wrapper">
            <img src={props.clubImg} alt="로고" />
          </div>
          <h3>{props.clubName}</h3>
          <p>{props.explanation}</p>
          <span>{props.resolution}</span>
        </S.ItemContainer>
      </S.ItemBox>
    </>
  );
};

export default InfoItemBox;
