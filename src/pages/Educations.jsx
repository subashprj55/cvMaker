import React, { useEffect } from 'react'
import Education from '../Components/Education'
import { addEducation } from '../reducers/educationSlice'
import { useDispatch } from 'react-redux'
import { scrollTop } from '../utils/ScrollTop'
import NavContainer from '../Components/NavContainer'
import CvButton from '../Components/CvButton'

const Educations = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    scrollTop()
  }, [])

  return (
    <>
      <NavContainer>
        <div className="w-full bg-gray-100 p-5">
          <h1 className="text-4xl text-blue-600 font-bold mb-10 capitalize">
            education
          </h1>
          <div className=" pb-10 border-b-2 border-gray-400">
            <Education />
          </div>
          <div
            className="mt-5 flex content-center"
            onClick={() => dispatch(addEducation())}
          >
            <p className="capitalize text-blue-400 text-xl  cursor-pointer">
              <span className="text-3xl">+ </span>add education
            </p>
          </div>
          <CvButton name={'Continue to Experience'} link="/experience" />
        </div>
      </NavContainer>
    </>
  )
}

export default Educations
