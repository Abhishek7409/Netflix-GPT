import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react'
import { checkValidData } from '../Utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const handleButtonClick = () => {
        //validate the form data 
        const message = checkValidData(email.current.value, password.current.value);

        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {
            //sign up logic imported from firebaseDocumentation 
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName
                        }))
                        navigate('/browser')
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
        else {
            // sign in logic imported from firebaseDocumentation
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate('/browser')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }

    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }


    return (
        <>
            <Header />

            <div className="min-h-screen flex justify-center items-center bg-black">

                <form onSubmit={(e) => { e.preventDefault() }} className="bg-black/80 p-10 flex flex-col w-96 rounded-md text-white">

                    <h1 className="text-3xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>


                    {!isSignInForm ? <input
                        ref={name}
                        type="text"
                        placeholder="Name"
                        className="p-4 mb-4 bg-gray-800 rounded text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
                    /> : null}

                    <input
                        ref={email}
                        type="text"
                        placeholder="Email Address"
                        className="p-4 mb-4 bg-gray-800 rounded text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
                    />

                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="p-4 mb-6 bg-gray-800 rounded text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
                    />

                    <p className='my-2 text-red-700 bold text-lg'
                    >{errorMessage}</p>

                    <button onClick={handleButtonClick} className="bg-red-600 hover:bg-red-700 p-3 rounded font-semibold text-lg transition">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>

                    <p onClick={toggleSignInForm} className='cursor-pointer my-2'>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already register. Sign In now"}</p>

                </form>
            </div>

        </>
    )
}

export default Login
