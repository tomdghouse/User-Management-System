import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/common/Navbar'
import LoginPage from './components/auth/LoginPage'
import ProfilePage from './components/userspage/ProfilePage'
import UserService from './components/service/UserService'
import RegistrationPage from './components/auth/RegistrationPage'
import UserManagementPage from './components/userspage/UserManagementPage'
import UpdateUser from './components/userspage/UpdateUser'

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<LoginPage></LoginPage>}></Route>
            <Route exact path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route exact path="/profile" element={<ProfilePage></ProfilePage>}></Route>
            {UserService.adminOny() && (
              <>
                <Route exact path="/register" element={<RegistrationPage></RegistrationPage>}></Route>
                <Route exact path="/admin/user-management" element={<UserManagementPage></UserManagementPage>}></Route>
                <Route exact path="/update-user/:userId" element={<UpdateUser></UpdateUser>}></Route>
              </>
            )}
            <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
