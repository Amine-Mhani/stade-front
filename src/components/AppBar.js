import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

//const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Logout'];


function ColorSchemesExample() {


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    /**<header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="/">Tashilat</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/Phone-Internet/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Phone-Internet/phone">Phone</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Phone-Internet/internet">Internet</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>*/

  <AppBar position="static" style={{ background: '#2E3B55' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Tashilat
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key="Insurance"
                onClick={handleCloseNavMenu}
                href="#"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Insurance
              </Button>
              <Button
                key="School & University"
                onClick={handleCloseNavMenu}
                href="#"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                School & University
              </Button>
              <Button
                key="Phone & Internet"
                onClick={handleCloseNavMenu}
                href="/Phone-Internet/home"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Phone & Internet
              </Button>
              <Button
                key="Water & Electricity"
                onClick={handleCloseNavMenu}
                href="#"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Water & Electricity
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
}

export default ColorSchemesExample;