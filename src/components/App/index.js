import React, { Suspense } from "react";
import "normalize.css";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

//import Home from "../../pages/Home";
const Home = React.lazy(() => import("../../pages/Home"));
import Login from "../../pages/Login";
import Item from "../../pages/Item";

const App = (props) => {
  console.log("renderApp props:", props);
  return (
    <Suspense fallback={<div>se esta cargando el home con React.lazy</div>}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}>
            {props.isAuth && <Redirect to="/home" />}
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/item" component={Item} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

const mapStateToProps = (reducers) => {
  return { isAuth: reducers.loginReducer.isAuth };
};

export default connect(mapStateToProps, null)(App);
