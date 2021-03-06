import React, { useEffect, useRef, useState } from "react";
import * as S from "./style/style";
import Header from "../Header/Header";
import Category from "./Category";
import MainPageFooter from "../footer/MainPageFooter";
import { MainBackground, MainBackground3 } from "../../assets/index";
import Typist from "react-typist";

function MainPage() {
  const currentSlider = 0;
  const sliderRef = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      i++;
      setVal(i);

      if (i === 2) i = -1;
    }, 10000);
  }, [currentSlider]);

  return (
    <>
      <S.MainWrapper>
        <Header />
        <S.CodingImg val={val}>
          <div
            className="School-img"
            ref={sliderRef}
            style={{ transform: `translateX(${-val * 100}vw)` }}
          >
            <img src={MainBackground} alt="슬라이드 배경"></img>
            <img src={MainBackground3} alt="슬라이드 배경"></img>
            <img src={MainBackground3} alt="슬라이드 배경"></img>
          </div>
          <div className="SchoolTitle" id="title-animation">
            <p className="bottomLine"></p>
            <p>대덕소프트웨어마이스터고등학교</p>
            <Typist className="typist">
              창의성과 인간미를 품은 소트프웨어 영재의 육성
            </Typist>
          </div>
          <Category style={{ margin: "50px" }} />
        </S.CodingImg>
        <MainPageFooter />
      </S.MainWrapper>
    </>
  );
}

export default MainPage;
