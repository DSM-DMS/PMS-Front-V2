import React from "react";
import * as S from "../style";
import { useHistory } from "react-router";

const PhotoItem = (props) => {
  const history = useHistory();

  return (
    <S.ItemBox
      onClick={() => {
        history.push("/FamilyLetterWritten");
      }}
    >
      <S.ItemContainer>
        <img src={props.img} alt="로고"></img>
        <h3>{props.title}</h3>
        <p>{props.update}</p>
      </S.ItemContainer>
    </S.ItemBox>
  );
};

export default PhotoItem;
