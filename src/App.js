import './App.scss'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout/header/header';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Sidebar from './layout/sidebar/sidebar';

function App() {
    return (
        <Router>
          <Header />
          <div className='app_main'>
            <Sidebar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
          </div>
        </Router>
      );
}

export default App