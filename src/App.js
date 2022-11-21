import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not and we have implemented the control of dark mode in app.js in order to control dark mode by simply passing the props in the respective component.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{   //Used to handle the alert message.Paramter message means which message we want to display and type parameter denotes the type of alert
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);   // We have used timeout because we do not want the alert mesaage to remain permanently on screen so we will use setTimeout to make the alert null after 1500 ms
  }   // Now we can pass this function in the components where we want to show alert.

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");  // shows alert when dark mode is enabled
      //Now we can also set the title of our page to something else when dark mode is enabled using document.title="";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      
    }
  }
  return (
    <>
    <Router>  
    {/* for using react router we will first install package of router using npm install react router dom */}
    <Navbar title="Text-Tools" mode={mode} toggleMode={toggleMode} key={new Date()} />
    {/* We are using title="Text-Tools" to pass title as props in our navbar components */}
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* Container is a class of bootstrap that gives good look to our div.By default it makes center allignment the components that are used inside that div */}
      {/* my-3 gives margin in y */}
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            {/* exact word is used for exact matching and its recommended to use exact paths for navigating */}
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try Text-Tools:  word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;