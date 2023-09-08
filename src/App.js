import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import PrivateRoutes from './utils/PrivateRoutes';
import Layout from './components/Layout';
import Home from '../src/pages/Home'
import LoginPage from '../src/pages/LoginPage'
import Dashboard from './pages/Dashboard';
import RegisterForm from './pages/Register';
import UserprofileDisplay from './pages/userprofile/UserprofileDisplay';
import Userprofileedit from './pages/userprofile/UserprofileEdit';
import Userprofileadd from './pages/userprofile/UserProfileAdd';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path= 'register' element={<RegisterForm/>}/>
            <Route element={<AuthProvider><Layout/></AuthProvider>}>
              <Route element={<LoginPage/>} path="/loginpage"/>
              <Route element={<PrivateRoutes/>}>
                <Route path='dashboard' element={<Dashboard/>} exact />
                <Route path="userprofiledisplay" element={<UserprofileDisplay/>}/>
                <Route path="userprofileadd" element={<Userprofileadd/>}/>
              </Route>
              <Route element={<LoginPage/>} path="/loginpage"/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
