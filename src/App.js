// import logo from './logo.svg';
// import './1.css';
// import './App.css';
// import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import Navbar2 from './components/Navbar2';
import React, { useState ,Fragment} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Nomatches from './components/Nomatches';



function App() {
  const [alert, setalert] = useState("null");
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const [mode, setmode] = useState("light")
  const toggleMode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light Mode Enabled', 'danger')
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = '#0c1e2d';
      showAlert('Dark Enabled', 'primary')
    }

  }
  const toggleMode1 = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = '#9292bf';
      showAlert('purple Mode Enabled', 'danger');
      // settext1('Enable')
      // document.title='Purple Mode';
      // if we want to change our title name than on the run time than we can change by document.title() fucntion
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = '#0c1e2d';
      showAlert('Dark Enabled', 'primary')
    }

  }

  return (


    <>
      <Router>
        {/* <Navbar/> */}
        <Navbar title="Textutiles2" home="Home" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} alert={alert} />
        {/* <Navbar2 mode={mode}/> */}
        <Alert alert={alert} />
        {/* this is props which set the value  */}
        {/* We can say that the props is the properties that use to change the heading */}
        <div className="container my-3" >

          <Routes>
          <Route exact path="about" element={<About/>} />
            {/*we should use exact before the path so whenever our path will mismatch than it don't show anything otherwise it will show worg pages  */}
            {/* <Route path="/users">
              <Users />
            </Route> */}
            <Route exact path='textfrom' element={<Textfrom showAlert={showAlert} heading="Please Enter Your Query" h1="Text Area" mode={mode} />}/>
             <Route path='nomatches' element={<Nomatches/>}/>
            
          </Routes>

        
          {/* <About /> */}
{/* <Textfrom showAlert={showAlert} heading="Please Enter Your Query" h1="Text Area" mode={mode} /> */}
        </div >
       </Router >
    </>
  );
}

export default App;
