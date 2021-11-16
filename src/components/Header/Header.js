import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutUser } from "../../actions/userAction";
import { PMS } from "../../assets";
import { token } from "../../utils/axios/axios";
import * as S from "./style";

const Header = () => {
  const [display, setDisplay] = useState("none");
  const [hover, setHover] = useState("black");
  const dispatch = useDispatch();
  const history = useHistory();

  const mouseEvent = () => {
    setDisplay("flex");
  };
  const mouseOutEvent = () => {
    setDisplay("none");
  };

  const hoverEvent = () => {
    setHover("#350871 ");
  };

  //로그아웃
  const logout = () => {
    dispatch(logoutUser());
    alert("로그아웃 되었습니다.");
    history.push("/");
  };

  return (
    <S.Header>
      <Link to="/" className="logo">
        <img src={PMS} alt="PMS로고이미지"></img>
      </Link>
      <S.Nav className="nav">
        <Link to="/calendar">행사일정</Link>
        <Link to="/Notice">학교소식</Link>
        <Link
          style={{ padding: "30px 0" }}
          to="/club-info"
          onMouseMove={mouseEvent}
          onMouseLeave={mouseOutEvent}
        >
          소개
        </Link>
        <Link to="/MyPage">마이페이지</Link>
        {token ? (
          <Link to="/" onClick={logout}>
            로그아웃
          </Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </S.Nav>
      <ul
        id="headModal"
        className="nav-link"
        onMouseMove={mouseEvent}
        onMouseLeave={() => mouseOutEvent()}
        style={{ display: display }}
      >
        <li className="link">
          <Link
            to="/company-info"
            style={{ color: hover }}
            onMouseMove={hoverEvent}
          >
            취업처 소개
          </Link>
        </li>
        <li className="link">
          <Link
            to="/club-info"
            style={{ color: hover }}
            onMouseMove={hoverEvent}
          >
            동아리 소개
          </Link>
        </li>
        <li className="link">
          <Link
            to="/company-info"
            style={{ color: hover }}
            onMouseMove={hoverEvent}
          >
            개발자 소개
          </Link>
        </li>
      </ul>
    </S.Header>
  );
};

export default Header;
