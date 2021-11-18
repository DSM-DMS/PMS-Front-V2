import React from "react";
import { Route, BrowserRouter, useHistory } from "react-router-dom";
import UserRouter from "./router/UserRouter";

function App() {
  const history = useHistory();
  setInterval(() => {
    localStorage.removeItem("access-token");
    history.puch("login");
    alert("로그아웃 되었습니다.");
  }, 7000000);

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" component={UserRouter}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
