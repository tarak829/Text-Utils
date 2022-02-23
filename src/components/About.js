import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  //about page

  return (
    <>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-12'>
            <h2>About</h2>
            <p>
              This is a React app that I created to practice using React and
              Material UI.
            </p>
            <p>
              I used React Router to create a single page application (SPA) with
              the following routes:
            </p>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
            <p>
              The home page has a button that will toggle the dark mode. The
              dark mode will be enabled when the button is clicked.
            </p>
            <p>
              The about page has a button that will toggle the background color
              and text color. The button will be green when clicked.
            </p>
            <p>
              The contact page has a button that will toggle the background
              color and text color. The button will be red when clicked.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
