import { createGlobalStyle } from "styled-components";
// import latoRegular from "./fonts/Lato-Regular.woff2";

export default createGlobalStyle`
*, *:before, *:after {
    box-sizing: inherit;
}

html, body {  
  font-family: sans-serif;
  box-sizing: border-box;
}

.table-th-bold {
    font-weight: 700;
}
.dataTables_scrollHeadInner{  width:100% !important; }
.dataTables_scrollHeadInner table{  width:100% !important; }

p.MuiFormHelperText-root {
  font-size: 10px !important;
}

`;
