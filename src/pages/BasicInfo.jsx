import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeValue } from '../reducers/basicInfoSlice'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { scrollTop } from '../utils/ScrollTop'
import NavContainer from '../Components/NavContainer'
import CvButton from '../Components/CvButton'

const BasicInfo = () => {
  const data = useSelector((event) => event.basicInfo)
  const dispatch = useDispatch()

  const handelChange = (value) => {
    dispatch(changeValue({ id: 'summary', value }))
  }

  useEffect(() => {
    scrollTop()
  }, [])

  return (
    <>
      <NavContainer>
        <div className="bg-gray-100 p-5 w-full">
          <h1 className="text-4xl text-blue-600 font-bold mb-10 capitalize">
            Basic Information
          </h1>
          <div className=" mb-5">
            <h1 className="text-lg  capitalize mb-1">Name </h1>
            <input
              value={data.firstName}
              onChange={(e) => {
                const value = e.target.value
                dispatch(changeValue({ id: 'firstName', value }))
              }}
              required
              type="text"
              className=" w-full rounded-lg px-2 py-2 font-medium  tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
            />
          </div>

          <div className="mb-5">
            <h1 className="text-lg  capitalize mb-1">Professional Title</h1>
            <input
              value={data.professionalTitle}
              onChange={(e) => {
                const value = e.target.value
                dispatch(changeValue({ id: 'professionalTitle', value }))
              }}
              required
              type="text"
              className=" w-full rounded-lg px-2 py-2 font-medium tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
            />
          </div>
          <div className="mb-5">
            <h1 className="text-lg capitalize mb-1">Portfolio Website</h1>
            <input
              value={data.website}
              onChange={(e) => {
                const value = e.target.value
                dispatch(changeValue({ id: 'website', value }))
              }}
              required
              type="text"
              className=" w-full rounded-lg px-2 py-2 font-medium tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
            />
          </div>
          <div className="mb-5">
            <h1 className="text-lg capitalize mb-1">address</h1>
            <input
              value={data.address}
              onChange={(e) => {
                const value = e.target.value
                dispatch(changeValue({ id: 'address', value }))
              }}
              required
              type="text"
              className=" w-full rounded-lg px-2 py-2 font-medium tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
            />
          </div>
          <div className="mb-5">
            <h1 className="text-lg capitalize mb-1">city</h1>
            <input
              value={data.city}
              onChange={(e) => {
                const value = e.target.value
                dispatch(changeValue({ id: 'city', value }))
              }}
              required
              type="text"
              className=" w-full rounded-lg px-2 py-2 font-medium tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
            />
          </div>
          <div className="mb-5">
            <h1 className="text-lg capitalize mb-1">email</h1>
            <input
              value={data.email}
              onChange={(e) => {
                const value = e.target.value
                dispatch(changeValue({ id: 'email', value }))
              }}
              required
              type="email"
              className=" w-full rounded-lg px-2 py-2 font-medium tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
            />
          </div>
          <div className="mb-5">
            <h1 className="text-lg  capitalize mb-1">phone </h1>
            <input
              value={data.phone}
              onChange={(e) => {
                const value = e.target.value
                dispatch(changeValue({ id: 'phone', value }))
              }}
              required
              type="text"
              className=" w-full rounded-lg px-2 py-2 font-medium tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
            />
          </div>
          <div className="mb-5">
            <h1 className="text-lg  capitalize mb-1">Summary </h1>

            <div className="bg-white">
              <ReactQuill value={data.summary} onChange={handelChange} />
            </div>
          </div>
          <CvButton name={'Continue to Education'} link={'/education'} />
        </div>
      </NavContainer>
    </>
  )
}

export default BasicInfo
