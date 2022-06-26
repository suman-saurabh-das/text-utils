import './App.css';   // Importing css file App.css
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
      <div className="container my-3">
        <TextForm heading="Enter the text below to analyze"/>
      </div>
    </>
  );
}

export default App;