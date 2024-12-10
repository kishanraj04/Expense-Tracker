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
      <div className="h-full w-full bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210929/pngtree-glassmorphism-wave-effect-abstract-background-image_908575.png')] bg-cover bg-center bg-opacity-20 rounded-md bg-clip-padding backdrop-blur-sm bg-white/30 border border-gray-200 shadow-lg">
      <Header/>
      
      <div className='w-[100%] h-[80vh]  flex justify-center items-center'>
      <Outlet/>
      </div>
    </div>
    </FormValueWrapper>
  )
}
