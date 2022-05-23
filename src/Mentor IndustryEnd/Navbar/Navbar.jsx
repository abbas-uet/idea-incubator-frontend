import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link as RouterLink, Link} from 'react-router-dom';
import {Badge, Divider, Paper} from '@mui/material';
import NotificationSection from './../../UserEnd/components/Navbar/NotificationSection';
import Logo from './../../Utils/static/Logo.png';

import Stack from "@mui/material/Stack";
import {alpha} from "@mui/material/styles";
import account from "./../../SuperAdminEnd/_mocks_/Lists/account";
import homeFill from "@iconify/icons-eva/home-fill";
import personFill from "@iconify/icons-eva/person-fill";
import settings2Fill from "@iconify/icons-eva/settings-2-fill";
import MenuPopover from "./../../SuperAdminEnd/components/MenuPopover";
import {Icon} from "@iconify/react/dist/iconify";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import bellFill from "@iconify/icons-eva/bell-fill";
import message from "@iconify/icons-eva/message-circle-fill";
import {getTableSingle} from "../../ApiServices/getData";


const ResponsiveAppBar = ({page,roleId}) => {
  const MENU_OPTIONS = [
    {
      label: 'Home',
      icon: homeFill,
      linkTo: '/'+page+'/'+roleId+'/home'
    },
    {
      label: 'Profile',
      icon: personFill,
      linkTo: '/'+page+'/'+roleId+'/profileSetting'
    }
  ];
  const [data,setdata]=useState({});
  useEffect(async () => {

    if(page==='Industry'){
      const response = await getTableSingle('industry',roleId);
      if (response.status === 200) {
        setdata(response.data);
      } else {
        console.log(response.status);
      }
    }else{
      const response = await getTableSingle('mentor',roleId);
      if (response.status === 200) {
        setdata(response.data);
      } else {
        console.log(response.status);
      }
    }

  },[]);
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

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

      <Paper elevation={2} >
        <AppBar position="fixed" color='tertiary'>
          <Container maxWidth="100%">
            <Toolbar disableGutters>
              <Link to="/" style={{ textDecoration: 'none', color: 'white', backgroundImage: '' }}>
                <Stack direction={'row'} justifyContent={'center'}>

                  <Box component="img" src={Logo} sx={{ width: 40, height: 40 }} />
                  <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{ mr: 15,ml:3 ,mt:0.8, display: { xs: 'none', md: 'flex'} }}
                  >
                    Idea Incubator
                  </Typography>
                </Stack>
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
                  {[].map((page) => (
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
                {[].map((page) => (
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


              <IconButton
                size="large"
                color={open ? 'primary' : 'default'}
                LinkComponent={Link} to={'/'+page+'/'+roleId+'/chat/'+data.name+'/'+data.id}
                sx={{
                ...(open && {
                  bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
                })
              }}
                >
              <Badge color="error">
                <Icon icon={message} width={23} height={23} />
              </Badge>
            </IconButton>
              <NotificationSection type='Notifications' sx={{mr:1}} />
              <Box sx={{ flexGrow: 0,  ml:1}}>
                <Tooltip title="Open settings">
                  <IconButton
                      ref={anchorRef}
                      onClick={handleOpen}
                      sx={{
                        padding: 0,
                        width: 44,
                        height: 44,
                        ...(open && {
                          '&:before': {
                            zIndex: 1,
                            content: "''",
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            position: 'absolute',
                            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
                          }
                        })
                      }}
                  >
                    <Avatar src={account.photoURL} alt="photoURL"/>
                  </IconButton>
                </Tooltip>
                <MenuPopover
                    open={open}
                    onClose={handleClose}
                    anchorEl={anchorRef.current}
                    sx={{width: 220}}
                >
                  <Box sx={{my: 1.5, px: 2.5}}>
                    <Typography variant="subtitle1" noWrap>
                      {account.displayName}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}} noWrap>
                      {account.email}
                    </Typography>
                  </Box>

                  <Divider sx={{my: 1}}/>

                  {MENU_OPTIONS.map((option) => (
                      <MenuItem
                          key={option.label}
                          to={option.linkTo}
                          component={RouterLink}
                          onClick={handleClose}
                          sx={{typography: 'body2', py: 1, px: 2.5}}
                      >
                        <Box
                            component={Icon}
                            icon={option.icon}
                            sx={{
                              mr: 2,
                              width: 24,
                              height: 24
                            }}
                        />

                        {option.label}
                      </MenuItem>
                  ))}

                  <Box sx={{p: 2, pt: 1.5}}>
                    <Button fullWidth color="tertiary" variant="outlined">
                      Logout
                    </Button>
                  </Box>
                </MenuPopover>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Paper>
  );
};
export default ResponsiveAppBar;