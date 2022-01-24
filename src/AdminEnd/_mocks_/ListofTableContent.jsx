import USERLIST from './Lists/user';
import ASSETLIST from './Lists/assets';
import TALENTLIST from './Lists/talent';
import INDUSTRYLIST from './Lists/industry';
import MENTORLIST from './Lists/mentors';
import IDEASLIST from './Lists/ideas';

export const ListofTableContent = (pageName) => {
    return pageName === 'User' ? USERLIST : pageName === 'Ideas' ? IDEASLIST :
        pageName === 'Assets' ? ASSETLIST : pageName === 'Talent' ? TALENTLIST :
            pageName === 'Mentors' ? MENTORLIST : pageName === 'Industry' ? INDUSTRYLIST : ''
}
