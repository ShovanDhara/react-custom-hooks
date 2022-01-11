import './App.css';
import useDarkMode from './customhooks/themehook/index'
import { ThemeContext, themes } from './themeContext';
import React from 'react';

function App() {
  const theme = useDarkMode() ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Content />
      </div>
    </ThemeContext.Provider>

  );
}

function Content() {
  const value = React.useContext(ThemeContext);
  return (
    <div style={value}>
      The current theme is || {value === themes.dark ? 'dark' : 'light'}
    </div>
  )
}

export default App;
