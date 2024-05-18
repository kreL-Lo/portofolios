import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import { Button, Divider, Link, Typography, useMediaQuery } from '@mui/material'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const { pathname } = useLocation()
  const isMobile = useMediaQuery('(max-width:600px)');
  if (pathname === '/contact') return <></>
  return (
    <div
      style={{
        padding: 10,
        paddingBottom: isMobile ? 30 : 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Divider />


      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
        }}
      >
        <Link href="https://www.facebook.com/profile.php?id=100011421130774">
          <FacebookIcon
            style={{
              color: 'black',
            }}
          />
        </Link>
        <Link href="https://www.instagram.com/ciprianmiru/">
          <InstagramIcon
            style={{
              color: 'black',
            }}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/ciprian-m-699113141/">
          <LinkedInIcon
            style={{
              color: 'black',
            }}
          />
        </Link>
      </div>
      <Typography
        sx={{
          fontSize: 12,
          paddingTop: 1,
        }}
      >
        Copyright ©2024 All Rights reserved
      </Typography>
    </div>
  )
}

export default Footer
