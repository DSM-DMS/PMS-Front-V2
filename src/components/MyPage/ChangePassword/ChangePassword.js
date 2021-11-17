import React, { useState } from "react";
import * as S from "./style";
import { passwordFetch } from "../../../utils/axios/axios";
function ChangePassword() {
  const [inputs, setInputs] = useState({
    oldpw: "",
    newpw: "",
    newpwCheck: "",
  });
  const [emptyCheck, setEmptyCheck] = useState(0);
  const { oldpw, newpw, newpwCheck } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    if (oldpw !== "" && newpw !== "" && newpwCheck !== "") {
      setEmptyCheck(1);
    } else {
      setEmptyCheck(0);
    }
  };
  const onClick = () => {
    if (newpw === newpwCheck) {
      passwordFetch(oldpw, newpw);
    } else {
      alert("새 비밀번호가 다릅니다.");
    }
  };
  return (
    <S.ChangePassword>
      <S.ChangePasswordTitle>
        <h4>비밀번호 변경</h4>개인정보 보호를 위해 비밀번호는 주기적으로
        변경해주세요.
      </S.ChangePasswordTitle>
      <br />
      <S.ChangePasswordWrapper>
        <S.ChangePasswordItemBox>
          <S.ChangePasswordInput
            name="oldpw"
            placeholder="현재 비밀번호 입력"
            type="password"
            onChange={onChange}
            value={oldpw}
          />
        </S.ChangePasswordItemBox>
        <S.ErrorMessage>비밀번호가 일치하지 않습니다</S.ErrorMessage>
        <S.ChangePasswordItemBox>
          <S.ChangePasswordInput
            name="newpw"
            placeholder="신규 비밀번호 입력"
            type="password"
            onChange={onChange}
            value={newpw}
          />
        </S.ChangePasswordItemBox>
        <S.ChangePasswordItemBox>
          <S.ChangePasswordInput
            name="newpwCheck"
            placeholder="신규 비밀번호 재입력"
            type="password"
            onChange={onChange}
            value={newpwCheck}
          />
        </S.ChangePasswordItemBox>
        <S.ErrorMessage>비밀번호가 일치하지 않습니다</S.ErrorMessage>
        {emptyCheck === 0 ? (
          <S.ChangePasswordBtn>확인</S.ChangePasswordBtn>
        ) : (
          <S.ChangePasswordNotEmptyBtn onClick={onClick}>
            확인
          </S.ChangePasswordNotEmptyBtn>
        )}
      </S.ChangePasswordWrapper>
    </S.ChangePassword>
  );
}

export default ChangePassword;
