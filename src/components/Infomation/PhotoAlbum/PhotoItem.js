import React from "react";
import * as S from "../style";
import { useHistory } from "react-router";

const PhotoItem = (props) => {
  const history = useHistory();
  const id = props.id;

  return (
    <S.ItemBox
      onClick={() => {
        history.push(`/photo-album/${id}`);
      }}
    >
      <S.ItemContainer>
        <div className="img-wrapper">
          <img src={props.img} alt="로고"></img>
        </div>
        <h3>{props.title}</h3>
        <p>작성일 {props.update}</p>
      </S.ItemContainer>
    </S.ItemBox>
  );
};

export default PhotoItem;
