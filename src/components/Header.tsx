import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './Header.css'
import { NavBarItems } from './NavBarItems/NavBarItems';
import { Code } from '@mui/icons-material';
import gsap from 'gsap';

export const HeaderBar = ({ activeScroll, goTo, isVisible }: {
  activeScroll: string,
  goTo: (scroll: string) => void,
  isVisible: boolean
}) => {

  return (
    <div className={`app-header-bar ${isVisible ? 'visible' : 'hidden'}`}>
      <span className='square-box'>
        <Code />
      </span>
      <div className='app-header-bar-items'>
        <div className='app-header-left'>Ciprian Miru</div>
        <div className='app-header-middle'>
          <NavBarItems activeScroll={activeScroll} goTo={goTo} />
        </div>
      </div>
    </div>
  );
};

interface HeaderProps {
  scrollRef: any;
}

const Header = ({
  scrollRef
}: HeaderProps) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null); // Reference to the HeaderBar element

  useLayoutEffect(() => {
    if (isHeaderVisible) {
      gsap.to(headerRef.current, { y: 100, opacity: 1, duration: 0.5, ease: 'power2.out' });
    } else {
      gsap.to(headerRef.current, { y: 0, opacity: 0, duration: 0.5, ease: 'power2.in' });
    }
  }, [isHeaderVisible]);
  useEffect(() => {
    const handleScroll = () => {
      const secondSectionTop = document.getElementById('second-section')?.offsetTop || 0;
      const scrollPosition = scrollRef.current?.scrollTop || 0; // Get scrollTop from the reference

      console.log('scrollPosition', scrollPosition, secondSectionTop);
      if (scrollPosition >= secondSectionTop) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };

    const contentElement = scrollRef.current;
    contentElement?.addEventListener('scroll', handleScroll);
    return () => contentElement?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div ref={headerRef}>

        <HeaderBar activeScroll='' goTo={() => { }} isVisible={isHeaderVisible} />
      </div>
    </>
  );
}

export default Header;