import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../assets/pages/Home'
import Doctors from '../assets/pages/Doctors/Doctors'
import DoctorDetails from '../assets/pages/Doctors/DoctorDetails'
import Login from '../assets/pages/Login'
import Signup from '../assets/pages/Signup'
import Contact from '../assets/pages/Contact'
import Services from '../assets/pages/Services'

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
    </Routes>
  )
}

export default Routers
