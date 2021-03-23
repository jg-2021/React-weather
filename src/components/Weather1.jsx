import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Font, { Text } from 'react-font'
// import useDataApi from 'use-data-api'
// import axios from 'axios'



const Weather1 = ({ zip, bcolor, tcolor,setlat,setlong }) => {


    const [weather, setWeather] = useState([]);
    
    // const [icon, seticon] = useState('');
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');




    const tstyle1 = (e) => {
        const font = e.target.value
        setText1(font)
    }
    const tstyle2 = (e) => {
        const font = e.target.value
        setText2(font)
    }
    const tstyle3 = (e) => {
        const font = e.target.value
        setText3(font)
    }



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
        console.log('weather', weather)
        setlat(weather.coord?.lat)
        setlong(weather.coord?.lon)
    }, [weather])

    // console.log(lat)
    // console.log(long)

    const icon = `http://openweathermap.org/img/w/${weather.weather?.[0].icon}.png`;



    return (
        <>  
        {weather.cod===200 ? (
            <div className="App" style={{ color: tcolor, backgroundColor: bcolor, minWidth: '100vw', minHeight: '100vh', position: 'absolute', overflow: 'hidden' }}>
              
                <form style={{fontSize:25, margin:30}}>
                <div style={{display:'inline-block'}}>
                <label htmlFor='text1'><Text family={text1} style={{fontSize:70, margin:0}} onLoad={()=>console.log('loaded text 1')}>{weather.name}'s Weather Today</Text></label>
                </div><div style={{display:'inline-block'}}>
                <select name="text1" id="text1" onChange={tstyle1}>
                        <option value="">Pick A Font</option>
                        <option value="Permanent Marker">Permanent Marker</option>
                        <option value="Patrick Hand">Patrick Hand</option>
                        <option value="Satisfy">Satisfy</option>
                        <option value="Righteous">Righteous</option>
                        <option value="Cinzel">Cinzel</option>
                        <option value="Oi">Oi</option>
                    </select><br/>
                </div>  
                  
                <label htmlFor='text2'><Text family={text2} style={{fontSize:40, margin:0}} onLoad={()=>console.log('loaded text 1')}>Temperature: {weather.main?.temp}&deg;F</Text></label>
                <label htmlFor='text2'><Text family={text2} style={{fontSize:40, margin:0}} onLoad={()=>console.log('loaded text 1')}>Humidity: {weather.main?.humidity}</Text></label>
                <label htmlFor='text2'><Text family={text2} style={{fontSize:40, margin:0}} onLoad={()=>console.log('loaded text 1')}>High: {weather.main?.temp_max}</Text></label>
                <label htmlFor='text2'><Text family={text2} style={{fontSize:40, margin:0}} onLoad={()=>console.log('loaded text 1')}>Low: {weather.main?.temp_min}</Text></label>
                <label htmlFor='text2'><Text family={text2} style={{fontSize:40, margin:0}} onLoad={()=>console.log('loaded text 1')}>Wind Speed: {weather.wind?.speed}</Text></label>
                <select name="text2" id="text2" onChange={tstyle2}>
                        <option value="">Pick A Font</option>
                        <option value="Shadows Into Light">Shadows Into Light</option>
                        <option value="Spartan">Spartan</option>
                        <option value="Satisfy">Satisfy</option>
                        <option value="M PLUS Rounded 1c">M PLUS Rounded 1c</option>
                        <option value="Lobster Two">Lobster Two</option>
                        <option value="Cardo">Cardo</option>
                    </select><br/>

                <label htmlFor='text3'><Text family={text3} style={{fontSize:65, margin:0, textTransform: 'capitalize'}} onLoad={()=>console.log('loaded text 1')}>{weather.weather?.[0].description}</Text></label>
                <select name="text3" id="text3" onChange={tstyle3}>
                        <option value="">Pick A Font</option>
                        <option value="Indie Flower">Indie Flower</option>
                        <option value="Bangers">Bangers</option>
                        <option value="Great Vibes">Great Vibes</option>
                        <option value="Kalam">Kalam</option>
                        <option value="Sacramento">Sacramento</option>
                        <option value="Parisienne">Parisienne</option>
                    </select><br/>
                
                </form>
                <div><img src={icon} width='350px' height='200px'/></div>
               
                <Link to= '/Weather7'>
                <button type='submit' style={{width:'300px', height:'40px'}}>See 7 Weather</button>
                </Link>
               
            </div>
            ) : (
                <Text family="OI" style={{fontSize:70, margin:0}} onLoad={()=>console.log('loaded text 1')}>Hey, pick somewhere real. That zip does not exist!</Text>
            
            )}
        </>

    )
}


export default Weather1;