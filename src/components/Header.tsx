import React from 'react'
import { AppBar, Button, IconButton } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  const { pathname } = useLocation()
  const isMobile = !useMediaQuery('(min-width:600px)');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const activeBarStyle = (route: string) => {
    if (route === pathname) {
      return {
        fontWeight: 'bold',
        color: 'black',
      }
    }
    return {
      fontSize: 14,
    }
  }
  return (
    <AppBar
      position="static"
      color="transparent"
      style={{
        zIndex: 1000,
      }}

    >
      {!isMobile && (
        <>
          <div
            className="flex justify-end"
            style={{
              paddingRight: 16,
            }}
          >
            <Button color="inherit" className={'linkHover'}>
              <Link
                to="/"
                style={{
                  ...activeBarStyle('/'),
                }}
              >
                Home
              </Link>
            </Button>
            {/* <Button color="inherit" className={'linkHover'}>
              <Link to="/works" style={activeBarStyle('/works')}>
                Works
              </Link>
            </Button> */}
            <Button color="inherit" className={'linkHover'}>
              <Link to="/contact" style={activeBarStyle('/contact')}>
                Contact
              </Link>
            </Button>
          </div></>
      )}
      {
        isMobile && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
          }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}

            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>

                <Link to="/">
                  Home
                </Link>

              </MenuItem>
              {/* <MenuItem onClick={handleClose}> <Link to="/works">
                Works
              </Link>

              </MenuItem> */}
              <MenuItem onClick={handleClose}><Link to="/contact">
                Contact
              </Link></MenuItem>
            </Menu>
          </div>
        )
      }

    </AppBar>
  )
}

export default Header
