import React from 'react'
import Home from './home/Home'
import Course from './componenets/Course'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './componenets/Signup'
import Contacts from './contacts/Contacts'
import  { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'

const App = () => {

  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);


  return (
    <>
    <div className='dark:bg-yellow-50 dark:text-slate-950'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route 
      path='/course' 
      element={authUser?<Courses/> : <Navigate to="/signup"/>} 
      />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/contact' element={<Contacts/>} />
    </Routes>
    <Toaster/>
    </div>
    </>

  )
}

export default App
