import { useState } from 'react';
import './App.css';   // Importing css file App.css
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
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.transition = "0.3s";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text below to analyze" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;