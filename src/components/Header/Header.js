import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/userAction";
import { PMS } from "../../assets";
import * as S from "./style";

const Header = () => {
  const [display, setDisplay] = useState();
  const [notice, setNotice] = useState(false);
  const token = localStorage.getItem("access-token");
  const dispatch = useDispatch();
  const history = useHistory();

  //로그아웃
  const logout = () => {
    dispatch(logoutUser());
    alert("로그아웃 되었습니다.");
    history.push("/PMS-Front-V2/");
  };

  return (
    <S.Header display={display}>
      <Link to="/PMS-Front-V2/" className="logo">
        <img src={PMS} alt="PMS로고이미지"></img>
      </Link>
      <S.Nav className="nav">
        <Link to="/calendar">행사일정</Link>
        <Link
          to="/Notice"
          onMouseOver={() => setNotice(!notice)}
          onMouseOut={() => setNotice(!notice)}
        >
          학교소식
        </Link>
        <Link
          to="/club-info"
          style={{ padding: "30px 0" }}
          onMouseOver={() => setDisplay(!display)}
          onMouseOut={() => setDisplay(!display)}
        >
          소개
        </Link>
        <Link to="/MyPage">마이페이지</Link>
        {token ? (
          <Link to="/PMS-Front-V2/" onClick={logout}>
            로그아웃
          </Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
        <ul
          id="headModal"
          className="nav-link"
          onMouseOver={() => setDisplay(!display)}
          onMouseOut={() => setDisplay(!display)}
          style={{
            height: display ? 150 : 0,
          }}
        >
          <li className="link">
            <Link to="/company-info">취업처 소개</Link>
          </li>
          <li className="link">
            <Link to="/club-info">동아리 소개</Link>
          </li>
          <li className="link">
            <Link to="/creators-info">개발자 소개</Link>
          </li>
        </ul>
        <ul
          id="headModal"
          className="nav-link-notice"
          onMouseOver={() => setNotice(!notice)}
          onMouseOut={() => setNotice(!notice)}
          style={{
            height: notice ? 150 : 0,
          }}
        >
          <li className="link">
            <Link to="/notice">공지사항</Link>
          </li>
          <li className="link">
            <Link to="/familyLetter">가정통신문</Link>
          </li>
          <li className="link">
            <Link to="/photo-album/page=0">포토앨범</Link>
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
};

export default withRouter(Header);
