import React, { useEffect,useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';


function Content({currentuser,currentemail}) {
  const [data1,setdata1]=useState({})
  const route=useNavigate();
  const getdata=async()=>{
    const response=await axios.post('http://localhost:3004/getmessagedata',{currentemail})
    setdata1(response.data)
    console.log(response.data)

  }
  useEffect(()=>{
    getdata();
  },[])
  return (
    <div id="me"  className='flex flex-col h-screen'>
      <p className='font-bold text-3xl mt-2 flex  justify-center'>{currentuser} Current Uploaded Data</p>
      <p className='text-xl mt-10 text-center'>{"Welcome "}{currentemail}</p>
      
      
      <div className='h-screen flex flex-col items-center justify-center'>
        <div className='p-5 h-[500px] max-w-[1000px] overflow-y-scroll mr-4 ml-4 mb-4'>
          {

Object.entries(data1).map(([key1,value1])=>(
  <div className='outline outline-2 mb-3 p-2' key={key1}>
    {
        Object.entries(value1).map(([key2,value2])=>(
          <div className='mb-2' key={key2}>
          <span><span className='font-bold'>{key2}</span>: {value2}</span>
          </div>
        )
        
      )
      
    }
  </div>
  
  
))
           
            
          }
        </div>
        
        <button onClick={()=>{
          route("/NewsData");window.scrollTo(0, 0);
        }} className='bg-gray-500 text-white p-2 rounded-md hover:bg-black'>Request to Upload New post</button>
      </div>
    </div>
  )
}

export default Content