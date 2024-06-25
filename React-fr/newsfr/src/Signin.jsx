import React from "react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Toaster position="bottom-right" reverseOrder={false} />
      <nav>SIGNIN</nav>
      <div className="h-screen w-screen flex items-center justify-center">
        <form onSubmit={formsubmit} action="">
          <div className="flex flex-col outline outline-1">
            <h1 className="text-center">SIGN IN</h1>
            <input
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder="Email"
              className="bg-gray-200 text-center mb-2"
              type="text"
            />
            <input
              onChange={(e) => {
                setusername(e.target.value);
              }}
              placeholder="Username"
              className="bg-gray-200 text-center mb-2"
              type="text"
            />
            <input
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              placeholder="Password"
              className="bg-gray-200 text-center"
              type="password"
            />
            <button className="bg-gray-500 text-white rounded-sm ml-1 mr-1 mb-1 mt-2 hover:bg-black">
              SEND
            </button>
          </div>
          <div className="text-center mt-4 text-sm outline outline-1">
            <p>Don't Have An Account?</p>
            <p
              onClick={Signup}
              className="text-red-500 hover:text-black cursor-pointer"
            >
              SIGNUP
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
