import './App.css';
import Home from './components/Home'
import { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Weather1 from './components/Weather1';
import Weather7 from './components/Weather7';
import React from 'react'





function App() {

  const [zip, setZip] = useState('');
  const [weather, setWeather] = useState('');

  const handleEntry = (e) => {
    setZip(e.target.value);
    console.log(zip)
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const weatherData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=f07b010bc0b89ba24ca495e6020128d3`
    ).then((response) => response.json());
    setWeather(weatherData);
  }
  console.log(weather)


  return (
    <>
      <Router>
        <Switch>

          <Route exact path='/' ><Home handleEntry={handleEntry} handleSubmit={handleSubmit}/></Route>
          <Route path='/Weather1' component={Weather1} weather={weather}></Route>
          <Route path='/Weather7' component={Weather7}></Route>



        </Switch>
      </Router>
    </>
  );
}

export default App;
