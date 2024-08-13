import React, { useEffect, useRef } from 'react'
import Header from './components/Header'
import emailjs from '@emailjs/browser';
import Home from './pages/home/Home'

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

  const scrollRef = useRef(null);
  return (
    <>
      <Header scrollRef={scrollRef} />
      <div className='main-content'>
        <div className='main-content-wrapped' ref={scrollRef}>
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
