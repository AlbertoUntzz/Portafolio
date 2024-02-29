
import './App.css';
import Timer from './Components/Timer';
import Header from './Components/Header';
import Settings from './Components/Settings';
import {useState} from 'react';
import SettingsContext from './SettingsContext'; // Corregido el nombre de importación


function App() {

  const [showSettings, setShowSettings] = useState(false);

  return(
      <div>
      <Header/>
    <main>
      <SettingsContext.Provider value={{
        workminutes: 45,
        breakMinutes: 15,
      }}>
        {showSettings ? <Settings/> : <timer/>}
        </SettingsContext.Provider>
      <Timer/>  
    </main>
    </div>
    
    
  );
}

export default App;
