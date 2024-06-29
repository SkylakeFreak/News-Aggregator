import React, { useEffect, useRef } from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function PrivateRoute({userauth}) {
    const navigate = useNavigate();
    const state = userauth
    // const state = false

    const toastShown = useRef(false);

    useEffect(() => {
        if (state && !toastShown.current) {
            toastShown.current = true;
            toast.loading("Not Authorized, Will Redirect!");
            setTimeout(() => {
                navigate("/Signup");
            }, 5000);
        }
    }, [navigate, state]);

    if (state) {
        return (
            <div id="me" className='h-screen text-3xl flex justify-center items-center text-white'>
                <div className='text-lg'>
                <Toaster/>
                </div>  
                <p>Not Authorized</p>
            </div>
        );
    } else {
        return <Outlet />;
    }
}

export default PrivateRoute;
