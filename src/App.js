import React from 'react';
import banner from './assets/castle.jpg'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Welcome from '../src/pages/Welcome';
import Roster from '../src/pages/Roster';
import Tavern from '../src/pages/Tavern';
import Missions from '../src/pages/Missions';
import Navbar from '../src/components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="App-logo" alt="logo" />
      </header>
      <Navbar/>

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
