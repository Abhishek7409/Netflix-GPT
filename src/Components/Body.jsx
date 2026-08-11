import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';


const Body = () => {

    const dispatch = useDispatch();
    

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browser",
            element: <Browser /> 
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // if user 
                
            } else {
                // User is signed out
                dispatch(removeUser())
            }
        });
    }, [])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body