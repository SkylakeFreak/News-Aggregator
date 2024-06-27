import React from "react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import './style.scss'

function Signup() {
    toast.dismiss();
  let history = useNavigate();
  const Dept="consumer";
  const Editor="false"
  const [Email, setemail] = useState("");
  const [Username, setusername] = useState("");
  const [Password, setpassword] = useState("");
  const [Password1, setpassword1] = useState("");
  const [Day, setday] = useState("");
  const [Month, setmonth] = useState("");
  const [Year, setYear] = useState("");
  const [Link, setlink] = useState("");
  const [About, setabout] = useState("");

  const formsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3004/putNewuser", {
        Dept,
        Editor,
        Email,
        Username,
        Password,
        Day,
        Month,
        Year,
        Link,
        About,
      });
      console.log(response.data,"resss")
      if (response.data===true){
        toast.success("Success!");
        setTimeout(()=>{
            history('/Signin');
           
        },2000)
        toast.loading("Will Redirect")

      }
      else{
        toast.error("User Already Exists Kindly Login!");
        setTimeout(()=>{
            window.location.reload();
        },2000)
        toast.loading("Will Referesh")
        
      }
      
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="Signup">
      <Toaster position="bottom-right" reverseOrder={false}/>
      <div className="content">
        <h1>Register</h1>
        <form onSubmit={formsubmit} action="">
          <label>Email
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required={true}
            placeholder="Email"
            className=""
            type="text"
          /></label>
          <input
            onChange={(e) => {
              setusername(e.target.value);
            }}
            required={true}
            placeholder="Username"
            className=""
            type="text"
          />
          <input
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required={true}
            placeholder="Password"
            className=""
            type="password"
          />
          <input
            onChange={(e) => {
              setpassword1(e.target.value);
            }}
            required={true}
            placeholder="Confirm Password"
            className=""
            type="password"
          />
          <button
              type="submit"
              className=""
            >
              Register
            </button>
        </form>
        <div className="line"></div>
        <div className="registration">
          <button onClick={()=>{history('/Signin')}} className="">Signin</button>
        </div>
      </div>
      <div className="img-container">
        <div className="overlay"></div>
        <img src='https://cdn.dribbble.com/users/136988/screenshots/1921959/door_smal.gif'/>
      </div>
      {/* <div className="">
        <input
          onChange={(e) => {
            setday(e.target.value);
          }}
          required={true}
          placeholder="Day"
          className=""
          type="Number"
        />
        <input
          onChange={(e) => {
            setmonth(e.target.value);
          }}
          required={true}
          placeholder="Month"
          className=""
          type="Number"
        />
        <input
          onChange={(e) => {
            setYear(e.target.value);
          }}
          required={true}
          placeholder="Year"
          className=""
          type="Number"
        />
      </div>
        <input
          onChange={(e) => {
            setlink(e.target.value);
          }}
          required={true}
          placeholder="Profile Image Link"
          className=""
          type="text"
        />
        <textarea
          onChange={(e) => {
            setabout(e.target.value);
          }}
          placeholder="Write Something About Yourself!"
          className=""
          name=""
          id=""
        ></textarea> */}
    </div>
  );
}

export default Signup;
