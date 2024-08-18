import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import emailjs from '@emailjs/browser';
import Home from './pages/home/Home'

import './App.css';
import { CustomScrollBar } from './components/ScrollBar/CustomScrollBar';
import Footer from './components/Footer/Footer';
import LeftBar from './components/LeftBar/LeftBar';
import { MobileCover } from './components/MobileCover/MobileCover';
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


  const [bounds, setBounds] = useState({
    scroll: {
      y: 0,
      x: 0,
    },
    limit: {
      x: 0,
      y: 0
    }
  })

  const handleScroll = (scroll: any) => {
    const target = scroll.currentTarget;
    setBounds({
      scroll: {
        y: target.scrollTop,
        x: target.scrollLeft
      },
      limit: {
        x: target.scrollWidth - target.clientWidth,
        y: target.scrollHeight - target.clientHeight,
      }
    });
  };


  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className='main-grid' >
        <Header setIsActive={setIsActive} isActive={isActive} />
        <div className='main-content-grid'>
          <LeftBar />
          <div className='main-content' onScroll={handleScroll}>
            <MobileCover isActive={isActive} />
            <Home />
          </div>

        </div>

        <Footer />
      </div>
      <CustomScrollBar bounds={bounds} />
    </>
  )
}

export default App
