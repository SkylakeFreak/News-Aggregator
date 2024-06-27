import React from "react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
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
    <div className="h-screen w-screen flex flex-col items-center justify-center">
        <div><Toaster
  position="bottom-right"
  reverseOrder={false}
/></div>
      <nav>SIGNUP</nav>
      <div className="h-screen w-screen flex items-center justify-center">
        <form onSubmit={formsubmit} action="">
          <div className="flex flex-col outline outline-1">
            <h1 className="text-center">SIGNUP</h1>
            <div className="flex flex-col ml-1 mr-1">
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required={true}
                placeholder="Email"
                className="bg-gray-200 text-center mb-2"
                type="text"
              />
              <input
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                required={true}
                placeholder="Username"
                className="bg-gray-200 text-center mb-2"
                type="text"
              />
              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                required={true}
                placeholder="Password"
                className="bg-gray-200 text-center mb-2"
                type="password"
              />
              <input
                onChange={(e) => {
                  setpassword1(e.target.value);
                }}
                required={true}
                placeholder="Confirm Password"
                className="bg-gray-200 text-center"
                type="password"
              />
            </div>

            <div className="flex gap-1 ml-1 mr-1">
              <input
                onChange={(e) => {
                  setday(e.target.value);
                }}
                required={true}
                placeholder="Day"
                className="bg-gray-200 text-center w-[80px] mt-2"
                type="Number"
              />
              <input
                onChange={(e) => {
                  setmonth(e.target.value);
                }}
                required={true}
                placeholder="Month"
                className="bg-gray-200 text-center w-[80px] mt-2"
                type="Number"
              />
              <input
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                required={true}
                placeholder="Year"
                className="bg-gray-200 text-center w-[80px] mt-2"
                type="Number"
              />
            </div>
            <div className="flex flex-col ml-1 mr-1 mt-2">
              <input
                onChange={(e) => {
                  setlink(e.target.value);
                }}
                required={true}
                placeholder="Profile Image Link"
                className="bg-gray-200 text-center mb-2"
                type="text"
              />
              <textarea
                onChange={(e) => {
                  setabout(e.target.value);
                }}
                placeholder="Write Something About Yourself!"
                className="bg-gray-200 leading-normal items-center justify-center h-full max-h-40 min-h-10 flex text-center mb-2"
                name=""
                id=""
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-500 text-white rounded-sm ml-1 mr-1 mb-1 mt-2 hover:bg-black"
            >
              SEND
            </button>
            <button onClick={()=>{
                history('/Signin')
            }} className="text-sm">SIGNIN</button>
          </div>
        </form>
        
        
      </div>
      
    </div>
  );
}

export default Signup;
