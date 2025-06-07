import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/userStore';
import AccidentStore from './store/accidentStore';
import FireEngineStore from './store/fireEngineStore';
import FireStationStore from './store/fireStationStore';
import { ThemeProvider } from './context/ThemeProvider';
import "./map.css"

export const Context = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context.Provider value={{
      user: new UserStore(),
      accident: new AccidentStore(),
      fireEngine: new FireEngineStore(),
      fireStation: new FireStationStore()
    }}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Context.Provider>
);