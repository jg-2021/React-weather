import { useState } from 'react';


const UI = () => {

    const [zip, setZip] = useState('');
    const [weather, setWeather] = useState('');
    const [tcolor, setTcolor] = useState('');
    

    const _handleEntry = (e) => {
        setZip(e.target.value);
    };


    const _handleSubmit = async (e) => {
            e.preventDefault();
            const weatherData = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=f07b010bc0b89ba24ca495e6020128d3`
            ).then((response) => response.json());
            setWeather(weatherData);
            // console.log(weatherData);
            }
            // console.log(weather)

    
    const _style = (e) =>{
        const color = e.target.value
        setTcolor(color)
    }
            

    return (
        <div>
            <>
            <form onSubmit={_handleSubmit}>
                <label htmlFor='zip'> What Would You Like To See?
                    </label><br/>
                    <input
                        type='text'
                        id='zip'
                        name='zip'
                        placeholder = "Enter Your Zip:"
                        onChange={_handleEntry}
                    /> <br/>   
                     <label htmlFor='tcolor'> Choose A Text Color &nbsp;
                    </label>
                    <select name="tcolor" id="tcolor" style={{backgroundColor: tcolor}} onChange={_style}>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="yellow">Yellow</option>
                    </select><br/>
                    <label htmlFor='bcolor'> Choose A Background Color &nbsp;
                    </label>
                    <select name="bcolor" id="bcolor">
                    <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="Purple">Purple</option>
                        <option value="yellow">Yellow</option>
                    </select><br/>
                    <label htmlFor='tmethod'> Choose A Method Of Transportation &nbsp;
                    </label>
                    <select name="tmethod" id="tmethod">
                        <optgroup label = 'Private'>
                        <option value="motorcycle">Motorcycle</option>
                        <option value="drive">Drive</option>
                        </optgroup>
                        <optgroup label = 'Exercise'>
                        <option value="walk">Walk</option>
                        <option value="run">Run</option>
                        <option value="cycle">Cycle</option>
                        </optgroup>
                        <optgroup label = 'Public'>
                        <option value="bus">Bus</option>
                        <option value="train">Train</option>
                        </optgroup>
                    </select><br/>
                
                <button type='submit'>See Weather</button>
            </form>
            {/* {!!submitError && <div className='error'>{submitError}</div>} */}
        </>
        </div>
    )
}

export default UI
