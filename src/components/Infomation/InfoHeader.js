import React, { useState } from "react";
import * as S from "./style";

const InfoHeader = (props) => {
  return (
    <S.InfoHeaderWrapper>
      <h1>{props.title}</h1>
      <div className="info-search">
        <span>{props.selectName}</span>
        <input
          type="text"
          placeholder={props.placeholder}
          onChange={(e) => {
            props.setSearchWord(e.target.value);
          }}
        />
      </div>
    </S.InfoHeaderWrapper>
  );
};

export default InfoHeader;
