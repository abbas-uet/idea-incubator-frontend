import * as React from 'react';
import {useState} from 'react';
import {Outlet} from "react-router-dom";
import {styled} from "@mui/material/styles";
import UserSidebar from "./SideBar";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 40;
const APP_BAR_DESKTOP = 60;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
});

const MainStyle = styled('div')(({theme}) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_DESKTOP ,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    }
}));


export default function StudentAccountSetting() {
    const [open, setOpen] = useState(false);
    return (
        <RootStyle>
            <UserSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)}/>
            <MainStyle>
                <Outlet/>
            </MainStyle>
        </RootStyle>
    );

}
