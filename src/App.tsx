import React, { useEffect } from 'react'
import { ThemeProvider, useMediaQuery } from '@mui/material'
import Header from './components/Header'
import mainTheme from './styles/mainTheme'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Routers'
import Footer from './components/Footer'
import emailjs from '@emailjs/browser';

const publicKey = "KC-fCsNyHpRTGMu6z";

const App = () => {
  useEffect(() => {
    emailjs.init({
      publicKey: publicKey,
      limitRate: {
        throttle: 10000,
      },
    });
  }, []);
  const isMobile = useMediaQuery(`(max-width:600px)`);
  return (

    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          // overflow: 'scroll'

        }}
        >
          <Header />

          <div style={{
            overflowX: 'scroll',
            // height: 'calc(100vh - 16px) '
            height: !isMobile ? 'calc(100vh - 16px)' : 'calc(100vh - 70px)'
            //make a cooler scrollbar

          }}>
            <div className="flex-1" style={{
            }} >
              <Router />
            </div>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
