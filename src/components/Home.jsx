import UI from "./UI"
import Header from './Header';


const Home = ({handleEntry,bstyle,tstyle,tcolor,bcolor}) => {
   

    
    
    return (
        <div className="App" style={{ color: tcolor, backgroundColor: bcolor, minWidth: '100vw', minHeight: '100vh', position: 'absolute', overflow: 'hidden' }}>
            <Header />
            <UI tstyle={tstyle} bstyle={bstyle} handleEntry={handleEntry}/>
        </div>
    )
}

export default Home
