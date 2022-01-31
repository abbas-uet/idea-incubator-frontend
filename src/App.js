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
import TalentPool from "./UserEnd/components/TalentPool/TalentPool";
import Help from "./UserEnd/components/Help/Help";
import StudentAccountSetting from "./UserEnd/components/Profile Setting/Account Setting/StudentAccountSetting";
import StudentProfileSetting from "./UserEnd/components/Profile Setting/Profile/StudentProfileSetting";
import ViewProfile from "./UserEnd/components/Profile Setting/Profile/ViewProfile";
import AdminIndex from './AdminEnd/AdminIndex';
import DashboardLayout from "./AdminEnd/layouts/dashboard";
import DashboardApp from "./AdminEnd/pages/DashboardApp";
import AdminOptions from "./AdminEnd/pages/AdminOptions";
import Products from "./AdminEnd/pages/Products";
import Blog from "./AdminEnd/pages/Blog";
import NotFound from "./AdminEnd/pages/Page404";
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import GlobalStyles from "./theme/globalStyles";
import {BaseOptionChartStyle} from "./AdminEnd/components/charts/BaseOptionChart";
import ThemeConfig from "./theme";

import UserDetails from './AdminEnd/components/_dashboard/Component Details/UserDetails';
import {ListofTableContent} from "./AdminEnd/_mocks_/ListofTableContent";

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


                    <Route path={'user'} element={<UserIndex/>}>
                        <Route path="home" element={<DashBoard/>}/>
                        <Route path="mentors" element={<Mentors/>}/>
                        <Route path="industry" element={<Industry/>}/>
                        <Route path="assest" element={<Assest/>}/>
                        <Route path="assest/viewAssest" element={<AssestDetail/>}/>
                        <Route path="ideaPool" element={<IdeaPool/>}/>
                        <Route path="talentPool" element={<TalentPool/>}/>
                        <Route path="help" element={<Help/>}/>
                        <Route path="studentAccountSettings" element={<StudentAccountSetting/>}/>
                        <Route path="studentProfileSettings" element={<StudentProfileSetting/>}/>
                        <Route path="viewProfile" element={<ViewProfile/>}/>
                    </Route>
                    <Route path={'admin'} element={<AdminIndex/>}>
                        <Route path={'dashboard'} element={<DashboardLayout/>}>
                            <Route element={<Navigate to="dashboard/app" replace/>}/>
                            <Route path={'app'} element={<DashboardApp/>}/>
                            <Route path={'user'}
                                   element={<AdminOptions pageName={'User'} cardObj={cardObj[0][0]}/>}/>
                            <Route path={'user/detailsUser/:id'}
                                   element={<UserDetails pageName={'User'} LIST={ListofTableContent('User')}/>}/>
                            <Route path={'ideas'}
                                   element={<AdminOptions pageName={'Ideas'}
                                                          cardObj={cardObj[1][0]}/> /*<Products />*/}/>
                            <Route path={'ideas/detailsIdeas/:id'} element={<UserDetails pageName={'Ideas'}/>}/>
                            <Route path={'assets'}
                                   element={<AdminOptions pageName={'Assets'} cardObj={cardObj[0][0]}/>/*<Blog />*/}/>
                            <Route path={'assets/detailsAssets'} element={<UserDetails pageName={'Assets'}/>}/>
                            <Route path={'talent'}
                                   element={<AdminOptions pageName={'Talent'} cardObj={cardObj[0][0]}/>}/>
                            <Route path={'talent/detailsTalent'} element={<UserDetails pageName={'Talent'}/>}/>
                            <Route path={'industry'}
                                   element={<AdminOptions pageName={'Industry'}
                                                          cardObj={cardObj[0][0]}/> /* <NotFound />*/}/>
                            <Route path={'industry/detailsIndustry'} element={<UserDetails pageName={'Industry'}/>}/>
                            <Route path={'mentors'}
                                   element={<AdminOptions pageName={'Mentors'} cardObj={cardObj[0][0]}/>}/>
                            <Route path={'mentors/detailsMentors'} element={<UserDetails pageName={'Mentors'}/>}/>

                        </Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeConfig>
    );
}

export default App;
