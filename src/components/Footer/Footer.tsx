import React from 'react'
import './Footer.css';
import { CircleOutlined, Code } from '@mui/icons-material';
import { SocialIcons } from '../SocialMinimize/SocialMinimize';

const Footer = () => {

  return (

    <div className='main-footer'>

      <span className='square-box'>
        <div className='footer-circle' />
      </span>
      <div className='main-footer-icons'>
        <SocialIcons />
      </div>
    </div>
  )
}

export default Footer
