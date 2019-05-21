import React, { Component } from 'react';
import Routes from './routes';


import Header from './components/Header';
import Main from './pages/Main';

import "./style.css";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
