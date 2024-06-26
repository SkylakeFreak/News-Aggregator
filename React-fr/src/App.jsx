import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Front from './Front';
import Signin from './Signin';
import Signup from './Signup';
import Content from './Content';
import Newsdata from './Newsdata';
import Header from './Header';
import Footer from './Footer';
import MainAdmin from './MainAdmin';
import './App.css';
import './style.scss';
import { useState } from 'react';
import PrivateRouteAdmin from './PrivateRouteAdmin';

function App() {
  const [userauth,setuseauth]=useState(false);
  const [userauth1,setuseauth1]=useState(true);
  const [currentuser,setcurrentuser]=useState("");
  const [currentemail,setcurrentemail]=useState("");
  console.log(currentemail);

  return (
    <>
    <div className='App'>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/Admin" element={<MainAdmin/>}/>

      </Route>
    <Route element={<PrivateRouteAdmin/>}>
    <Route path="/Admin" element={<MainAdmin userauth1={userauth1} />}/>
    </Route>
      <Route path="/" element={<Front/>}/>
      <Route path="/Signin" element={<Signin setuseauth={setuseauth} setuseauth1={setuseauth1} setcurrentemail={setcurrentemail} currentuser={currentuser} setcurrentuser={setcurrentuser}/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route element={<PrivateRoute userauth={userauth}/>}>
      <Route path='/Content' element={<Content currentemail={currentemail} currentuser={currentuser}/>}/>
      <Route path='/NewsData' element={<Newsdata  currentemail={currentemail}/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
    </>
  );
}

export default App;
