import React from 'react';
import { Button } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';

import { Router } from "./router/Router"


function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
