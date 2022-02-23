import React from "react";
import PropTypes from "prop-types";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Component_Navbar = (props) => {
  return (
    <Navbar
      bg={`${props.darkMode.bsColor}`}
      variant={props.darkMode.bsColor === "light" ? "light" : "dark"}
      expand='lg'
    >
      <Container fluid>
        <Navbar.Brand href='#'>{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href='#'>Home</Nav.Link>
            {/* <Link to='/' className='nav-link'>
              Home
            </Link>
            <Link to='/about' className='nav-link'>
              About
            </Link> */}
          </Nav>
          <Form.Check
            type='radio'
            id='custom-switch'
            label='Red'
            name='group1'
            onChange={
              props.darkMode.enabled ? props.toggleRed : props.radioAlert
            }
            style={{ marginRight: "1rem" }}
          />
          <Form.Check
            type='radio'
            id='custom-switch'
            label='Green'
            name='group1'
            onChange={
              props.darkMode.enabled ? props.toggleGreen : props.radioAlert
            }
            style={{ marginRight: "1rem" }}
          />
          <Form.Check
            type='radio'
            id='custom-switch'
            label='Blue'
            name='group1'
            onChange={
              props.darkMode.enabled ? props.toggleBlue : props.radioAlert
            }
            style={{ marginRight: "1rem" }}
          />
          <Form.Check
            type='switch'
            id='custom-switch'
            label='Dark Mode'
            style={{
              color: `${props.darkMode.bsColor === "dark" ? "white" : "black"}`,
            }}
            onChange={props.toggleDarkMode}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Component_Navbar;

Component_Navbar.propTypes = {
  title: PropTypes.string,
  darkMode: PropTypes.object,
  toggleRed: PropTypes.func,
  toggleGreen: PropTypes.func,
  toggleBlue: PropTypes.func,
  toggleDarkMode: PropTypes.func,
  radioAlert: PropTypes.func,
};

Component_Navbar.defaultProps = {
  title: "Title Here",
  about: "About Us",
};
