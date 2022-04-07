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
        title: 'dashboard',
        path: '/admin/dashboard/app',
        icon: getIcon(pieChart2Fill)
    },
    {
        title: 'user',
        path: '/admin/dashboard/user',
        icon: getIcon(peopleFill)
    },
    {
        title: 'ideas',
        path: '/admin/dashboard/ideas',
        icon: getIcon(shoppingBagFill)
    },
    {
        title: 'assets',
        path: '/admin/dashboard/assets',
        icon: getIcon(fileTextFill)
    },
    {
        title: 'talent',
        path: '/admin/dashboard/talent',
        icon: getIcon(lockFill)
    },
    {
        title: 'industry',
        path: '/admin/dashboard/industry',
        icon: getIcon(personAddFill)
    },
    {
        title: 'mentors',
        path: '/admin/dashboard/mentors',
        icon: getIcon(alertTriangleFill)
    }
];

export default sidebarConfig;
