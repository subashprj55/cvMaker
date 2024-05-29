import React, { useEffect, useState } from 'react'
import { TbTriangleSquareCircle } from 'react-icons/tb'
import { BsFillTriangleFill } from 'react-icons/bs'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { createDatabase } from '../utils/fetchData'
import Alert from '../Components/Alert'

const Signup = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conPassword, setConPassword] = useState('')
  const [validUserName, setValiduserName] = useState(true)
  const [validLastName, setValidLastName] = useState(true)
  const [validEmail, setValidEmail] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const handelSubmit = async (e) => {
    e.preventDefault()

    if (!validUserName) return setErrorMessage('Enter valid User Name')
    if (!validLastName) return setErrorMessage('Enter valid Last Name')
    if (!validEmail) return setErrorMessage('Enter valid Email')
    if (password !== conPassword)
      return setErrorMessage('Password are not the same')
    let id
    try {
      const response = await axios({
        method: 'post',
        url: 'api/users/register',
        data: {
          username: firstName,
          lastname: lastName,
          email,
          password,
        },
      })
      id = response.data.data._id
    } catch (err) {
      console.log('something is wrong', err)
    }
    createDatabase(id)
    setErrorMessage('account created sucessfully')
    setTimeout(() => {
      navigate('/login')
    }, 2000)
  }

  const checkString = (str) => {
    return /^[a-zA-Z]+$/.test(str)
  }
  const chackEmail = (str) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
  }
  useEffect(() => {
    if (firstName.length > 0) {
      const data = checkString(firstName)
      if (data) {
        setValiduserName(true)
        return
      }
      setValiduserName(false)
    }
  }, [firstName])

  useEffect(() => {
    if (lastName.length > 0) {
      const data = checkString(lastName)
      if (data) {
        setValidLastName(true)
        return
      }
      setValidLastName(false)
    }
  }, [lastName])

  useEffect(() => {
    if (email.length > 0) {
      const data = chackEmail(email)
      if (data) {
        setValidEmail(true)
        return
      }
      setValidEmail(false)
    }
  }, [email])
  return (
    <>
      {errorMessage && (
        <Alert message={errorMessage} setMessage={setErrorMessage} />
      )}
      <div
        className="flex 
      justify-center w-full md:py-10 bg-gray-200 relative overflow-hidden"
      >
        <form
          action=""
          className="bg-white px-6 py-6 md:px-10 md:py-7  md:rounded-2xl z-20 w-screen  md:w-1/2"
          onSubmit={handelSubmit}
        >
          <h1 className="text-center text-3xl md:text-5xl font-semibold text-blue-500 capitalize mb-6 font-serif">
            sign Up
          </h1>
          <div>
            <div className="mb-3">
              <h1 className="capitalize text-base md:text-lg font-medium text-gray-700 mb-1">
                first name
              </h1>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                required
                className={` w-full rounded-lg px-2 py-2 outline-none ${
                  validUserName
                    ? 'border-2 border-white'
                    : 'border-2 border-red-600'
                }  font-medium tracking-wide text-lg bg-gray-200`}
                type="text"
              />
            </div>
            <div className="mb-3">
              <h1 className="capitalize text-base md:text-lg font-medium text-gray-700 mb-1">
                last name
              </h1>
              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className={` w-full rounded-lg px-2 py-2 outline-none ${
                  validLastName
                    ? 'border-2 border-white'
                    : 'border-2 border-red-600'
                }  font-medium tracking-wide text-lg bg-gray-200`}
              />
            </div>
            <div className="mb-3">
              <h1 className="capitalize text-base md:text-lg font-medium text-gray-700 mb-1">
                gmail
              </h1>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className={` w-full rounded-lg px-2 py-2 outline-none ${
                  validEmail
                    ? 'border-2 border-white'
                    : 'border-2 border-red-600'
                }  font-medium tracking-wide text-lg bg-gray-200`}
              />
            </div>
            <div className="mb-3 relative">
              <h1 className="capitalize text-base md:text-lg font-medium text-gray-700 mb-1">
                password
              </h1>
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                className=" w-full rounded-lg px-2 py-2 font-medium tracking-wide text-lg bg-gray-200 outline-none"
              />
              {showPassword ? (
                <FaEye
                  className="absolute text-xl opacity-70 right-3 top-11 cursor-pointer z-20"
                  onClick={(e) => setShowPassword(false)}
                />
              ) : (
                <FaEyeSlash
                  className="absolute text-xl opacity-70 right-3 top-11 cursor-pointer z-20"
                  onClick={(e) => setShowPassword(true)}
                />
              )}
            </div>
            <div className="mb-3">
              <h1 className="capitalize text-base md:text-lg font-medium text-gray-700 mb-1">
                re-Enter password
              </h1>
              <input
                required
                value={conPassword}
                onChange={(e) => setConPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                className="outline-none w-full rounded-lg px-2 py-2 font-medium tracking-wide text-base md:text-lg bg-gray-200"
              />
            </div>
            <button className=" mt-3 capitalize text-center w-full p-3 bg-blue-400 rounded-md font-medium tracking-wide md:hover:bg-blue-500">
              create account
            </button>
          </div>
        </form>
        <div className="w-72 h-72 absolute rounded-full bg-purple-300 top-0 -left-5 opacity-20"></div>
        <TbTriangleSquareCircle className="absolute top-[50%] left-[10%] text-9xl rotate-45 opacity-5" />

        <BsFillTriangleFill className="z-10 absolute top-0 -right-40 w-[600px] h-[600px] bg-slate-200 opacity-5 rotate-45" />
      </div>
    </>
  )
}

export default Signup
