import {Icon} from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={25} height={25}/>;

const sidebarConfig = [

    {
        title: 'Dashboard',
        path: '/superadmin/dashboard/app',
        icon: getIcon(pieChart2Fill)
    },
    {
        title: 'Admin',
        path: '/superadmin/dashboard/admins',
        icon: <PersonIcon/>
    },
    {
        title: 'Department',
        path: '/superadmin/dashboard/departments',
        icon: <ApartmentIcon/>
    },
    {
        title: 'User',
        path: '/superadmin/dashboard/users',
        icon: getIcon(peopleFill)
    },

    {
        title: 'Invoice',
        path: '/superadmin/dashboard/invoices',
        icon: <ReceiptIcon/>
    },
    {
        title: 'Subscription',
        path: '/superadmin/dashboard/subscriptions',
        icon: <CardMembershipIcon />
    },
    {
        title: 'Logout',
        path: '/superadmin/dashboard/logout',
        icon: getIcon(lockFill)
    }
];

export default sidebarConfig;
