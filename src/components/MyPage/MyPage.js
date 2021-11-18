import React, { useEffect } from "react";
import * as S from "./style";
import BackgroundTitle from "../BackgroundTitle";
import Footer from "../footer/Footer";
import UserInformation from "./UserInformation/UserInformation";
import ChangePassword from "./ChangePassword/ChangePassword";
import ChildrenStatus from "./ChildrenStatus/ChildrenStatus";
import { useHistory } from "react-router";

function MyPage() {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("access-token") || "";
    if (token === "") {
      alert("로그인 후 이용해주세요");
      history.push("/login");
    }
  });
  return (
    <S.MainWrapper>
      <BackgroundTitle title="마이페이지" />
      <S.MyPageWrapper>
        <S.MyPageItem>
          <S.ItemBox>
            <UserInformation />
            <ChangePassword />
          </S.ItemBox>
          <S.ItemBox>
            <h4>자녀정보</h4>
            <S.ChildrenInformation>
              <ChildrenStatus />
            </S.ChildrenInformation>
          </S.ItemBox>
        </S.MyPageItem>
      </S.MyPageWrapper>
      <Footer />
    </S.MainWrapper>
  );
}

export default MyPage;
