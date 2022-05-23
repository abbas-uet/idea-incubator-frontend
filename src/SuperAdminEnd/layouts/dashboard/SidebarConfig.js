import {Icon} from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={25} height={25}/>;

const sidebarConfig =(roleId)=>{
    console.log(roleId)
    return([

    {
        title: 'Dashboard',
        path: '/superadmin/dashboard/'+roleId+'/app',
        icon: getIcon(pieChart2Fill)
    },
    {
        title: 'Admin',
        path: '/superadmin/dashboard/'+roleId+'/admins',
        icon: <PersonIcon/>
    },
    {
        title: 'Department',
        path: '/superadmin/dashboard/'+roleId+'/departments',
        icon: <ApartmentIcon/>
    },
    {
        title: 'User',
        path: '/superadmin/dashboard/'+roleId+'/users',
        icon: getIcon(peopleFill)
    },

    {
        title: 'Invoice',
        path: '/superadmin/dashboard/'+roleId+'/invoices',
        icon: <ReceiptIcon/>
    },
    {
        title: 'Subscription',
        path: '/superadmin/dashboard/'+roleId+'/subscriptions',
        icon: <CardMembershipIcon />
    },
    {
        title: 'Logout',
        path: '/login',
        icon: getIcon(lockFill)
    }
]);}

export default sidebarConfig;
