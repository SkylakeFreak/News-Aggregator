import React from 'react'
import { useNavigate,Outlet } from 'react-router-dom'

function PrivateRouteAdmin({userauth1}) {
    const navigate=useNavigate();

    

    if (userauth1){
        return (
            <Outlet/>
          )

    }
    else{
        return(
            <div className='h-screen flex text-3xl justify-center items-center'>Not Authorized</div>
        )
    }
  
}

export default PrivateRouteAdmin