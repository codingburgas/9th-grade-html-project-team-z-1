import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/userStore';
import ThemeStore from './store/themeStore';

export const Context = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context.Provider value={{
      user: new UserStore,
      theme: new ThemeStore,
    }}>
      <App />
    </Context.Provider>
);
