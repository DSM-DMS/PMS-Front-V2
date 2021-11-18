import React, { useEffect, useState } from "react";
import * as S from "./style";
import Axios from "axios";
import { MainURL, token } from "../../../utils/axios/axios";
import { StudentUser } from "../../../utils/api/myPage";
function UserInformation() {
  const studentUser = StudentUser();
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    setNickname(studentUser?.name);
  }, [studentUser?.name]);
  const onChange = (e) => {
    setNickname(e.target.value);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      Axios.put(
        `${MainURL}/user/name`,
        {
          name: nickname,
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
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
      <S.UserInformationItemBot>
        <S.ItemTitle>닉네임</S.ItemTitle>
        <S.ItemContent>
          <S.NickNameInput
            onChange={onChange}
            value={nickname}
            onKeyPress={onKeyPress}
          />
        </S.ItemContent>
      </S.UserInformationItemBot>
    </S.UserInformation>
  );
}

export default UserInformation;
