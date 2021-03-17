const UI = () => {
    return (
        <div>
            <>
            <form>
                <label for='zip'> What Would You Like To See?
                    </label><br/>
                    <input
                        type='text'
                        id='zip'
                        name='zip'
                        placeholder = "Enter Your Zip:"
                    /> <br/>   
                     <label for='tcolor'> Choose A Text Color &nbsp;
                    </label>
                    <select name="tcolor" id="tcolor">
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="yellow">Yellow</option>
                    </select><br/>
                    <label for='bcolor'> Choose A Background Color &nbsp;
                    </label>
                    <select name="bcolor" id="bcolor">
                    <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="Purple">Purple</option>
                        <option value="yellow">Yellow</option>
                    </select><br/>
                    <label for='tmethod'> Choose A Method Of Transportation &nbsp;
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
            
        </>
        </div>
    )
}

export default UI
