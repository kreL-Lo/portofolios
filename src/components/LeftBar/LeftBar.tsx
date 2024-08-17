import React from 'react'
import './LeftBar.css';
import { Mail, Person, Work } from '@mui/icons-material';
import { Tooltip } from 'react-tooltip';
const icons = [
  {
    icon: Person,
    content: 'about'
  },
  {
    icon: Work,
    content: 'projects'
  },
  {
    content: 'contact',
    icon: Mail
  }
]
const LeftBar = () => {
  const iconStyle = {

    fontSize: '1.2rem'
  }
  return (

    <div className='left-bar'>
      {
        icons.map((icon, index) => {
          const Icon = icon.icon;
          return (
            <div key={index} className='left-bar-icon' >
              <a data-tooltip-id={`icon-${index}`} >
                <Icon style={iconStyle} />
              </a>
              <Tooltip id={`icon-${index}`} place='right' variant='dark' delayShow={10} delayHide={50} >
                {icon.content}
              </Tooltip>
            </div>
          )
        })
      }





    </div>
  )
}

export default LeftBar
