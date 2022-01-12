import './App.css';
import useDarkMode from './customhooks/themeHook'
import { ThemeContext, themes } from './themeContext';
import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import CustomHooks from './customhooks/hookComponent';

function App() {
  const theme = useDarkMode() ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <h4 className="heading">Some cool React stuffs</h4>
        <div className="content">
          <section className="navigation-section">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" className={({ isActive }) => isActive ? "active" : null} to='/hooks'>Custom Hooks</NavLink>
              </li>
            </ul>
          </section>
          <section className="content-section">
            <Routes>
              <Route path="/hooks" element={<CustomHooks />} />
            </Routes>
          </section>
        </div>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
