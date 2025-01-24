import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Links, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1}}>
        <AppBar>
            <Toolbar>
                <Typography>
                    <Button><Link to={'/'} style={{color:'white'}}>ApiGet</Link></Button>
                    <Button><Link to={'/r'} style={{color:'white'}}>Counter</Link></Button>
                    <Button><Link to={'/c'} style={{color:'white'}}>State</Link></Button>
                    <Button><Link to={'/s'} style={{color:'white'}}>Product</Link></Button>

                    
                </Typography>
            </Toolbar>
        </AppBar>
      </Box>

    </div>
  )
}

export default Navbar
