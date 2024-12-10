import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { FormValueWrapper } from '../contexts/formValue'


export default function App() {
  return (
    <FormValueWrapper>
      <div className='h-[100vh] w-[100%] bg-red-300 '>
      <Header/>
      
      <div className='w-[100%] h-[80vh]  flex justify-center items-center'>
      <Outlet/>
      </div>
    </div>
    </FormValueWrapper>
  )
}
