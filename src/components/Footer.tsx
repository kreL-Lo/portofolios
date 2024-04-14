import React from 'react'
import { AppBar, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <AppBar position="static">
      <div className="flex justify-end">
        <Button color="inherit">
          <Link to="/">Home</Link>
        </Button>
        <Button color="inherit">
          <Link to="/works">Works</Link>
        </Button>
        <Button color="inherit">
          <Link to="/contacts">Contacts</Link>
        </Button>
      </div>
    </AppBar>
  )
}

export default Footer
