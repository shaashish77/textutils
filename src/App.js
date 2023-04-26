import './App.css';
import Alert from './components/Alert';
/* import About from './components/About'; */
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
/* import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; */

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

   const toggleMode =() =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode enabled", "Normal");
    }
   }
  return (
    <>

    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
               
          {/* <Routes>
            <Route exact path="/about" element={<About/>} >
            </Route> */}

            {/* <Route exact path="/" element={ */}
            <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>
            {/* </Route> */}
            {/* <Route exact path="/home" element={ */}
            {/* <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/> */}
            {/* </Route> */}
          {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
