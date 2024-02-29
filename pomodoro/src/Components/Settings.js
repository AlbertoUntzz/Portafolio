import ReactSlider from "react-slider";
import '../style/slider.css'
import {useContext} from "react";

function Settings(){
    const settingsInfo = useContext(SettingContext);
    return(
        <div style ={{textAlign: 'left'}}>
            <label>Work minuts:</label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={45}
                min = {1}
                max = {120}
            />
            <label>Break minuts:</label>
            <ReactSlider
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={45}
                min = {1}
                max = {120}
            />
        </div>
    )      
}

export default Settings;