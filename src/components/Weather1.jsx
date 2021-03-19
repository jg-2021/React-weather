import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Font from 'react-font';
// import useDataApi from 'use-data-api'
// import axios from 'axios'



const Weather1 = ({zip}) => {
    

const [weather, setWeather] = useState([]);
const [lat, setlat] = useState('');
const [long, setlong] = useState('');
// const [icon, seticon] = useState('');



useEffect(() => {
    (async () => {
        const Data = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=f07b010bc0b89ba24ca495e6020128d3`
        ).then((response) => response.json());
        setWeather(Data);
        console.log(Data);
        
    })();
}, []);
useEffect(() => {
   console.log('weather',weather)
   setlat(weather.coord?.lat)
   setlong(weather.coord?.lon)
}, [weather])

console.log(lat)
console.log(long)

const icon = `http://openweathermap.org/img/w/${weather.weather?.[0].icon}.png`;

// const icon1 = `http://openweathermap.org/img/w/${weather.weather?.[0].icon}.png`

// useEffect(() => {
//     (async()=>{
//         const pic = await fetch(
//             `http://openweathermap.org/img/w/${weather.weather?.[0].icon}.png`
//         )
//     seticon(pic);
   
//     })();
// }, []);

// const res = await axios.get(`http://openweathermap.org/img/w/${weather.weather?.[0].icon}.png``, {
//     responseType: 'arraybuffer'
//   });
//   const imgFile = new Blob([res.data]);
//   const imgUrl = URL.createObjectURL(imgFile);

// request
//        .get(`http://openweathermap.org/img/w/${weather.weather?.[0].icon}.png`)
//        .end((error, response) => {
//         if (!error && response) {
//             seticon({img1:response.text})
//         } else {
//             console.log('There was an error fetching server', error);
//         }
//        })

// const filt = weather.filter(wet=>wet.weather?.[0]===description && wet===name && wet.main ===temp);
// console.log(filt);

// const filt = weather.filt(function(wet){
//     return weather.weather?.[0]===description && wet.main=== temp;
// })
// console.log(filt)

    return (
            <div className="App">
                {/* // {weather.filter(()=>())} */}
                <h1>{weather.name}'s Weather Today</h1>
                <h1>Temperature {weather.main?.temp}&deg;F</h1>
                <h1>Humidity {weather.main?.humidity}</h1>
                <h1>High {weather.main?.temp_max}</h1>
                <h1>Low {weather.main?.temp_min}</h1>
                <h1>Wind Speed {weather.wind?.speed}</h1>
                <h1>{weather.weather?.[0].description}</h1>
                {/* <div>{icon1}</div> */}
                <div><img src= {icon} width='250px' height='150px' /></div>
                {/* <div>{icon}</div> */}
                
                {/* {weather.main.map((i,index)=>{
                    return <div>... i</div>
                })} */}

                {/* {weather} */}
                {/* {weather.map(we => <div>{we.main}</div>)} */}
                {/* <ul>
                   
               
                {weather.map((city,index)=>{
                    return(
                        <li key={index}>
                            {city.name}
                        </li>
                    );
                })}
                 </ul> */}
                {/* {weather.map( d => <div>{d}</div>)} */}
                <Link to= '/Weather7'>
                <button type='submit' style={{width:'300px', height:'40px'}}>See 7 Weather</button>
                </Link>
            </div>
        
    )
    }


    export default Weather1;