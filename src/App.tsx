import React, { useEffect } from 'react'
import Header from './components/Header'
import emailjs from '@emailjs/browser';
import Home from './pages/home/Home'
import { FancyLights } from './components/FancyLights/FancyLights';

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
  return (

    <div style={{
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Ensure it takes the full height of the viewport
        overflowX: 'hidden',

      }}>
        {/* <Header /> */}
        <div style={{
          flex: 1,
          overflowY: 'scroll',
        }}>
          <Home />
        </div>
      </div>
    </div>

  )
}

export default App
