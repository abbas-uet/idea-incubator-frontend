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
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import ProfileCard from '../Utils/ProfileCard.jsx';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationSection from './NotificationSection';
import ChatIcon from '@mui/icons-material/Chat';


const ResponsiveAppBar = (props) => {
  const settings = props.settings;
  const pages = props.pages;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);

  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <Paper elevation={2} >
      <AppBar position="fixed" color='secondary'>
        <Container maxWidth="100%">
          <Toolbar disableGutters>
            <Link to="/" style={{ textDecoration: 'none', color: 'white', backgroundImage: '' }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                Idea Incubator
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <Link key={page[0] + 'm'} to={page[1]} style={{ textDecoration: 'none', color: '#333' }}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page[0]}</Typography>
                    </MenuItem>
                  </Link>

                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              Idea Incubator
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  className='btnhover'
                  key={page[0]}
                  onClick={handleCloseNavMenu}
                  variant="primary"
                  sx={{ m: 1, color: 'white', display: 'block' }}
                  LinkComponent={Link} to={page[1]}
                >
                  {page[0]}
                </Button>
              ))}
            </Box>

            <NotificationSection type='Messages' />
            <NotificationSection type='Notifications' />
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }} >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  <ArrowDropDownIcon fontSize='large' />
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
                <ProfileCard name={"Abbas Ali"} closeFunction={handleCloseUserMenu} />
                {settings.map((setting) => (
                  <Link key={setting[1]} to={setting[1]} style={{ textDecoration: 'none', color: '#333' }}>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting[0]}</Typography>
                    </MenuItem>
                  </Link>
                ))}

              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Paper >

  );
};
export default ResponsiveAppBar;