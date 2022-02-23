import React from "react";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

const Alertbox = (props) => {
  return (
    <div style={{height: "3rem"}}>
      {props.alert && <Alert variant={props.alert.type}>{props.alert.msg}</Alert>}
    </div>
  );
};

export default Alertbox;

Alertbox.propTypes = {
  alert: PropTypes.object
};

Alertbox.defaultProps = {
  alert: null
};
