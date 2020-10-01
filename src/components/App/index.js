import React, { Suspense } from "react";
import "normalize.css";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

//import Home from "../../pages/Home";
const Home = React.lazy(() => import("../../pages/Home"));
import Login from "../../pages/Login";
import Item from "../../pages/Item";

export default function App() {
  console.log("renderAppProps");
  return (
    <Suspense fallback={<div>cargando</div>}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/item" component={Item} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}
