
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Front from './components/Front';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Content from './components/Content';
import Newsdata from './components/Newsdata';
import Header from './components/Header';
import Footer from './components/Footer';
import MainAdmin from './components/MainAdmin';
import './components/style.scss';
import './App.css';
import {useState } from 'react';


function App() {
  const [userauth,setuseauth]=useState(false);
  const [currentuser,setcurrentuser]=useState("");
  const [currentemail,setcurrentemail]=useState("");
  console.log(currentemail);

  return (
    <>
    <div className='App'>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Front/>}/>
      <Route path="/signin" element={<Signin setuseauth={setuseauth} setcurrentemail={setcurrentemail} currentuser={currentuser} setcurrentuser={setcurrentuser}/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/admin" element={<MainAdmin/>}/>
      <Route path='/content' element={<Content currentemail={currentemail} currentuser={currentuser}/>}/>
      <Route path='/newsdata' element={<Newsdata  currentemail={currentemail}/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
    </>
  );
}

export default App;
