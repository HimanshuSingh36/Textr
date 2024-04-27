import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [myText, setText] = useState("Enable Dark Mode");
  const [mode, setMode] = useState("light");
  // const [green, setGreen] = us¸eState("light");
  const [alert, setAlert] = useState(null);
  // const toggleGreen = () => {
  //   if (green === "light") {
  //     setGreen("green");
  //     document.body.style.backgroundColor = "green";
  //     document.body.style.color = "yellow";
  //   } else {
  //     setGreen("light");
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color = "black";
  //   }
  // };
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // wheather dark mode is on or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
      setText("Disable Dark Mode");
      showAlert("Dark Mode Enabled", "success");
      // document.title="Texter-Dark"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#343a40";
      setText("Enable Dark Mode");
      showAlert("Light Mode Enabled", "success");
      // document.title="Texter"
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TEXTR"
          mode={mode}
          toggleMode={toggleMode}
          text={myText}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
            <Route exact path="about" element={<About mode={mode}/>}>
              
            </Route>
            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Try Texter-Word Counter, Character Counter, Remove extra spaces "
              />}>
            
             
            </Route>
        </Routes>
        </div>
       </Router>
    </>
  );
}

export default App;
