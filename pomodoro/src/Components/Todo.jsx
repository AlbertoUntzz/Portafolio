import Timer from './Timer';
import Header from './Header';
import Settings from './Settings';
import { useState } from 'react';
import SettingsContext from './SettingsContext';
import Footer from '../Components/Footer';


function Todo(){
    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(45);
    const [breakMinutes, setBreakMinutes] = useState(15);
  
    return(
    <div>
        <Header />
        <main>
          <SettingsContext.Provider
            value={{
              showSettings,
              setShowSettings,
              workMinutes,
              breakMinutes,
              setWorkMinutes,
              setBreakMinutes,
            }}
          >
            {showSettings ? <Settings /> : <Timer />}
          </SettingsContext.Provider>
        </main>
        <Footer/>
      </div>)

}
 export default Todo;