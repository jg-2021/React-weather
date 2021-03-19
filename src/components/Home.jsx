import UI from "./UI"
import Header from './Header';
import { useState } from 'react';


const Home = ({handleEntry,handleSubmit}) => {
    const [tcolor, setTcolor] = useState('');
    const [bcolor, setBcolor] = useState('');
    // const [zip, setZip] = useState('');
    // const [weather, setWeather] = useState('');

    // const handleEntry = (e) => {
    //     setZip(e.target.value);
    // };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const weatherData = await fetch(
    //         `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=f07b010bc0b89ba24ca495e6020128d3`
    //     ).then((response) => response.json());
    //     setWeather(weatherData);
    // }
    // console.log(weather)
    // let path ='/Weather1'
    // history.push(path);

    const tstyle = (e) => {
        const color = e.target.value
        setTcolor(color)
    }
    const bstyle = (e) => {
        const color = e.target.value
        return (color !== tcolor) ? setBcolor(color) : (alert('You wont be able to see!'))
    }
    return (
        <div className="App" style={{ color: tcolor, backgroundColor: bcolor, minWidth: '100vw', minHeight: '100vh', position: 'absolute', overflow: 'hidden' }}>
            <Header />
            <UI tstyle={tstyle} bstyle={bstyle} handleEntry={handleEntry} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Home
