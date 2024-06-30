import React, { useEffect,useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';

function MainAdmin() {
  const [data1,setdata1]=useState([])
  useEffect(()=>{
    getdata()
  })
  const getdata=async()=>{
    const response=await axios.post("http://localhost:3004/getadmindata")
    setdata1(response.data)
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <p className='font-bold text-4xl mt-10'>Admin</p>
        {<div className='h-full overflow-y-scroll items-center justify-center'>
        {
              data1.map((element,index)=>{
                return(
                  <div className='outline p-2 mt-2 mb-8 outline-2 ml-5 mr-5' key={index}>
                    <div className='p-2 text-justify'>
                    <p className='font-bold text-xl '>Sender: {element.Owner}</p>
                    <p className='font-bold text-sm'>{element.date}</p>
                    <p className='text-2xl mt-2'>{element.Title}</p>
                    <div className='w-[500px] shadow-2xl mb-10 mt-2'>
                      <img src={element.Imglink} alt="" />
                    </div>
                    <p className='text-lg font-mono mt-2'>{element.Content}</p>
                    {/* <p>{element.Imglink}</p> */}
                    {/* <p  className='text-2xl text-red-500 font-mono font-semibold mt-4'>Status: {element.Approved}</p> */}
                    <div className='flex gap-3'>
                    <button className='text-green-800 hover:text-green-600 hover:shadow-xl hover:animate-pulse font-bold text-xl p-2 mt-2 bg-white rounded-md hover:bg-gray-100 font-mono'>Approve?</button>
                    <button className='text-red-800 hover:text-red-600 font-bold text-xl p-2 mt-2 bg-white rounded-md hover:bg-gray-100 font-mono'>Disapprove?</button>
                    </div>
                    
                 

                    </div>
                    
                    
                  </div>
                  
                )
                
                
              })
    }

        </div>}
           
        
        
        
        
    </div>
  )
}

export default MainAdmin