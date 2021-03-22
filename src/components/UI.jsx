import Font from 'react-font'
import { Link } from 'react-router-dom';



const UI = ({tstyle,bstyle,handleEntry}) => {

    // const [zip, setZip] = useState('');
    // const [weather, setWeather] = useState('');
    // const history = useHistory();
    

    // const _handleEntry = (e) => {
    //     setZip(e.target.value);
    // };


    // const _handleSubmit = async (e) => {
    //         e.preventDefault();
    //         const weatherData = await fetch(
    //         `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=f07b010bc0b89ba24ca495e6020128d3`
    //         ).then((response) => response.json());
    //         setWeather(weatherData);
    //         // console.log(weatherData);
    //         }
    //         console.log(weather)
    //         // let path ='/Weather1'
    //         // history.push(path);

    
    
            

    return (
        <div>
            <>
            <Font family='Stick' style={{fontSize:70, margin:0}} onAllLoad={()=>console.log('all fonts loaded')}>
            <form style={{fontSize:25, margin:30}}>
                <label htmlFor='zip' > What Would You Like To See?
                    </label><br/>
                    <input
                        type='text'
                        id='zip'
                        name='zip'
                        placeholder = "Enter Your Zip:"
                        onChange={handleEntry}
                    /> <br/>   
                     <label htmlFor='tcolor'> Choose A Text Color &nbsp;
                    </label>
                    <select name="tcolor" id="tcolor" onChange={tstyle}>
                        <option value="">Pick A Color</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="yellow">Yellow</option>
                    </select><br/>
                    <label htmlFor='bcolor'> Choose A Background Color &nbsp;
                    </label>
                    <select name="bcolor" id="bcolor" onChange={bstyle}>
                    <option value="">Pick A Color</option>
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
                <Link to= '/Weather1'>
                <button type='submit' style={{width:'300px', height:'40px'}}>See Weather</button>
                </Link>
                {/* <button type='submit' style={{width:'300px', height:'40px'}}>See Weather</button> */}
            </form>
            </Font>
            {/* {!!submitError && <div className='error'>{submitError}</div>} */}
        </>
        
        </div>
    )
}

export default UI
