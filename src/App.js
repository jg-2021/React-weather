import './App.css';
import Home from './components/Home'
import { Children, useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Weather1 from './components/Weather1';
import Weather7 from './components/Weather7';
import React from 'react';
import { AnimatePresence } from "framer-motion";
import { render } from 'react-dom'
import { useTrail, a } from 'react-spring'
import './components/styles.css'

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}



function App() {

  const [zip, setZip] = useState('');
  const [tcolor, setTcolor] = useState('');
  const [bcolor, setBcolor] = useState('');
  const [lat, setlat] = useState('');
  const [long, setlong] = useState('');
  const [open, set] = useState(true)

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
    <section id="header">
          <Trail open={open} onClick={() => set((state) => !state)}>
      <span>REACT</span>
      <span>PROJECT</span>
      <span>FOR</span>
      <span>DIGITALCRAFTS</span>
      <a href="https://github.com/jg-2021/React-weather">Behind The Scenes</a>
      <a href="#one" class="button primary scrolly">THE APP</a><br/><br/>
    
    </Trail>  
    </section>

      <Router>
        <Switch >
        <section id="one">
          <Route exact path='/' ><Home handleEntry={handleEntry} tstyle={tstyle} bstyle={bstyle} bcolor={bcolor} tcolor={tcolor}/></Route>
          <Route path='/Weather1'><Weather1 zip={zip} tcolor={tcolor} bcolor={bcolor} setlat={setlat} setlong={setlong}/></Route>
          <Route path='/Weather7'><Weather7 lat={lat} long={long} bcolor={bcolor} tcolor={tcolor} zip={zip}/></Route>
          </section>


        </Switch>
      </Router>
    </>
  );
}


export default App;
