import "./App.css";
import Login from './Authentication/Login'
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
import User from "./AdminEnd/pages/User";
import Products from "./AdminEnd/pages/Products";
import Blog from "./AdminEnd/pages/Blog";
import Register from "./AdminEnd/pages/Register";
import NotFound from "./AdminEnd/pages/Page404";



function App() {
  return (
      <BrowserRouter>
        <Routes >
          <Route path="/login" element={<Login/>}/>
            <Route path={'user'} element={<UserIndex/>}>
              <Route index element={<UserIndex/>}/>
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
              <Route path="viewProfile" element={<ViewProfile/>} />
            </Route>
          <Route path={'admin'} element={<AdminIndex/>}>
            <Route path={'dashboard'} element={<DashboardLayout />}>
                <Route element={<Navigate to="/dashboard/app" replace />}/>
                <Route path={ 'app'} element={ <DashboardApp />}/>
                <Route path={ 'user'} element={ <User /> }/>
                <Route path={ 'products'} element={  <Products />}/>
                <Route path={ 'blog'} element={ <Blog />}/>
                <Route path={ 'login'} element={ <Login />}/>
                <Route path={ 'register'} element={<Register />  }/>
                <Route path={ '404'} element={ <NotFound />}/>
                <Route path={ '*'} element={ <Navigate to="admin/404" />}/>
            </Route>
              <Route
                  path={'*'} element= {<Navigate to="/404" replace />}
              />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
