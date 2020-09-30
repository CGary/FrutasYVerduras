import React from "react";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions/loginActions";

const Login = (props) => {
  console.log("renderProps:", props);
  const handler_onClick = () => {
    const query = { user: "pepe", pass: "1234" };
    props.login();
  };
  return props.cargando ? (
    <div>cargando...</div>
  ) : (
    <>
      <div>login</div>
      <button onClick={handler_onClick}>login</button>
    </>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.loginReducer;
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
