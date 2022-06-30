import { useState } from 'react';
import './App.css';   // Importing css file App.css
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {

  const [mode, setMode] = useState("light");  // State to set dark or light mode

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#031633";
      document.body.style.transition = "0.3s";
      showAlert("Dark mode has been enabled", "info");
      // Dynamically change title
      // document.title = "Textutils - Dark mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.transition = "0.3s";
      showAlert("Light mode has been enabled", "info");
      // Dynamically change title
      // document.title = "Textutils - Light mode";
    }
  }

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

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>  {/* Passing state variable alert as a prop */}
      <div className="container my-3">
        <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;