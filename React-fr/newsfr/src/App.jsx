import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Front from './Front';
import Signin from './Signin';
import Signup from './Signup';
import Content from './Content';
import Newsdata from './Newsdata';

import './App.css';
import { useState } from 'react';

function App() {
  const [userauth,setuseauth]=useState(true);
  const [currentuser,setcurrentuser]=useState("");
  const [currentemail,setcurrentemail]=useState("");

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Front/>}/>
      <Route path="/Signin" element={<Signin setuseauth={setuseauth} setcurrentemail={setcurrentemail} currentuser={currentuser} setcurrentuser={setcurrentuser}/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route element={<PrivateRoute userauth={userauth}/>}>
      <Route path='/Content' element={<Content currentuser={currentuser}/>}/>
      <Route path='/NewsData' currentemail={currentemail} element={<Newsdata/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
