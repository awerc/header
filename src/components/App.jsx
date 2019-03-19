import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
    </div>
  </BrowserRouter>
);

export default App;
