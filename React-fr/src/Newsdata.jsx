"use client";
import {useState} from "react"
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function Newsdata({currentemail}) {
  const [Dept,setDept]=useState("Not Selected");
  const route=useNavigate();
  const group=Dept
  const date = new Date().toLocaleString();

  const Approved=false;
  console.log(currentemail,"currentemail")
  const Owner=currentemail
  const Like=0;
  const Reported=0;
  const [Title,settitle]=useState("")
  const [Content,setcontent]=useState("")
  const [Imglink,setlink]=useState("")
  const submittitle=(e)=>{
    settitle(e.target.value)
  }
  const submitcontent=(e)=>{
    setcontent(e.target.value)
  }
  const submitlink=(e)=>{
    setlink(e.target.value)
  }
  const formsubmit=async(e)=>{
    e.preventDefault();
    if (Dept==="Not Selected"){
      toast.error("Not Selected Department");
      return
    }
    
    try{
      const response=await axios.post('http://localhost:3004/putData',{group,Owner,date,Title,Content,Imglink,Like,Reported,Approved,currentemail});
      console.log(response)
      toast.success(`News Request Successfully Sent to ${Dept}`);
      
    }
    catch(error){
      console.error(error)
      toast.error("Error")
    }
  }

  return (
    <div id="me" className="h-screen flex flex-col">
      <div><Toaster/></div>
      <div>
      <button onClick={()=>{
        route("/Content")
      }} className="bg-black w-20 text-white text-xl p-2 mt-1 ml-1 hover:bg-gray-500 rounded-lg">Back</button>
        
      </div>
      
      
      
      <div className="flex flex-row w-screen h-screen items-center justify-evenly">
        <div className="flex h-[650px] items-start">
        <select onChange={(e)=>{
          setDept(e.target.value)

        }} className="outline outline-1 shadow-xl" name="Select" id="">
          <option value="Training and Placement Cell">Training and Placement Cell</option>
          <option value="Armed Forces and Motivation Cell">Armed Forces and Motivation Cell</option>
          <option value="Carrer Development Cell">Carrer Development Cell</option>
          <option value="International Relation Cell">International Relation Cell</option>
          <option value="Admission Cell">Admission Cell</option>
          <option value="Alumni Cell">Alumni Cell</option>
          <option value="Reasearch and Devlopement Cell">Reasearch and Devlopement Cell</option>
          <option value="System Support Cell">System Support Cell</option>
          <option value="Technical Event Cell">Technical Event Cell</option>
          <option value="Social Responsive Cell">Social Responsive Cell</option>
          <option value="R and D Cell">R and D Cell</option>
          <option value="Internship Cell">Internship Cell</option>
          <option value="Entreprenurship Development Cell">Entreprenurship Development Cell</option>
          <option value="Women Empowerment Cell">Women Empowerment Cell</option>
        </select>

        </div>
        <div className="">
        <form onSubmit={formsubmit} action=""> 
          <div className="flex flex-col text-xl">
          <p>{"Send Request to "} <span className="font-bold">{Dept}</span></p>
          <textarea required={true} onChange={submittitle} placeholder="Title" name="title" className="bg-gray-200 w-[500px] mb-2" id=""></textarea>
          <textarea required={true} onChange={submitcontent} className="h-[500px] mb-2 w-[500px] bg-gray-200" name="content" placeholder="Write Your news here!" id=""></textarea>
          <textarea required={true} onChange={submitlink} placeholder="Paste Your Image Link Here" name="imglink" className="bg-gray-200 w-[500px] mb-2" id=""></textarea>
          <button className="bg-green-500 p-2 rounded-sm hover:bg-green-800" type="submit">Request to SUBMIT</button>
          </div>
         
          
        </form>
        </div>
       

      </div>
    </div>
  );
}

export default Newsdata
