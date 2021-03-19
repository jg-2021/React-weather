import { Link } from 'react-router-dom';


function Weather1 ({weather}) {


    
    return (
            <div className="App">
                <h1>weather 1 page</h1>
                <h2>{weather}</h2>
                <Link to= '/Weather7'>
                <button type='submit' style={{width:'300px', height:'40px'}}>See 7 Weather</button>
                </Link>
            </div>
        
    )
    }


    export default Weather1;