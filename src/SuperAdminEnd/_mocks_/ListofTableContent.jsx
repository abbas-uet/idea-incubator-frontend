import USERLIST from './Lists/user';
import ADMINLIST from './Lists/Admin';
import INVOICELIST from './Lists/invoice';
import DEPARTMENTLIST from './Lists/department';

export const ListofTableContent = (pageName) => {
    return pageName === 'Admin' ? ADMINLIST : pageName === 'Department' ? DEPARTMENTLIST :
        pageName === 'User' ? USERLIST : pageName === 'Invoice' ? INVOICELIST : ''
}
