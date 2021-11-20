import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as S from "./style";
import { BackgroundTitle, Footer } from "../index";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/userAction";
import { LoginError } from "../../assets";

function SignUp() {
  const [errorIcon, setErrorIcon] = useState("none");
  const [borderBottom, setBorderBottom] = useState("");
  const [width, setWidth] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const { name, email, password, passwordCheck } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    if (passwordCheck.length >= 1) {
      if (password !== passwordCheck) {
        setBorderBottom("2px solid #FF0000");
        setErrorIcon("flex");
        setWidth("100%");
      } else {
        setBorderBottom("");
        setErrorIcon("none");
        setWidth("");
      }
    } else {
      setBorderBottom("");
      setErrorIcon("none");
      setWidth("");
    }
  }, [password, passwordCheck]);

  //회원가입
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === passwordCheck) {
      dispatch(registerUser(inputs))
        .then(() => history.push("/PMS-Front-V2/"))
        .catch((e) => console.log(e));

      setInputs({
        name: "",
        email: "",
        password: "",
        passwordCheck: "",
      });
    } else {
      alert("비밀번호를 다시 확인해주세요");
      setBorderBottom("2px solid #FF0000");
      setErrorIcon("flex");
    }
  };

  return (
    <S.MainWrapper>
      <BackgroundTitle title="회원가입" />
      {/* 회원가입 박스 */}
      <S.LoginWrapper>
        <S.MainItem onSubmit={handleSubmit}>
          <S.Title>
            <p>PMS 회원가입</p>
            <Link to="/login">로그인 하기 {">"} </Link>
          </S.Title>
          {/* 로그인 입력창 */}
          <S.LoginInput>
            <S.InputWrapper /* onKeyUp={SignUp} */>
              <input
                onChange={onChange}
                name="name"
                type="text"
                placeholder="이름"
                value={name}
              ></input>
              <input
                onChange={onChange}
                name="email"
                type="text"
                placeholder="이메일"
                value={email}
              ></input>
              <input
                onChange={onChange}
                name="password"
                type="password"
                placeholder="비밀번호"
                value={password}
              ></input>
              <div
                className="password-wrapper"
                style={{ borderBottom: borderBottom }}
              >
                <input
                  style={{ borderBottom: borderBottom }}
                  onChange={onChange}
                  name="passwordCheck"
                  type="password"
                  placeholder="비밀번호 확인"
                  value={passwordCheck}
                ></input>
                <img
                  style={{ display: errorIcon }}
                  src={LoginError}
                  alt="로그인 오류"
                ></img>
              </div>
              <span
                className="error-message"
                style={{ width: width, display: errorIcon }}
              >
                비밀번호가 일치하지 않습니다.
              </span>
              <button type="submit">가입하기</button>
            </S.InputWrapper>
            {/* 소셜 로그인 */}
            {/*  <S.SocialWrapper>
              <SocialButton LoginName="FaceBook 로그인" />
              <SocialButton LoginName="Google 로그인" />
              <SocialButton LoginName="KaKaotalk 로그인" />
              <SocialButton LoginName="Naver 로그인" />
            </S.SocialWrapper> */}
          </S.LoginInput>
        </S.MainItem>
      </S.LoginWrapper>
      <Footer></Footer>
    </S.MainWrapper>
  );
}

export default SignUp;
