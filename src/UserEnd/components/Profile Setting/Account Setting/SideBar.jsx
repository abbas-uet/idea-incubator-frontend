import {styled} from "@mui/material/styles";
import PropTypes from "prop-types";
import {Link as RouterLink, useLocation} from "react-router-dom";
import * as React from "react";
import {useEffect} from "react";
import Scrollbar from "../../../../SuperAdminEnd/components/Scrollbar";
import {Avatar, Box, Drawer, Link, Stack, Typography} from "@mui/material";
import account from "../../../../SuperAdminEnd/_mocks_/Lists/account";
import {MHidden} from "../../../../SuperAdminEnd/components/@material-extend";
import Logo from "../../../../SuperAdminEnd/components/Logo";
import NavSection from "../../../../SuperAdminEnd/components/NavSection";
import {Icon} from "@iconify/react/dist/iconify";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import shoppingBagFill from "@iconify/icons-eva/shopping-bag-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
import lockFill from "@iconify/icons-eva/lock-fill";


//Side Bar Configurations


const DRAWER_WIDTH = 280;

const getIcon = (name) => <Icon icon={name} width={25} height={25}/>;

const sidebarConfig = [

    {
        title: 'Account Details',
        path: '/user/studentAccountSettings/account_details',
        icon: getIcon(pieChart2Fill)
    },
    {
        title: 'Profile Details',
        path: '/user/studentAccountSettings/profile_details',
        icon: getIcon(shoppingBagFill)
    },
    {
        title: 'Sub Users',
        path: '/user/studentAccountSettings/sub_users',
        icon: getIcon(shoppingBagFill)
    },
    {
        title: 'Account Billing',
        path: '/user/studentAccountSettings/account_billing',
        icon: getIcon(peopleFill)
    },

    {
        title: 'Notifications',
        path: '/user/studentAccountSettings/notifications',
        icon: getIcon(fileTextFill)
    },
    {
        title: 'Account History',
        path: '/user/studentAccountSettings/account_history',
        icon: getIcon(lockFill)
    }
];


const RootStyle = styled('div')(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        flexShrink: 0,
        width: DRAWER_WIDTH,
        backgroundColor: theme.palette.grey[300],
    }
}));

const AccountStyle = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: theme.shape.borderRadiusSm,
    backgroundColor: theme.palette.grey[200]
}));

// ----------------------------------------------------------------------

UserSidebar.propTypes = {
    isOpenSidebar: PropTypes.bool,
    onCloseSidebar: PropTypes.func
};

export default function UserSidebar({isOpenSidebar, onCloseSidebar}) {
    const {pathname} = useLocation();

    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const renderContent = (
        <Scrollbar
            sx={{
                height: '100%',
                '& .simplebar-content': {height: '100%', display: 'flex', flexDirection: 'column'}
            }}
        >


            <Box sx={{mb: 5, mx: 2.5,mt:2}}>
                <Link underline="none" component={RouterLink} to="#">
                    <AccountStyle>
                        <Avatar src={account.photoURL} alt="photoURL"/>
                        <Box sx={{ml: 2}}>
                            <Typography variant="subtitle1" sx={{color: 'text.primary'}}>
                                {account.displayName}
                            </Typography>
                            <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                {account.role}
                            </Typography>
                        </Box>
                    </AccountStyle>
                </Link>
            </Box>

            <NavSection navConfig={sidebarConfig}/>
        </Scrollbar>
    );

    return (
        <RootStyle>
            <MHidden width="lgUp">
                <Box
                    open={isOpenSidebar}
                    onClose={onCloseSidebar}
                    PaperProps={{
                        sx: {width: DRAWER_WIDTH,marginTop: '20px'}
                    }}
                >

                    {renderContent}
                </Box>
            </MHidden>

            <MHidden width="lgDown">
                <Box
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: DRAWER_WIDTH,
                            bgcolor: 'background.default',
                            marginTop: '20px'
                        }
                    }}
                >
                    {renderContent}
                </Box>
            </MHidden>
        </RootStyle>
    );
}
