import React from "react";
import "normalize.css";
import { GlobalStyles } from "../styles/GlobalStyles";

import Home from "../pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Home />
    </React.Fragment>
  );
};

export default App;
