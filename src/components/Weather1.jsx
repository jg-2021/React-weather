import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
// import useDataApi from 'use-data-api'
// import axios from 'axios'



const Weather1 = ({zip}) => {
    

const [weather, setWeather] = useState([]);


useEffect(() => {
    (async () => {
        const Data = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=f07b010bc0b89ba24ca495e6020128d3`
        ).then((response) => response.json());
        setWeather(Data);
    })();
}, []);

// const fetchJson = async (url) => {
//     const response = await fetch(url);
//     return response.json();
//   };


//   useEffect(() => {
//     fetchJson(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=f07b010bc0b89ba24ca495e6020128d3`)
//       .then(({ wind }) => setWeather(wind));
//   }, []);


// useEffect(() => {
//     fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=f07b010bc0b89ba24ca495e6020128d3`).then(
//         res => setWeather(res.data)
//     )
// },[])

    // useEffect(async() => {
    //     const result = await axios(
    //         `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=f07b010bc0b89ba24ca495e6020128d3`
    //     );
    //    setWeather(result);
           
    // }, []);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const weatherData = await fetch(
    //       `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=f07b010bc0b89ba24ca495e6020128d3`
    //     ).then((response) => response.json());
    //     setWeather(weatherData);
    //   }
    //   console.log(weather)
    
    return (
            <div className="App">
                <h1>weather 1 page</h1>
                <h2>{weather.visibility}</h2>
                {/* {weather.map( d => <div>{d}</div>)} */}
                <Link to= '/Weather7'>
                <button type='submit' style={{width:'300px', height:'40px'}}>See 7 Weather</button>
                </Link>
            </div>
        
    )
    }


    export default Weather1;