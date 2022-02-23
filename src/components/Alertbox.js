import React from "react";
import Alert from "react-bootstrap/Alert";

const Alertbox = (props) => {
  return (
    props.alert && <Alert variant={props.alert.type}>{props.alert.msg}</Alert>
  );
};

export default Alertbox;
