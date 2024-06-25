import React from 'react'
import { useNavigate } from 'react-router-dom'

function Content({currentuser}) {
  const route=useNavigate();
  return (
    <div  className='flex flex-col h-screen'>
      <p className='font-bold text-3xl mt-2 flex w-screen justify-center'>Show here User Liked Post, Till now uploaded data..</p>
      <p className='w-screen text-xl mt-10 text-center'>{"Welcome "}{currentuser}</p>
      
      
      <div className='h-screen w-screen flex items-center justify-center'>
        
        <button onClick={()=>{
          route("/NewsData")
        }} className='bg-gray-500 text-white p-2 rounded-md hover:bg-black'>Request to Upload New post</button>
      </div>
    </div>
  )
}

export default Content