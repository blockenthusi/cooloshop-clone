import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Mainland from './Component/LandingPage/Mainland'
import Header from './Component/Header/Header'
import CategoriesPage from './Component/CategoriesPage/CategoriesPage'
import Newcart from './Component/New/Newcart'
import Register from './Component/Forms/Registration'
import Login from './Component/login/Login'
import Otp from './Component/Otp/Otp'






function App() {
  return(
   <HashRouter>
    <Header/>

    <Routes>
      <Route  path='/' element={<Mainland/>}/>
      <Route path='categories/:id/:categoriesname' element={<CategoriesPage/>} />
      <Route path='/cart'  element={<Newcart/>} />
      <Route path='register' element={<Register/>} />
      <Route path='login' element={<Login/>} />
      <Route path='otp'   element={<Otp/>}  />
      
      
    
    </Routes>
   </HashRouter>
  )
}

export default App
