import { BrowserRouter ,Routes,Route} from "react-router-dom";
import "./App.css";
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Assest from "./components/Assest/Assest";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import Help from "./components/Help/Help.jsx";
import IdeaPool from "./components/IdeaPool/IdeaPool.jsx";
import Industry from "./components/Industry/Industry.jsx";
import Mentors from "./components/Mentors/Mentors.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import StudentAccountSetting from "./components/Profile Setting/Account Setting/StudentAccountSetting.jsx";
import AssestDetail from "./components/Utils/AssestDetail";
import ViewProfile from "./components/Profile Setting/Profile/ViewProfile.jsx";
import StudentProfileSetting from "./components/Profile Setting/Profile/StudentProfileSetting.jsx";
import TalentPool from "./components/TalentPool/TalentPool.jsx";
import Grid from '@mui/material/Grid';


function App() {
  const pages = [['Home','/home'],['Mentors','/mentors'], ['Industry','/industry'], ['Assest','/assest'],['Idea Pool','/ideaPool'],['Talent Pool','/talentPool'],['Help','/help']];
  const settings = [['Account Setting','/studentAccountSettings'],['Log Out','/studentProfileSettings'], ];
  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter}>

    <BrowserRouter>
      <Navbar settings={settings} pages={pages}/>
      <Grid sx={{mt:8}}>
      <Routes>
        <Route path="home" element={<DashBoard/>}/>
        <Route path="mentors" element={<Mentors/>}/>
        <Route path="industry" element={<Industry/>}/>
        <Route path="assest" element={<Assest/>}/>
        <Route path="ideaPool" element={<IdeaPool/>}/>
        <Route path="talentPool" element={<TalentPool/>}/>
        <Route path="help" element={<Help/>}/>
        <Route path="studentAccountSettings" element={<StudentAccountSetting/>}/>
        <Route path="studentProfileSettings" element={<StudentProfileSetting/>}/>
        <Route path="viewProfile" element={<ViewProfile/>}/>
        <Route exact path="viewAssest" element={<AssestDetail/>}/>
        <Route path="/" element={<DashBoard/>}/>
      </Routes>
      </Grid>
    </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
