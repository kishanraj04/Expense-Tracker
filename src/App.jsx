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
      <div className="h-[100vh] w-full bg-[url('https://media.istockphoto.com/id/1409832336/photo/blurred-tropic-leaves-behind-frosted-glass-glassmorphism-tropical-leaf-background-3d.jpg?s=612x612&w=0&k=20&c=snHODKX4NpBBfCrEjsvqOhf58-EVQylvR5tUsNpJmzM=')] bg-cover bg-center bg-opacity-20 rounded-md bg-clip-padding backdrop-blur-sm bg-white/30 border border-gray-200 shadow-lg">
      <Header/>
      
      <div className='w-[100%] h-[80vh]  flex justify-center items-center'>
      <Outlet/>
      </div>
    </div>
    </FormValueWrapper>
  )
}
