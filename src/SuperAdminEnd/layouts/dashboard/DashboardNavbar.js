import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// material
import { alpha, styled } from '@mui/material/styles';
import {Box, Stack, AppBar, Toolbar, IconButton, Badge} from '@mui/material';
// components
import { MHidden } from '../../components/@material-extend';
//
import SearchBar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';
import {Link} from "react-router-dom";
import message from "@iconify/icons-eva/message-circle-fill";
import * as React from "react";
import {useEffect, useState} from "react";
import {getTableSingle} from "../../../ApiServices/getData";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 70;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({ onOpenSidebar,roleId }) {
  const [open, setOpen] = useState(false);
  const [data,setdata]=useState({});
  useEffect(async () => {
    const response = await getTableSingle('superadmin',roleId);
    if (response.status === 200) {
      setdata(response.data);
    } else {
      console.log(response.status);
    }
  },[]);
  return (
    <RootStyle>
      <ToolbarStyle>
        <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>

        <SearchBar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <IconButton
            size="large"
            LinkComponent={Link} to={'/superadmin/dashboard/'+roleId+'/chat/'+data.fullname+'/'+roleId}
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
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
