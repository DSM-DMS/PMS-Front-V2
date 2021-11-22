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
    // <BrowserRouter>
    <Switch>
      <Route path="/PMS-Front-V2/" component={MainPage} exact />
      <Route path="/PMS-Front-V2/notice" component={Notice} exact />
      <Route path="/PMS-Front-V2/mypage" component={MyPage} exact />
      <Route
        path="/PMS-Front-V2/familyLetterWritten/:id"
        component={FamilyLetterWritten}
        exact
      />
      <Route path="/PMS-Front-V2/login" component={Login} exact />
      <Route path="/PMS-Front-V2/sign-up" component={SignUp} exact />
      <Route path="/PMS-Front-V2/calendar" component={Calendar} exact />
      <Route
        path="/PMS-Front-V2/creators-info"
        component={CreatorsInfo}
        exact
      />
      <Route path="/PMS-Front-V2/club-info" component={ClubInfo} exact />
      <Route path="/PMS-Front-V2/company-info" component={CompanyInfo} exact />
      <Route path="/PMS-Front-V2/familyLetter" component={FamilyLetter} exact />
      <Route
        path="/PMS-Front-V2/noticeWritten/:id"
        component={NoticeWritten}
        exact
      />
      <Route
        path="/PMS-Front-V2/photo-album/page=:page"
        component={PhotoAlbum}
        exact
      />
      <Route
        path="/PMS-Front-V2/photo-album/:id"
        component={PhotoDetail}
        exact
      />
    </Switch>
    //</BrowserRouter>
  );
}

export default UserRouter;
