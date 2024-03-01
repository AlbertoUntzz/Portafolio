import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './playButton';
import PauseButton from './pauseButton';
import SettingButton from './settingButton';
import { useContext } from 'react';
import SettingsContext from './SettingsContext';


function Timer(){
   const settingsInfo = useContext(SettingsContext)
    return(
        <div>
             <CircularProgressbar value={70} text={'60%'} 
             styles={buildStyles( {
                textColor: '#701a75',
                pathColor: '#701a75',
                trailColor: '#f5d0fe',
                strokeWidth: '2'
             })}/>
             <div style={{marginTop: '5px'}}>
                <PlayButton />
                <PauseButton/>
             </div>
             <div style={{marginTop: '5px'}}>
                <SettingButton onClick={() => settingsInfo.setShowSettings(true)}/>
             </div>
             
             
        </div>
        
       
    )
}
export default Timer;