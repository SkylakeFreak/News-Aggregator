import React from "react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import './style.scss';


function Signin({setuseauth,currentuser,setcurrentemail,setcurrentuser}) {
  let history = useNavigate();
  const [Email, setemail] = useState("");
  const [Username, setusername] = useState("");
  const [Password, setpassword] = useState("");
  const Navigate = useNavigate();
  const Signup = () => {
    Navigate("/Signup");
  };
  const formsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3004/checkUser", {
        Email,
        Username,
        Password,
      });
      setcurrentuser(Username);
      setcurrentemail(Email);
      
      console.log(response.data);
      if (response.data === true) {
        toast.success("Found You!!");
        setuseauth(false)
        setTimeout(() => {
          toast.dismiss();
          history("/Content");
        }, 2000);
        toast.loading("Will Redirect");
      } else if(response.data===false) {
        toast.error("Account Doesn't Exists With Us..!!");
        setTimeout(() => {
          history('/Signup')
        }, 2000);
        toast.loading("Will Redirect..");
      }
      else{
        toast.error("Sorry Incorrect Password!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        toast.loading("Will Referesh");


      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id="Signin">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="content">
        <h1 className="">Sign in</h1>
        <form onSubmit={formsubmit} action="">
          <label>Email
            <input
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder="someone@gmail.com"
              className=""
              type="text"
            />
          </label>
          <label>Username
            <input
              onChange={(e) => {
                setusername(e.target.value);
              }}
              placeholder="someone123"
              className=""
              type="text"
            />
          </label>
          <label>Password
            <input
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              placeholder="Password"
              className=""
              type="password"
            />
          </label>
          <label>Role
            <div className="role">
              <input type="radio" name="role" value="Admin" id="Admin"/>
              <label for="Admin">Admin</label>
              <input type="radio" name="role" value="User" id="User"/>
              <label for="User">User</label>
            </div>
          </label>
          <button className="">
            Sign in
          </button>
        </form>
        <div className="line"></div>
        <div className="registration">
          <button onClick={Signup} className="">Register</button>
        </div>
      </div>
      <div className="img-container">
        <img src='https://i.pinimg.com/originals/48/5d/2f/485d2f9046e9042762da35b2e8f22b87.gif'/>
      </div>
    </div>
  );
}

export default Signin;
