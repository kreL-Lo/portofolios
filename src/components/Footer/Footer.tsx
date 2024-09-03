import React from 'react'
import './Footer.css';
import { SocialIcons } from '../SocialMinimize/SocialMinimize';
import { ArrowBack } from '@mui/icons-material';

export const WorkTogetherButton = ({ size = 'normal' }) => {
  const sizebleStyle: any = {}
  if (size === 'large') {
    sizebleStyle['fontSize'] = '1.2rem';
    sizebleStyle['padding'] = '0.7rem 1.2rem';

  }
  else {
    sizebleStyle['fontSize'] = '1rem';
    sizebleStyle['padding'] = '0.5rem 1rem';
  }
  return (
    <div className='work-together-button' style={{
      // center 
      ...sizebleStyle,

    }}>
      <div className='work-together-button-text' style={{
        // center
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          paddingRight: 5,
        }}>
          {"let's-work-together".split('').map((char, index) => (
            <span key={index} className='letter'>
              {char}
            </span>
          ))}
        </div>
        <ArrowBack style={{
          fontSize: '1rem',
          transform: 'rotate(180deg)',
          color: 'inherit'
        }} />
      </div>
    </div>
  )
}
const Footer = () => {

  return (

    <div className='main-footer'>

      <span className='square-box'>
        <div className='footer-circle' />
      </span>

      <div className='main-footer-icons'>
        <div className='social-icons-footer'>
          <SocialIcons />
        </div>
        <WorkTogetherButton size="normal" />

      </div>


    </div>
  )
}

export default Footer
