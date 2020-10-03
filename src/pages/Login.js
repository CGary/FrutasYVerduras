import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/loginActions";

const Login = (props) => {
  console.log("renderLogin Props:", props);
  const handler_onClick = () => {
    const query = { user: "pepe", pass: "1234" };
    props.login(query);
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

export default connect(mapStateToProps, { login })(Login);
