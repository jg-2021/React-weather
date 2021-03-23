import './App.css';
import Home from './components/Home'
import { Children, useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Weather1 from './components/Weather1';
import Weather7 from './components/Weather7';
import React from 'react';
import { AnimatePresence } from "framer-motion";





function App() {

  const [zip, setZip] = useState('');
  const [tcolor, setTcolor] = useState('');
  const [bcolor, setBcolor] = useState('');
  const [lat, setlat] = useState('');
  const [long, setlong] = useState('');

  const tstyle = (e) => {
    const color = e.target.value
    setTcolor(color)
}
const bstyle = (e) => {
    const color = e.target.value
    return (color !== tcolor) ? setBcolor(color) : (alert('You wont be able to see!'))
  
}
  const handleEntry = (e) => {
    setZip(e.target.value);
    console.log(zip)
  };
// console.log('lat',lat)
// console.log('long',long)

 

  return (
    <>
      <Router>
        <Switch>

          <Route exact path='/' ><Home handleEntry={handleEntry} tstyle={tstyle} bstyle={bstyle} bcolor={bcolor} tcolor={tcolor}/></Route>
          <Route path='/Weather1'><Weather1 zip={zip} tcolor={tcolor} bcolor={bcolor} setlat={setlat} setlong={setlong}/></Route>
          <Route path='/Weather7'><Weather7 lat={lat} long={long} bcolor={bcolor} tcolor={tcolor} zip={zip}/></Route>



        </Switch>
      </Router>
    </>
  );
}

export default App;
