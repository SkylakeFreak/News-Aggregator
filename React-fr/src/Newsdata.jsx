"use client";
import {useState} from "react"
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import './style.scss';


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
    <div id="me" className="">
      <Toaster/>
      <form onSubmit={formsubmit} action="">
        <div className="heading-container">
          <button onClick={()=>{route("/Content")}} className="">&#129128;</button>
          <h1>You are Writing an Article</h1>
        </div>
        <label>Title
        <input type="text" required onChange={submittitle} placeholder="Article 1" name="title" className="" id=""/>
        </label>
        <label>Category
          <select onChange={(e)=>{setDept(e.target.value)}} className="" name="Select" id="">
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
            <p>{"Selected Category : "} <span className="">{Dept}</span></p>
        </label>
        <label>Content
          <textarea required={true} onChange={submitcontent} className="" name="content" placeholder="Write Your news here!" id=""></textarea>
        </label>
        <label>Media
          <input type="text" required onChange={submitlink} placeholder="Paste Your Image Link Here" name="imglink" className="" id=""></input>
        </label>
        <button className="" type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default Newsdata
