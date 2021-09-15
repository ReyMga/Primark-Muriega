import React from 'react';
import theme from './temaConfig'
import {ThemeProvider} from '@material-ui/core/styles';
import './App.css';
import Navbar from './components/NavBar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
   
      
    </ThemeProvider>
  );
}

export default App;
