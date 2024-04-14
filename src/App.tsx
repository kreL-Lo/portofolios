
import React from 'react';
import { ThemeProvider } from '@mui/material';
import Footer from './components/Footer';
import mainTheme from './styles/mainTheme';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Routers';


const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <Footer />
        <Router />

      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
