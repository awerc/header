import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Navbar from './Navbar';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="/">Learn React</a>
      </header>
    </div>
  </BrowserRouter>
);

export default App;
