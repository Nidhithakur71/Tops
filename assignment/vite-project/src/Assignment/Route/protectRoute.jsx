import React from 'react'
import Profile from './Profile'
import User from './User'
import Employee from './Employee'
import Admin from './Admin'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Protector, Employe, Adminn, Users } from "./Protector"
import Header from './Header'
import Home from './Home'


export default function protectRoute() {
  return (
    <div>

<BrowserRouter>
     <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/superadmin' element={<Protector component={<superAdmin/> }  />} />
        <Route path='/admin' element={<Adminn component={<Admin/>} />}/>
        <Route path='/employee'  element={<Employe component={<Employee/>} />} />
        <Route path='user'  element={<Users component={<User/>} />}  />
        <Route path='profile' element={<Profile/>}/>
        </Routes>
     </BrowserRouter>


    </div>
  )
}
