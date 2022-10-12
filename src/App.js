import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Welcome from '../src/pages/Welcome';
import Roster from '../src/pages/Roster';
import Tavern from '../src/pages/Tavern';
import Missions from '../src/pages/Missions';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/roster'>Roster</Link>
          </li>

          <li>
            <Link to='/tavern'>Tavern</Link>
          </li>

          <li>
            <Link to='/missions'>Mission Control</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path = '/' exact element={<Welcome/>} />
        <Route path = '/roster' exact element={<Roster/>} />
        <Route path = '/tavern' exact element={<Tavern/>} />
        <Route path = '/missions' exact element={<Missions/>} />
      </Routes>
    </div>
  );
}

export default App;
