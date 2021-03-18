import './App.css';
import React from 'react'
import Home from './components/Home'

import { Switch, Route } from 'react-router-dom';
import Weather1 from './components/Weather1';






function App() {



  return (
    <>

    <Switch>

    <Route exact path= '/' component={Home}></Route>
    <Route path= '/Weather1' component={Weather1}></Route>
      
    
    
    </Switch>
    </>
  );
}

export default App;
