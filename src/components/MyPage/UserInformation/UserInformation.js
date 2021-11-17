import React, { useState } from "react";
import * as S from "./style";
import Axios from "axios";
import { MainURL } from "../../../utils/axios/axios";
function UserInformation() {
  const [nickname, setNickname] = useState("이재원");
  const onChange = (e) => {
    setNickname(e.target.value);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      Axios.put(`${MainURL}/user/name`, {
        name: nickname,
      })
        .then((res) => {
          console.log(res);
          return res;
        })
        .catch((e) => {
          console.log(e);
        });
      alert("닉네임이 변경되었습니다.");
    }
  };
  return (
    <S.UserInformation>
      <h4>개인 정보</h4>
      <S.UserInformationItem>
        <S.ItemTitle>이메일</S.ItemTitle>
        <S.ItemContent></S.ItemContent>
      </S.UserInformationItem>
      <S.UserInformationItemBot>
        <S.ItemTitle>닉네임</S.ItemTitle>
        <S.NickNameInput
          onChange={onChange}
          value={nickname}
          onKeyPress={onKeyPress}
        />
      </S.UserInformationItemBot>
    </S.UserInformation>
  );
}

export default UserInformation;
