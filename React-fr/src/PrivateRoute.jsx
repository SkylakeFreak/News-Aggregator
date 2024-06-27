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
            <div className='h-screen text-xl flex justify-center items-center w-screen bg-black text-white'>
                <div className='text-sm'>
                <Toaster position="bottom-right" reverseOrder={false} />
                </div>
                
                <p>Not Authorized</p>
            </div>
        );
    } else {
        return <Outlet />;
    }
}

export default PrivateRoute;
