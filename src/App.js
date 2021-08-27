import React, { useState } from 'react'
import './App.css';
import Features from './Components/Features';
import Header from './Components/Header';
import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#18191A'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#ffffff'
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Header mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route path='/' exact>
            <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze below:" />
          </Route>
          <Route path='/features' exact>
            <Features />
          </Route>
        </Switch>
      </Router>


    </>
  );
}

export default App;
