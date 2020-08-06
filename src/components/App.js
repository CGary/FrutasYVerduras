import React from "react";
import "normalize.css";
import { GlobalStyles } from "../styles/GlobalStyles";

import Home from "../pages/Home";

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Home />
    </React.Fragment>
  );
}
