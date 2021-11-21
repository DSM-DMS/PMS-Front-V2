import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import {
  FamilyLetter,
  Notice,
  MyPage,
  FamilyLetterWritten,
  NoticeWritten,
  MainPage,
  Login,
  SignUp,
  Calendar,
  CreatorsInfo,
  ClubInfo,
  CompanyInfo,
  PhotoAlbum,
  PhotoDetail,
} from "../components/index";

function UserRouter() {
  return (
    <BrowserRouter basename="/PMS Front-V2">
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/notice" component={Notice} exact />
        <Route path="/mypage" component={MyPage} exact />
        <Route
          path="/familyLetterWritten/:id"
          component={FamilyLetterWritten}
          exact
        />
        <Route path="/login" component={Login} exact />
        <Route path="/sign-up" component={SignUp} exact />
        <Route path="/calendar" component={Calendar} exact />
        <Route path="/creators-info" component={CreatorsInfo} exact />
        <Route path="/club-info" component={ClubInfo} exact />
        <Route path="/company-info" component={CompanyInfo} exact />
        <Route path="/familyLetter" component={FamilyLetter} exact />
        <Route path="/noticeWritten/:id" component={NoticeWritten} exact />
        <Route path="/photo-album/page=:page" component={PhotoAlbum} exact />
        <Route path="/photo-album/:id" component={PhotoDetail} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default UserRouter;
