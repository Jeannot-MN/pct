import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './modules/Navigation/Navigation';

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </Box>
  );
}

export default App;
