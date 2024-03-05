import { useState } from 'react'
import './App.css'
import { ToastContainer } from "react-toastify";
import Router from './Assignment/Route/Router/Router';
// import Webpage from './Assignment/React-styling/Webpage';
// import ProtectRoute from './Assignment/Route/protectRoute';

function App() {

  return (
    <>
    <div className='appContainer'>
      {/* <Webpage/> */}

      {/* <ProtectRoute/> */}
      <Router/>


    </div>
    <ToastContainer />
    </>
  )
}

export default App
