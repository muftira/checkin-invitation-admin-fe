import React from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()

    const getLogin = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }

  return (
    <div className="w-screen h-[calc(100vh-64px)] flex justify-center items-center">
      <div className="h-[300px] sm:w-[400px]  w-[300px] bg-bege-two flex flex-col justify-center  border-2 border-neutral-300 shadow-2xl rounded-2xl p-6">
        <p className="sm:w-[400px] flex justify-center font-bold text-xl sm:ml-[-24px] ml-0">
          ADMIN E-GUEST BOOK
        </p>
        <form className='flex flex-col items-start'>
          <p className="text-sm mb-1 mt-4">Username</p>
          <input
            className="ring-2 ring-neutral-400 rounded-md px-1 py-1 sm:w-[350px] w-[250px] text-sm"
            type="text"
            onChange=''
            required
          />
          <p className="text-sm mb-1 mt-4 ">Password</p>
          <input
            className="ring-2 ring-neutral-400 rounded-md px-1 py-1 sm:w-[350px] w-[250px] text-sm"
            type="password"
            onChange=''
            required
          />
          <button onClick={(e) => getLogin(e)} className="sm:w-[350px] w-[250px] h-9 bg-bege rounded-md mt-6 text-sm text-white shadow-black/40 shadow-lg font-bold active:bg-bege/80">
            Log in
          </button>
        </form>
        {/* {auth.currentUser?.email ? null : <p className="text-red-600 w-full flex justify-center items-center">{errorCredentials}</p>} */}
        <p className="text-sm sm:w-[400px] w-[300px] flex justify-center ml-[-24px] mt-4">
        </p>
      </div>
    </div>
  )
}

export default Login