import './App.css';
import Home from './components/Home'
import { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Weather1 from './components/Weather1';
import Weather7 from './components/Weather7';
import React from 'react'





function App() {

  const [zip, setZip] = useState('');
  

  const handleEntry = (e) => {
    setZip(e.target.value);
    console.log(zip)
  };


 

  return (
    <>
      <Router>
        <Switch>

          <Route exact path='/' ><Home handleEntry={handleEntry}/></Route>
          <Route path='/Weather1'><Weather1 zip={zip}/></Route>
          <Route path='/Weather7' component={Weather7}></Route>



        </Switch>
      </Router>
    </>
  );
}

export default App;
