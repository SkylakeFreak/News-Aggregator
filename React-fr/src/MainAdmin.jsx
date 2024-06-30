import React, { useEffect,useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import './style.scss';

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
    <div className=''>
        <p className=''>Admin</p>
        {<div className=''>
        {
              data1.map((element,index)=>{
                return(
                  <div className='' key={index}>
                    <div className=''>
                    <p className=''>Sender: {element.Owner}</p>
                    <p className=''>{element.date}</p>
                    <p className=''>{element.Title}</p>
                    <div className=''>
                      <img src={element.Imglink} alt="" />
                    </div>
                    <p className=''>{element.Content}</p>
                    {/* <p>{element.Imglink}</p> */}
                    {/* <p  className='text-2xl text-red-500 font-mono font-semibold mt-4'>Status: {element.Approved}</p> */}
                    <div className=''>
                    <button className=''>Approve?</button>
                    <button className=''>Disapprove?</button>
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