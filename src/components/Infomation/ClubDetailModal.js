import React, { useEffect, useRef, useState } from "react";
import { Close } from "../../assets";
import * as S from "./style";

const ClubDetailModal = (props) => {
  const sliderRef = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    sliderRef.current.style.transition = "all 0.5s ease-in-out";

    let i = 0;
    setInterval(() => {
      i++;
      setVal(i);

      if (i === 4) i = 0;
    }, 3000);
  }, []);

  return (
    <S.ModalWrapper modal={props.modal}>
      <S.ModalItem id="modal">
        <S.ModalHeader>
          <div className="background-cover">
            <img
              onClick={() => {
                props.setModalBool(!props.modal);
              }}
              src={Close}
              className="close"
              alt="닫기 아이콘"
            />
            <div className="club-wrapper">
              <img src={props.img} alt="로고" className="logo"></img>
              <span>{props.clubName}</span>
            </div>
          </div>
        </S.ModalHeader>
        <div className="title-bar"></div>
        <S.InfoWrapper>
          <h3>{props.explanation}</h3>
          <div className="member-wrap">
            <p>동아리원</p>
            <div className="member-container">
              {props.member?.map((member, index) => (
                <span key={index}>{member}</span>
              ))}
            </div>
          </div>
          <div
            className="club-img"
            ref={sliderRef}
            style={{ transform: `translateX(${-val * 250}px)` }}
          >
            <img src={props.img} alt="동아리 사진"></img>
            <img src={props.img} alt="동아리 사진"></img>
            <img src={props.img} alt="동아리 사진"></img>
            <img src={props.img} alt="동아리 사진"></img>
            <img src={props.img} alt="동아리 사진"></img>
          </div>
        </S.InfoWrapper>
      </S.ModalItem>
    </S.ModalWrapper>
  );
};

export default ClubDetailModal;
