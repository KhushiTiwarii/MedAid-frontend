import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../assets/pages/Home'
import Doctors from '../assets/pages/Doctors/Doctors'
import DoctorDetails from '../assets/pages/Doctors/DoctorDetails'
import Login from '../assets/pages/Login'
import Signup from '../assets/pages/Signup'
import Contact from '../assets/pages/Contact'
import Services from '../assets/pages/Services'
import MyAccount from '../Dashboard/user-account/MyAccount'
import Dashboard from '../Dashboard/doctor-account/Dashboard'
import ProtectedRoutes from './ProtectedRoutes'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:id' element={<DoctorDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/users/profile/me' element={<ProtectedRoutes allowedRoles={["patient"]}><MyAccount/></ProtectedRoutes>}/>
        <Route path='/doctors/profile/me' element={<ProtectedRoutes allowedRoles={["doctor"]}><Dashboard/></ProtectedRoutes>}/>
    </Routes>
  )
}

export default Routers
