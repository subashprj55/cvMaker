import React, { useState } from 'react'
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa'
import { GiMoebiusTriangle } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handelSubmmit = async (e) => {
    navigate(`/basicInfo`)
  }

  return (
    <>
      <div className="flex h-[50vh]">
        <div className="flex justify-center items-center md:w-[60%] md:h-screen bg-gray-300 lg:py-4 lg:px-10">
          <form
            onSubmit={handelSubmmit}
            action=""
            className=" bg-white w-full h-full pt-4 md:px-14 px-7 rounded-sm"
          >
            <h1 className="text-center text-4xl text-blue-600 font-bold mt-auto mb-8">
              Login to Your Account
            </h1>
            <div className="bg-red-500 rounded-2xl cursor-pointer flex px-1 py-3 justify-center items-center">
              <span className="mr-3">
                <FaGoogle className="text-white font-bold text-2xl" />
              </span>
              <h1 className="text-center capitalize text-white">
                continue with google
              </h1>
            </div>
            <div className="flex items-center mt-4">
              <div className="h-1 w-[50%] bg-gray-300"></div>
              <p className="uppercase mx-2">or</p>
              <div className="h-1 w-[50%] bg-gray-300"></div>
            </div>
            <div className="mt-6">
              <div className="mb-5">
                <h1 className="capitalize text-lg font-medium text-gray-400 mb-1">
                  email
                </h1>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className="bg-gray-300 w-full rounded-lg px-2 py-2 font-semibold tracking-wide text-lg"
                />
              </div>
              <div>
                <h1 className="capitalize text-lg font-medium text-gray-400 mb-1">
                  password
                </h1>
                <div className="relative">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="bg-gray-300 w-full rounded-lg px-2 py-2 text-lg"
                  />
                  {showPassword ? (
                    <FaEye
                      className="absolute text-xl opacity-70 right-3 top-3 cursor-pointer"
                      onClick={(e) => setShowPassword(false)}
                    />
                  ) : (
                    <FaEyeSlash
                      className="absolute text-xl opacity-70 right-3 top-3 cursor-pointer"
                      onClick={(e) => setShowPassword(true)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div>
              <button className="capitalize text-center w-full p-3 bg-blue-400 mt-10 rounded-md font-medium tracking-wide">
                sign in
              </button>
            </div>
            <div className="mt-10 lg:mt-4">
              <h1 className="md:hidden capitalize text-lg font-medium pb-1 underline">
                sign up
              </h1>
              <h1
                onClick={() => navigate('/forgotPassword')}
                className="hover:underline text-center text-lg font-medium cursor-pointer"
              >
                Lost your password?
              </h1>
            </div>
          </form>
        </div>
        <div className="w-[40%] hidden md:block bg-gradient-to-r from-gray-100 to-gray-300 h-screen overflow-hidden">
          <div className="flex justify-center items-center h-full w-full relative">
            <div>
              <GiMoebiusTriangle className="absolute text-9xl top-[5%] left-[40%] rotate-45 opacity-5" />
            </div>
            <div>
              <h1 className=" capitalize ml-auto text-6xl font-semibold text-blue-500 text-center">
                new here?
              </h1>
              <p className="text-blue-600 mt-5 text-lg text-center mx-20">
                Sign Up and explore different templates choose the one you like
                and make your CV attractive and professional.
              </p>
              <div className="flex justify-center mt-5">
                <Link to={'/signUp'}>
                  <p className="capitalize text-2xl rounded-xl py-3 px-10 bg-pink-600 text-white hover:bg-pink-700">
                    sign up
                  </p>
                </Link>
              </div>
              <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-blue-500 opacity-25"></div>
              <div className="absolute w-32 h-32 rounded-full bg-pink-300 opacity-30 left-[10%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
