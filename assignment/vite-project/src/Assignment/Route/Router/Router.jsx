import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from './Error404'
import MainPage from './MainPage'
import FirstPage from './FirstPage'
import LastPage from './LastPage'

export default function Router() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<MainPage/>}/>
     <Route path='/first'element={<FirstPage/>} />
     <Route path='/last' element={<LastPage/>}/>
     <Route path='*' element={<Error404 />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}
