import React from "react";
import * as S from "./style";

const PagiNation = (props) => {
  const pageCount = Math.ceil(props.itemsCount / props.pageSize);

  console.log(props.maxPage);

  /*   var page = new Array(props.maxPage);
  console.log(page);
 */
  return (
    <S.PagiNation>
      <div onClick={props.onClickLeft}>{"<"}</div>
      {/*  {props.maxPage.map((data, index) => {
        return (
          <div key={index} onClick={props.onClickPageNation}>
            {index + 1}
          </div>
        );
      })} */}
      {/*  {[...Array(props.maxPage)].map((data, index) => {
        return (
          <div key={index} onClick={props.onClickPageNation}>
            {index + 1}
          </div>
        );
      })} */}
      <div onClick={props.onClickRight}>{">"}</div>
    </S.PagiNation>
  );
};

export default PagiNation;
