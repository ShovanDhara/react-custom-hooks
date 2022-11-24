import './App.css';
import useDarkMode from './customhooks/themeHook'
import { ThemeContext, themes } from './themeContext';
import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import CustomHooks from './customhooks/hookComponent';
import ListSearch from './listWithSearch/listsearchComponent';
import CompoundComponent from './compoundComponent/compoundComponent';
import FastContext from './fastContext/index';
import { BrowserRouter } from "react-router-dom";
import Todo from "./todolist/App";
import DebounceSearch from "./searchWithDebounce/searchDebounce";
import TableApp from './optimisedTable/export';
import DataPagination from 'dataWithPagination/dataWithPagination';

function App() {
  const theme = useDarkMode() ? themes.dark : themes.light
  return (
    <BrowserRouter>
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <h4 className="heading">Some cool React stuffs</h4>
        <div className="content">
          <section className="navigation-section">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : null}`} to='/hooks'>Custom Hooks</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : null}`} to='/listwithsearch'>List with Search</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : null}`} to='/compoundcomponent'>Compound Components</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : null}`} to='/fastContext'>Fast Context</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : null}`} to='/todolist'>Todo List</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : null}`} to='/searchDebounce'>Search with Debounce</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : null}`} to='/table'>Table Select/Deselect All</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : null}`} to='/dataPagination'>Table Select/Deselect All</NavLink>
              </li>
            </ul>
          </section>
          <section className="content-section">
            <Routes>
              <Route path="/hooks" element={<CustomHooks />} />
              <Route path="/listwithsearch" element={<ListSearch />} />
              <Route path="/compoundcomponent" element={<CompoundComponent />} />
              <Route path="/fastContext" element={<FastContext />} />
              <Route path="/todolist" element={<Todo />} />
              <Route path="/searchDebounce" element={<DebounceSearch />} />
              <Route path="/table" element={<TableApp />} />
              <Route path="/dataPagination" element={<DataPagination />} />
            </Routes>
          </section>
        </div>
      </div>
    </ThemeContext.Provider>
    </BrowserRouter>

  );
}

export default App;
