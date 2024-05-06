import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Album from './Components/Album/Album';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Playingtab from './Components/PlayingTab/PlayingTab';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/album/:title" element={<Album />} />
          
        </Routes>
      </Router>
      <Playingtab/>
    </div>
  );
}

export default App;
