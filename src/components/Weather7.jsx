import { useState, useEffect } from 'react';




const Weather7 = ({ zip, bcolor, tcolor, lat, long }) => {
    const [weather, setWeather] = useState({daily:[]});

    var sd = new Array(7);
    sd[0]='sunday';
    sd[1]='monday';
    sd[2]='tuesday';
    sd[3]='wednesday';
    sd[4]='thursday';
    sd[5]='friday';
    sd[6]='saturday';

    

    useEffect(() => {
        (async () => {
            const Data = await fetch(


                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=hourly,current,minutely,alerts&appid=f07b010bc0b89ba24ca495e6020128d3`
            ).then((response) => response.json());
            setWeather(Data);

        })();
    }, []);
    console.log('weather', weather)
    console.log('daily weather', weather.daily)
    
     return (
        <>
        <div className="App" style={{ color: tcolor, backgroundColor: bcolor, minWidth: '100vw', minHeight: '100vh', position: 'absolute', overflow: 'hidden'}}>
                    <h1>{zip} <br/>7 Day Weather</h1><br/>



        {!!weather.daily.length ?
        weather.daily.slice(0,7).map((day,index) => {
            const icon = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;
            
            return(
                
                <div key={index} style={{textAlign:'center'}}>
               <h4 style={{textTransform: 'capitalize', display:'inline-block',position:'relative'}}> <b><em>{sd[index]}--</em></b>&nbsp;&nbsp;&nbsp; Temp: {day.temp.day}&deg;F &nbsp;&nbsp;&nbsp; Humidity: {day.humidity}% &nbsp;&nbsp;&nbsp; {day.weather[0].description}</h4>
               <img src={icon} width='50px' height='50px' />



               </div>
               
               
            )
        }):
       
        <h1>waiting to load</h1>
    } </div>
        </>
     )}

export default Weather7
