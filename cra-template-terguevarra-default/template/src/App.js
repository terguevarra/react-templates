import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainRouter from 'routes/MainRouter';

require('dotenv').config();

function App() {
  return (
    <BrowserRouter path="/home">
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
