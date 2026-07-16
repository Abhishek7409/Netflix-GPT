import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-zinc-900">
        <form className="bg-black/80 p-10 flex flex-col w-96 rounded-md text-white">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <input className="p-3 my-2 bg-zinc-800 rounded outline-none" type="email" placeholder="Email Address" />
          <input className="p-3 my-2 bg-zinc-800 rounded outline-none" type="password" placeholder="Password"/>
          <button className="p-3 my-4 bg-red-600 font-bold rounded">Sign In</button>
        </form>
      </div>
    </>
  )
}

export default Login