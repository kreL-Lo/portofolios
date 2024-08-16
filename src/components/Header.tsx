import React from 'react'
import './Header.css'

import { Code } from '@mui/icons-material';
import { Logo } from './Logo';

export const HeaderBar = () => {

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
    </div >
  );
};

interface HeaderProps {
  scrollRef: any;
}

const Header = ({
  scrollRef
}: HeaderProps) => {


  return (
    <>
      <HeaderBar />
    </>
  );
}

export default Header;