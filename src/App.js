import "./App.css";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import UserIndex from './UserEnd/UserIndex';
import React from "react";
import DashBoard from "./UserEnd/components/DashBoard/DashBoard";
import Mentors from "./UserEnd/components/Mentors/Mentors";
import Industry from "./UserEnd/components/Industry/Industry";
import Assest from "./UserEnd/components/Assest/Assest";
import AssestDetail from "./UserEnd/components/Utils/AssestDetail";
import IdeaPool from "./UserEnd/components/IdeaPool/IdeaPool";
import IdeaDetail from "./UserEnd/components/IdeaPool/IdeaDetail"
import Talent from'./UserEnd/components/Talent/Talent'


import Help from "./UserEnd/components/Help/Help";
import StudentAccountSetting from "./UserEnd/components/Profile Setting/Account Setting/StudentAccountSetting";
import StudentProfileSetting from "./UserEnd/components/Profile Setting/Profile/StudentProfileSetting";

import AdminIndex from './AdminEnd/AdminIndex';
import DashboardLayout from "./AdminEnd/layouts/dashboard";
import DashboardApp from "./AdminEnd/pages/DashboardApp";
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import GlobalStyles from "./theme/globalStyles";
import {BaseOptionChartStyle} from "./AdminEnd/components/charts/BaseOptionChart";
import ThemeConfig from "./theme";


import AssetDetails from './AdminEnd/components/_dashboard/Component Details/Asset Details/AssetDetails';

import UserDetails from './AdminEnd/components/_dashboard/Component Details/User Details/UserDetails';
import IdeaDetails from "./AdminEnd/components/_dashboard/Component Details/IdeasDetails/IdeaDetails";
import TalentDetails from "./AdminEnd/components/_dashboard/Component Details/Talent Details/Talent Details";
import IndustryDetails from "./AdminEnd/components/_dashboard/Component Details/IndustryDetails/IndustryDetails";
import MentorDetails from "./AdminEnd/components/_dashboard/Component Details/MentorDetails/MentorDetails";


import SuperAdminIndex from "./SuperAdminEnd/SuperAdminIndex";
import SuperAdminDashboardLayout from "./SuperAdminEnd/layouts/dashboard";
import SuperAdminDashboardApp from './SuperAdminEnd/pages/SuperAdiminDashboardApp';
import Subscription from "./SuperAdminEnd/pages/Subscription";
import Logout from "./SuperAdminEnd/pages/Logout";
import SuperAdminUserDetail from "./SuperAdminEnd/components/_dashboard/Component Details/User Details/User_Details";


import InvoiceDetails from './SuperAdminEnd/components/_dashboard/Component Details/Invoice Details/InvoiceDetails'
import CreateSubscription from "./SuperAdminEnd/components/_dashboard/Create New/New Subscription/CreateSubscription";
import DepartmentDetails
    from "./SuperAdminEnd/components/_dashboard/Component Details/Department Details/DepartmentDetails";
import AdminDetails from "./SuperAdminEnd/components/_dashboard/Component Details/Admin Details/AdminDetails";
import User_SuperAdminEnd from "./SuperAdminEnd/pages/User_SuperAdminEnd";
import Admin_SuperAdminEnd from "./SuperAdminEnd/pages/Admin_SuperAdminEnd";
import Department_SuperAdminEnd from "./SuperAdminEnd/pages/Department_SuperAdminEnd";
import Invoice_SuperAdminEnd from "./SuperAdminEnd/pages/Invoice_SuperAdminEnd";
import AdminUsers from "./AdminEnd/pages/AdminUsers";
import AccountPayment from "./UserEnd/components/Profile Setting/Account Setting/Account Payements/AccountPayment";
import AccountDetailsUser from "./UserEnd/components/Profile Setting/Account Setting/AccountDetails/AccountDetailsUser";
import SubUsersMain from "./UserEnd/components/Profile Setting/Account Setting/SubUsers/SubUsersMain";
import NotificationSettings
    from "./UserEnd/components/Profile Setting/Account Setting/NotificationSettings/NotificationSettings";
import AdminIdeas from "./AdminEnd/pages/AdminIdeas";

import MD from './UserEnd/components/Utils/MentorDetails';
import ID from './UserEnd/components/Utils/IndustryDetails';
import TD from './UserEnd/components/Utils/TalentDetails';

import AdminAssets from "./AdminEnd/pages/AdminAssets";
import AdminTalent from "./AdminEnd/pages/AdminTalent";
import AdminIndustry from "./AdminEnd/pages/AdminIndustry";
import ChatApp from "./Chat/ChatApp";
import MentorIndustryIndex from "./Mentor IndustryEnd/mentorIndustryIndex";


import Home from './Mentor IndustryEnd/home';
import Meetups from "./Mentor IndustryEnd/meetups";
import Webinars from './Mentor IndustryEnd/webinars';
import ForMentors from "./Mentor IndustryEnd/Profile/ForMentors";
import ForIndustry from "./Mentor IndustryEnd/Profile/FarIndustry";
import AdminMentor from "./AdminEnd/pages/AdminMentors";


const cardObj = [
    [{
        totalLabelValue: '5k',
        firstLabel: 'Male',
        firstLabelValue: '2K',
        secondLabel: 'Female',
        secondLabelValue: '3k',
    }],
    [{
        totalLabelValue: '50',
        firstLabel: 'Pending',
        firstLabelValue: '20',
        secondLabel: 'Approved',
        secondLabelValue: '10'
    }]
]

function App() {
    return (
        <ThemeConfig>
            <GlobalStyles/>
            <BaseOptionChartStyle/>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Navigate to="login" replace/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'register'} element={<Register/>}/>

                    <Route path={'mentor'} element={<MentorIndustryIndex role={'mentor'}/>}>
                        <Route path="home" element={<Home role={'mentor'}/>}/>
                        <Route path="meetup" element={<Meetups/>}/>
                        <Route path="profileSetting" element={<ForMentors/>}/>
                        <Route path={'chat/:name/:id'} element={<ChatApp role={'mentor'}/>}/>
                    </Route>


                    <Route path={'industry'} element={<MentorIndustryIndex role={'industry'}/>}>
                        <Route path="home" element={<Home role={'industry'}/>}/>
                        <Route path="webinar" element={<Webinars/>}/>
                        <Route path="profileSetting" element={<ForIndustry/>}/>
                        <Route path={'chat/:name/:id'} element={<ChatApp role={'industry'}/>}/>
                    </Route>



                    {//
                        //Super Admin Dashboard
                        //
                    }
                    <Route path={'superadmin'} element={<SuperAdminIndex/>}>
                        <Route path={'dashboard'} element={<SuperAdminDashboardLayout/>}>
                            <Route element={<Navigate to="dashboard/app" replace/>}/>

                            <Route path={'app'} element={<SuperAdminDashboardApp/>}/>

                            <Route path={'chat/:name/:id'} element={<ChatApp role={'superadmin'}/>}/>
                            <Route path={'admins'}
                                   element={<Admin_SuperAdminEnd/> /*<Products />*/}/>
                            <Route path={'admins/detailsAdmins/:id'} element={<AdminDetails/>}/>

                            <Route path={'departments'}
                                   element={<Department_SuperAdminEnd/> /*<Products />*/}/>
                            <Route path={'departments/detailsDepartments/:id'} element={<DepartmentDetails/>}/>

                            <Route path={'users'}
                                   element={<User_SuperAdminEnd/>}/>
                            <Route path={'users/detailsUsers/:id'}
                                   element={<SuperAdminUserDetail/>}/>

                            <Route path={'invoices'}
                                   element={<Invoice_SuperAdminEnd/>/*<Blog />*/}/>
                            <Route path={'invoices/detailsInvoices/:id'}
                                   element={<InvoiceDetails />}/>
                            <Route path={'subscriptions'}
                                   element={<Subscription/>}/>
                            <Route path={'subscriptions/create'}
                                   element={<CreateSubscription/>}/>

                            <Route path={'logout'}
                                   element={<Logout/> /* <NotFound />*/}/>

                        </Route>
                    </Route>


                    <Route path={'user'} element={<UserIndex/>}>
                        <Route path="home" element={<DashBoard/>}/>
                        <Route path="mentors" element={<Mentors/>}/>
                        <Route path="mentors/viewMentors/:id" element={<MD/>}/>

                        <Route path="industry" element={<Industry/>}/>
                        <Route path="industry/viewIndustry/:id" element={<ID/>}/>

                        <Route path="assest" element={<Assest/>}/>
                        <Route path="assest/viewAssest/:id" element={<AssestDetail/>}/>
                        <Route path="ideaPool" element={<IdeaPool/>}/>
                        <Route path="ideaPool/viewIdea/:id" element={<IdeaDetail/>}/>
                        <Route path="talentPool" element={<Talent/>}/>
                        <Route path="talentPool/viewTalent/:id" element={<TD/>}/>
                        <Route path="help" element={<Help/>}/>
                        <Route path={'chat/:name/:id'} element={<ChatApp role={'user'}/>}/>

                        <Route path="studentProfileSettings/:id" element={<StudentProfileSetting/>}/>
                        <Route path="studentAccountSettings" element={<StudentAccountSetting/>}>
                            <Route path="account_details" element={<AccountDetailsUser/>}/>
                            <Route path="profile_details" element={<StudentProfileSetting/>}/>
                            <Route path="sub_users" element={<SubUsersMain/>}/>
                            <Route path="account_billing" element={<AccountPayment/>}/>
                            <Route path="notifications" element={<NotificationSettings/>}/>

                        </Route>

                    </Route>
                    <Route path={'admin'} element={<AdminIndex/>}>
                        <Route path={'dashboard'} element={<DashboardLayout/>}>
                            <Route element={<Navigate to="dashboard/app" replace/>}/>
                            <Route path={'app'} element={<DashboardApp/>}/>
                            <Route path={'user'}
                                   element={<AdminUsers  cardObj={cardObj[0][0]}/>}/>
                            <Route path={'user/detailsUser/:id'}
                                   element={<UserDetails />}/>
                            <Route path={'ideas'}
                                   element={<AdminIdeas cardObj={cardObj[1][0]}/> }/>
                            <Route path={'ideas/detailsIdeas/:id'} element={<IdeaDetails
                                />}/>
                            <Route path={'assets'}
                                   element={<AdminAssets cardObj={cardObj[0][0]}/>/*<Blog />*/}/>
                            <Route path={'asset/detailsAsset/:id'}
                                   element={<AssetDetails />}/>
                            <Route path={'talent'}
                                   element={<AdminTalent cardObj={cardObj[0][0]}/>}/>
                            <Route path={'talent/detailsTalent/:id'} element={<TalentDetails
                                />}/>
                            <Route path={'industry'}

                                   element={<AdminIndustry cardObj={cardObj[0][0]}/> /* <NotFound />*/}/>
                            <Route path={'industry/detailsIndustry/:id'} element={<IndustryDetails
                                />}/>
                            <Route path={'mentors'}
                                   element={<AdminMentor cardObj={cardObj[0][0]} />}/>
                            <Route path={'mentors/detailsMentors/:id'} element={<MentorDetails
                                />}/>
                            <Route path={'chat/:name/:id'} element={<ChatApp role={'admin'}/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeConfig>
    );
}

export default App;
