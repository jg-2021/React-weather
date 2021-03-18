import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import { useState } from 'react';





function App() {
const [tcolor, setTcolor] = useState('');
const [bcolor, setBcolor] = useState('');

const tstyle = (e) =>{
  const color = e.target.value
  setTcolor(color)
}
const bstyle = (e) =>{
  const color = e.target.value
 return (color!==tcolor)?setBcolor(color): (alert('You wont be able to see!'))
}


  return (
    <div className="App" style={{color: tcolor,backgroundColor:bcolor, minWidth:'100vw', minHeight:'100vh', position:'absolute', overflow:'hidden'}}>
      <Header/>
      <Home tstyle ={tstyle} bstyle={bstyle}/>
    </div>
  );
}

export default App;
