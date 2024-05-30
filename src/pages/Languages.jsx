import React, { useEffect } from 'react'
import Language from '../Components/Language'
import { useDispatch } from 'react-redux'
import { addLanguge } from '../reducers/PSLSlice'
import { useNavigate } from 'react-router-dom'
import { scrollTop } from '../utils/ScrollTop'
import NavContainer from '../Components/NavContainer'
import CvButton from '../Components/CvButton'

const Languages = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])

  return (
    <NavContainer>
      <div className="w-full bg-gray-100 p-5 min-h-screen">
        <h1 className="text-4xl font-bold text-blue-600 mb-10 capitalize">
          language
        </h1>
        <div className="pb-10 border-b-2 border-gray-400">
          <Language />
        </div>
        <div
          className="mt-5 flex content-center"
          onClick={() => dispatch(addLanguge())}
        >
          <p className="capitalize text-blue-400 text-xl  cursor-pointer">
            <span className="text-3xl">+</span>add language
          </p>
        </div>
        <CvButton name={'PreView'} link={'/preview'} />
      </div>
    </NavContainer>
  )
}

export default Languages
