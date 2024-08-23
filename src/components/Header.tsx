import React from 'react'
import './Header.css'

import { Close, Code, Dehaze, Fullscreen, Minimize, Opacity } from '@mui/icons-material';
import { Logo } from './Logo';


// create a basic debounce function 
// to prevent multiple clicks
function debounce(func: any, delay: any) {
  let timeoutId: any;

  return function (...args: any) {
    // Clear the previous timeout if a new one is triggered
    clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      // disable ts 
      // @ts-ignore
      func.apply(this, args);
    }, delay);
  };
}

export const HeaderBar = (
  { setIsActive, isActive, }: {
    setIsActive: any,
    isActive: boolean,
  }
) => {
  const debounced = debounce(() => {
    setIsActive(!isActive);
  }, 300);


  return (
    <div className="app-header-bar">
      <span className='square-box'>
        <Code />
      </span>
      <div className='app-header-bar-items'>

        <div className='app-header-middle'>
          <Logo />
        </div>
      </div>
      <div className={`header-right-item ${isActive ? 'active' : ''}`} onClick={debounced}>
        <Dehaze />
      </div>
    </div >
  );
};

interface HeaderProps {
  setIsActive: any;
  isActive: boolean,
}

const Header = ({
  setIsActive,
  isActive,
}: HeaderProps) => {


  return (
    <>
      <HeaderBar setIsActive={setIsActive} isActive={isActive} />
    </>
  );
}


export const CardTopRightButtons = ({ }: {
}) => {


  return (
    <div className='app-header-icons'>
      <div
        className='card-button-icon'
        style={{
          position: 'relative',
        }}
      >
        <Minimize />
      </div>
      <div
        className='card-button-icon'
      >
        <Fullscreen />
      </div>
      <div className='card-button-icon'>
        <Close />
      </div>
    </div>
  );
};

export default Header;