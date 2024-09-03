import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import emailjs from '@emailjs/browser';
import Home from './pages/home/Home'

import './App.css';
import { CustomScrollBar } from './components/ScrollBar/CustomScrollBar';
import Footer from './components/Footer/Footer';
import LeftBar from './components/LeftBar/LeftBar';
import { MobileCover } from './components/MobileCover/MobileCover';

function mapRange(x: number) {

  const y = 200 - 2 * x;

  return y;
}

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

  const [minimize, setMinimize] = useState(false);

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
  const [isActive, setIsActive] = useState(false);


  const [activeScroll, setActiveScroll] = useState(0);
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

    // Query sections by ID
    const firstSection = document.getElementById('first-section');
    const secondSection = document.getElementById('second-section');
    const thirdSection = document.getElementById('third-section');
    const windowHeight = target.clientHeight;
    if (firstSection && secondSection && thirdSection) {
      const firstSectionTop = firstSection.offsetTop;
      const secondSectionTop = secondSection.offsetTop;
      const thirdSectionTop = thirdSection.offsetTop;

      const scrollY = target.scrollTop;
      const middleScreen = windowHeight / 2;

      if (scrollY >= firstSectionTop - middleScreen && scrollY < secondSectionTop - middleScreen) {
        setActiveScroll(0);
      } else if (scrollY >= secondSectionTop - middleScreen && scrollY < thirdSectionTop - middleScreen) {
        setActiveScroll(1);
      } else if (scrollY >= thirdSectionTop - middleScreen) {
        setActiveScroll(2);
      }
    }



    const image: any = document.querySelector('.portrait-bg-col');
    if (image) {
      console.log('here', image);


      const progress = target.scrollTop / (target.scrollHeight - target.clientHeight);
      console.log(progress)
      const nextPercentage = mapRange(progress * 100);
      image.animate(
        {
          backgroundPosition: `50% ${nextPercentage}%`,
        },
        { duration: 2000, fill: 'both' }
      );

      // image.style.transform = `translateY(${offset}px)`;
      //move the background image 

    }
  };


  // Function to scroll to a section based on the index
  function scrollToSection(index: number) {
    const firstSection = document.getElementById('first-section');
    const secondSection = document.getElementById('second-section');
    const thirdSection = document.getElementById('third-section');

    // Select the scrollable container
    const scrollableContainer = document.querySelector('.main-content');

    if (!scrollableContainer) {
      console.error('Scrollable container not found.');
      return;
    }

    let section;

    switch (index) {
      case 0:
        section = firstSection;
        break;
      case 1:
        section = secondSection;
        break;
      case 2:
        section = thirdSection;
        break;
      default:
        console.error("Invalid index. Please provide an index between 0 and 2.");
        return;
    }

    // Check if the section exists
    if (section) {
      const sectionTop = section.offsetTop;

      // Scroll the container to the section's position
      scrollableContainer.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  }


  useEffect(() => {
    setTimeout(() => {
      //get url query parameter section and scroll to that section
      const urlParams = new URLSearchParams(window.location.search);
      const section = urlParams.get('section');
      if (section) {
        switch (section) {
          case 'about':
            scrollToSection(0);
            break;
          case 'projects':
            scrollToSection(1);
            break;
          case 'contact':
            scrollToSection(2);
            break;
          default:
            break;
        }
      }
    }, 1000)
  }, [])
  return (
    <>
      <div className='main-grid' >
        <Header setIsActive={setIsActive} isActive={isActive} />
        <div className='main-content-grid'>
          <LeftBar activeScroll={activeScroll} scrollToSection={scrollToSection} />
          <div className='main-content' onScroll={handleScroll}>
            <MobileCover isActive={isActive} activeScroll={activeScroll} setIsActive={setIsActive} scrollToSection={scrollToSection} />
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
