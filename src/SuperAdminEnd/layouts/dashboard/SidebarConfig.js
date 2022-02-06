import {Icon} from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

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
        icon: getIcon(shoppingBagFill)
    },
    {
        title: 'Department',
        path: '/superadmin/dashboard/departments',
        icon: getIcon(shoppingBagFill)
    },
    {
        title: 'User',
        path: '/superadmin/dashboard/users',
        icon: getIcon(peopleFill)
    },

    {
        title: 'Invoices',
        path: '/superadmin/dashboard/invoices',
        icon: getIcon(fileTextFill)
    },
    {
        title: 'Subscription',
        path: '/superadmin/dashboard/subscriptions',
        icon: getIcon(lockFill)
    },
    {
        title: 'Logout',
        path: '/superadmin/dashboard/logout',
        icon: getIcon(personAddFill)
    }
];

export default sidebarConfig;
