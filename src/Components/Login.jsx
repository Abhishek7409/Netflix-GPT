import React from 'react'
import Header from './Header'
import { useState } from 'react'
import { checkValidData } from '../Utils/validate';
import { useRef } from 'react';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);;
    const [errorMessage, setErrorMessage] = useState(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
    }

    const email = useRef(null);
    const password = useRef(null);

    return (
        <>
            <Header />
            <div className="flex justify-center items-center h-screen bg-zinc-900">
                <form onSubmit={(e) => e.preventDefault()} className="bg-black/55 p-10 flex flex-col w-96 rounded-md text-white">
                    <h1 className="text-3xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {isSignInForm ? null : <input
                        className="p-3 my-2 bg-zinc-800 rounded outline-none" type="text" placeholder="Full Name"
                    />}
                    <input
                        ref={email}
                        className="p-3 my-2 bg-zinc-800 rounded outline-none" type="email" placeholder="Email Address"
                    />
                    <input
                        ref={password}
                        className="p-3 my-2 bg-zinc-800 rounded outline-none" type="password" placeholder="Password"
                    />
                    <p 
                        className='text-red-500'>
                        {errorMessage}
                    </p>
                    <button
                        onClick={handleButtonClick}
                        className="p-3 my-4 bg-red-600 font-bold rounded">{isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p
                        onClick={toggleSignInForm}>
                        {isSignInForm ? "New to Netflix? Sign up Now" : "Allready registered? Sign in Now"}
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login