import React from "react";
import PropTypes from "prop-types";
import { Form, Container } from "react-bootstrap";
import { useState } from "react";

const Formtext = (props) => {
  const ChangetoUp = (e) => {
    e.preventDefault();
    let newtext = text;
    setText(newtext.toUpperCase());
    text.length > 0 ? props.showAlert("Text changed to uppercase", "success") : props.showAlert("Please enter text", "danger");
  };

  const ChangetoDown = (e) => {
    e.preventDefault();
    let newtext = text;
    setText(newtext.toLowerCase());
    text.length > 0 ? props.showAlert("Text changed to lowercase", "success") : props.showAlert("Please enter text", "danger");
  };

  const HandleChange = (e) => {
    setText(e.target.value);
  };

  const Handlecleartext = (e) => {
    e.preventDefault();
    setText("");
    text.length > 0 ? props.showAlert("Text cleared", "success") : props.showAlert("Please enter text", "danger");
  };

  const Changetoalternatingcase = (e) => {
    e.preventDefault();
    let newtext = text;
    let newtext2 = "";
    for (let i = 0; i < newtext.length; i++) {
      if (i % 2 === 0) {
        newtext2 += newtext[i].toUpperCase();
      } else {
        newtext2 += newtext[i].toLowerCase();
      }
    }
    setText(newtext2);
    text.length > 0 ? props.showAlert("Text changed to alternating case", "success") : props.showAlert("Please enter text", "danger");
  };

  const Changetoinversecase = (e) => {
    e.preventDefault();
    let newtext = text;
    let newtext2 = "";
    for (let i = 0; i < newtext.length; i++) {
      if (newtext[i] === newtext[i].toUpperCase()) {
        newtext2 += newtext[i].toLowerCase();
      } else {
        newtext2 += newtext[i].toUpperCase();
      }
    }
    setText(newtext2);
    text.length > 0 ? props.showAlert("Text changed to inverse case", "success") : props.showAlert("Please enter text", "danger");
  };

  //function to copy text to clipboard
  const copyToClipboard = (e) => {
    e.preventDefault();
    const textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    text.length > 0 ? props.showAlert("Text copied to clipboard", "success") : props.showAlert("Please enter text", "danger");
  };

  //function to handle extra spaces
  const HandleExtraSpaces = (e) => {
    e.preventDefault();
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    text.length > 0 ? props.showAlert("Extra spaces removed", "success") : props.showAlert("Please enter text", "danger");
  };

  const [text, setText] = useState("");

  //create object for darkMode
  let darkObj = {
    taColor: props.darkMode.taColor,
    color: props.darkMode.color,
    btnColor: props.darkMode.btnColor,
  };

  return (
    <Container>
      <Form>
        <h1 className='my-4'>Enter your text below to analyze</h1>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Control
            as='textarea'
            value={text}
            onChange={HandleChange}
            placeholder={props.Placeholder}
            rows={6}
            style={{
              background: darkObj.taColor,
              color: darkObj.color,
            }}
          />
        </Form.Group>
        <button onClick={ChangetoUp} className={`btn ${darkObj.btnColor} mx-1`}>
          UpperCase
        </button>
        <button
          onClick={ChangetoDown}
          className={`btn ${darkObj.btnColor} mx-1`}
        >
          LowerCase
        </button>
        <button
          onClick={Changetoalternatingcase}
          className={`btn ${darkObj.btnColor} mx-1`}
        >
          Alternating Case
        </button>
        <button
          onClick={Changetoinversecase}
          className={`btn ${darkObj.btnColor} mx-1`}
        >
          Inverse Case
        </button>
        <button
          onClick={HandleExtraSpaces}
          className={`btn ${darkObj.btnColor} mx-1`}
        >
          Remove Space
        </button>
        <button
          onClick={copyToClipboard}
          className={`btn ${darkObj.btnColor} mx-1`}
        >
          Copy Text
        </button>
        <button
          onClick={Handlecleartext}
          className={`btn ${darkObj.btnColor} mx-1`}
        >
          Clear Text
        </button>
      </Form>
      <h1>Your text summary</h1>
      <h6>
        {text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words and {text.length} Characters
      </h6>
      <h6>
        {(0.005 * text.split(" ").length * 60).toFixed()} Seconds will be
        required to read the above sentence.{" "}
      </h6>
      <h2>Preview</h2>
      <p>
        {text.length > 0 ? text : "Nothing to preview! Enter text to see preview"}
      </p>
    </Container>
  );
};

Formtext.propTypes = {
  showAlert: PropTypes.func.isRequired,
  darkMode: PropTypes.object.isRequired,
  Placeholder: PropTypes.string.isRequired,
};

Formtext.defaultProps = {
  Placeholder: "Enter your text here",
};

export default Formtext;
