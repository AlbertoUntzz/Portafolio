
import './App.css';
import Timer from './Components/Timer';
import Header from './Components/Header';
import Settings from './Components/Settings';
import {useState} from 'react'
import SettingsContext from './Components/SettingsContext';


function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return(
      <div>
      <Header/>
      <main>
        <SettingsContext.Provider value={{
          showSettings,
          setShowSettings,
           workMinutes,
           breakMinutes,
           setWorkMinutes,
           setBreakMinutes,
        }}>
        {showSettings ? <Settings/>: <Timer/>}
        </SettingsContext.Provider>
      </main>
    </div>
    
    
  );
}

export default App;
