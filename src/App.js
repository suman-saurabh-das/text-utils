import { useState } from 'react';
import './App.css';   // Importing css file App.css
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {

  const [mode, setMode] = useState("light");  // State to set dark or light mode

  // const toggleMode = () => {
  //   if(mode === "light"){
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#031633";
  //     document.body.style.transition = "0.3s";
  //     // showAlert("Dark mode has been enabled", "info");
  //   }
  //   else{
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.transition = "0.3s";
  //     // showAlert("Light mode has been enabled", "info");
  //   }
  // }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // Method to be sent as prop to navbar which will return the color of button pressed
  const [textAreaBg, setTextAreaBg] = useState("white")
  const customColorSelected = (customColor) => {
    console.log(customColor);
    if(customColor === "primary"){
      setMode("dark");
      setCustomColorChoosen(customColor)
      document.body.style.backgroundColor = "#031633";
      setTextAreaBg("#031633");
    }
    else if(customColor === "success"){
      setMode("dark");
      setCustomColorChoosen(customColor)
      document.body.style.backgroundColor = "#051b11";
      setTextAreaBg("#051b11");
    }
    else if(customColor === "danger"){
      setMode("dark");
      setCustomColorChoosen(customColor)
      document.body.style.backgroundColor = "#2c0b0e";
      setTextAreaBg("#2c0b0e");
    }
    else if(customColor === "warning"){
      setMode("dark");
      setCustomColorChoosen(customColor)
      document.body.style.backgroundColor = "#332701";
      setTextAreaBg("#332701");
    }
    else if(customColor === "info"){
      setMode("dark");
      setCustomColorChoosen(customColor)
      document.body.style.backgroundColor = "#032830";
      setTextAreaBg("#032830");
    }
    else if(customColor === "light"){
      setMode("light");
      setCustomColorChoosen("dark");
      document.body.style.backgroundColor = "#fff";
      setTextAreaBg("#fff");
    }
    else{
      setMode("dark");
      setCustomColorChoosen("light")
      document.body.style.backgroundColor = "#161616";
      setTextAreaBg("#161616");
    }
    document.body.style.transition = "0.3s";
  }

  const [customColorChoosen, setCustomColorChoosen] = useState("dark");

  return (
    <>
      {/* Removed toggleMode={toggleMode} from NavBar */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} customColorSelected={customColorSelected}/>
      <Alert alert={alert}/>  {/* Passing state variable alert as a prop */}
      <div className="container my-3">
        <TextForm heading="Enter the text below to analyze" mode={mode} customColorChoosen={customColorChoosen} textAreaBg={textAreaBg} showAlert={showAlert}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;