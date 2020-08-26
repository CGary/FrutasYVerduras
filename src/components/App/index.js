import React from "react";
import Provider from "../Context";
import "normalize.css";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../../pages/Home";
import Item from "../../pages/Item";

export default function App() {
  return (
    <Provider>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/item" component={Item} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
