import { useState } from "react";
import Alertbox from "./components/Alertbox";
import Formtext from "./components/Formtext";
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import About from "./components/About";

function App() {
  const [darkMode, setDarkMode] = useState({
    background: "white",
    taColor: "white",
    color: "black",
    btnColor: "btn-outline-dark",
    bsColor: "light",
    enabled: false,
  });

  const [alert, setAlert] = useState(null);

  //create a function to show alert with timeout
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleDarkMode = () => {
    setDarkMode({
      background: darkMode.background === "white" ? "#1d1f20" : "white",
      taColor: darkMode.taColor === "white" ? "#00000055" : "white",
      color: darkMode.color === "black" ? "white" : "black",
      btnColor:
        darkMode.btnColor === "btn-outline-dark"
          ? "btn-outline-light"
          : "btn-outline-dark",
      bsColor: darkMode.bsColor === "light" ? "dark" : "light",
      enabled: !darkMode.enabled,
    });
    darkMode.enabled
      ? showAlert("Dark Mode Disabled", "success")
      : showAlert("Dark Mode Enabled", "success");
  };

  const radioAlert = () => {
    showAlert("You have to enable dark mode", "danger");
  };

  const toggleGreen = () => {
    setDarkMode({
      background: "#00ff0022",
      taColor: "#00000055",
      color: "white",
      btnColor: "btn-outline-light",
      bsColor: "success",
      enabled: true,
    });
  };

  const toggleRed = () => {
    setDarkMode({
      background: "#ff000022",
      taColor: "#00000055",
      color: "white",
      btnColor: "btn-outline-light",
      bsColor: "danger",
      enabled: true,
    });
  };

  const toggleBlue = () => {
    setDarkMode({
      background: "#0000ff22",
      taColor: "#00000055",
      color: "white",
      btnColor: "btn-outline-light",
      bsColor: "primary",
      enabled: true,
    });
  };

  //change html background color
  document.body.style.backgroundColor =
    darkMode.background === "white" ? "white" : "#1d1f20";

  let style = {
    background: darkMode.background,
    color: darkMode.color,
    height: "110vh",
  };

  return (
    // <Router>
    <div style={style}>
      <Navbar
        title='Text Utils'
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        alert={alert}
        radioAlert={radioAlert}
        toggleGreen={toggleGreen}
        toggleRed={toggleRed}
        toggleBlue={toggleBlue}
      />
      <Alertbox alert={alert} />
      <Formtext
        darkMode={darkMode}
        Placeholder='Enter your text here'
        showAlert={showAlert}
      />

      {/* <Routes>
          <Route
            path='/'
            element={
              <Formtext
                darkMode={darkMode}
                Placeholder='Enter your text here'
                showAlert={showAlert}
              />
            }
          />
          <Route path='/about' element={<About />} />
        </Routes> */}
    </div>
    // </Router>
  );
}

export default App;
