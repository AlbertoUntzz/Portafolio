
import './App.css';
import Timer from './Components/Timer';
import Header from './Components/Header';
import Settings from './Components/Settings';
import {useState} from 'react'
import SettingsContext from './Components/SettingsContext';


function App() {

  const [showSettings, setShowSettings] = useState(true);

  return(
      <div>
      <Header/>
      <main>
        <SettingsContext.Provider>
        {showSettings ? <Settings/>: <Timer/>}
        </SettingsContext.Provider>
      </main>
    </div>
    
    
  );
}

export default App;
