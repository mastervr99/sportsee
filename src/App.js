import './App.scss'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layout/header/header';
import Home from './pages/home/home';

function App() {
    return (
        <Router>
          <Header />
          <Home/>
        </Router>
      );
}

export default App