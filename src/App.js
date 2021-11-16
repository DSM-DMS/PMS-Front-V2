import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import UserRouter from "./router/UserRouter";

function App() {
  setInterval(() => {
    localStorage.removeItem("access-token");
  }, 7000000);

  return (
    <>
      <BrowserRouter>
        <Route path="/" component={UserRouter}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
