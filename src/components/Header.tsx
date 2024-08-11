import React from 'react'
import { AppBar, Button, IconButton } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { NavBarItems } from './NavBarItems/NavBarItems';
import { Code } from '@mui/icons-material';

export const HeaderBar = ({ activeScroll, goTo }: {
  activeScroll: string,
  goTo: (scroll: string) => void
}) => {


  return (
    <div className='app-header-bar'>
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


const Header = () => {


  return (
    <AppBar
      position="sticky"
      color="transparent"
      style={{
        zIndex: 1000,
      }}

    >
      <HeaderBar activeScroll={''} goTo={(scroll: string) => {
        //
      }} />
    </AppBar>
  )
}

export default Header
