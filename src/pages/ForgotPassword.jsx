import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../Components/Alert'
import { changePassword, sendPin } from '../utils/fetchData'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [pin, setPin] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handelForgotPinButton = async () => {
    const response = await sendPin(email)
    if (response === 'success') {
      setShowPassword(true)
    } else {
      setErrorMessage('Envalid Email! please try valid Email')
    }
  }

  const handelChangePassword = async () => {
    const response = await changePassword(email, pin, newPassword)
    if (response.status === 'success') {
      setErrorMessage('Your password has been changed')
    } else {
      setErrorMessage(response.message)
    }
    setTimeout(() => {
      navigate('/login')
    }, 2000)
  }

  return (
    <div className="flex justify-center mt-24">
      {errorMessage && (
        <Alert message={errorMessage} setMessage={setErrorMessage} />
      )}
      <div>
        <h1 className="uppercase text-3xl font-light ">Forgot your password</h1>
        <div className="my-10">
          <h1 className="capitalize mb-2">email acccount</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 w-full rounded-md p-2 pl-3 mb-5"
            type="text"
          />
          <div className={`${showPassword ? '' : 'hidden'} `}>
            <h1 className="capitalize mb-2">new password</h1>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="bg-gray-100 w-full rounded-md p-2 pl-3 mb-5"
              type="text"
            />
            <h1 className="uppercase mb-2">pin</h1>
            <input
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="bg-gray-100 w-1/4  rounded-md p-2 pl-3 mb-3"
              type="text"
            />
          </div>
          <br />
          <button
            onClick={handelForgotPinButton}
            className={`${
              showPassword ? 'hidden' : ''
            } capitalize text-lg rounded-lg py-2 px-6 bg-yellow-500 text-white hover:bg-yellow-600 mt-10`}
          >
            send forgot pin
          </button>
          <button
            onClick={handelChangePassword}
            className={`${
              showPassword ? '' : 'hidden'
            } capitalize text-lg rounded-lg py-2 px-6 bg-blue-600 text-white hover:bg-blue-700 mt-10`}
          >
            change your password
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
