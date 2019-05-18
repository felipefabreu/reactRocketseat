import React, { Component } from 'react';
import api from "./services/api";


import Header from './components/Header';
import Main from './pages/Main';

import "./style.css";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
    </div>
  );
}

export default App;
