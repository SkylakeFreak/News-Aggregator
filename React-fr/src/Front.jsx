import React from 'react'
import ReactDOM from "react-dom/client";
import { useNavigate,BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './Signin';
function Front() {
    let history=useNavigate();
    const Loginclick=()=>{
        history('/Signin')
    }
  return (
    <div id='me' className='h-screen w-screen flex flex-col'>
    <div className='flex justify-center items-center'><p onClick={Loginclick} className='cursor-pointer'>SIGN-IN</p></div>
    <div className='h-full flex items-center justify-center w-full'>
    </div>
    
  </div>
  )
}

export default Front