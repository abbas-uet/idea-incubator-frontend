import USERLIST from './Lists/user';
import ADMINLIST from './Lists/Admin';
import INVOICELIST from './Lists/invoice';
import DEPARTMENTLIST from './Lists/department';

export const SuperAdminListofTableContent = (pageName) => {
    return pageName === 'Admins' ? ADMINLIST : pageName === 'Departments' ? DEPARTMENTLIST :
        pageName === 'Users' ? USERLIST : pageName === 'Invoices' ? INVOICELIST : ''
}
