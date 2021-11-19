import React from "react";
import { Route, BrowserRouter, useHistory } from "react-router-dom";
import UserRouter from "./router/UserRouter";

function App() {
  const history = useHistory();
  setInterval(() => {
    if (localStorage.getItem("acess-token") !== null) {
      localStorage.removeItem("access-token");
      history.push("/login");
      alert("로그아웃 되었습니다.");
    }
  }, 7000000);

  return (
    <>
      <BrowserRouter base="/PMS-Front-V2/">
        <Route path="/" component={UserRouter}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
