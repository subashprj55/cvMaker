import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { editEducation, getEducation } from '../reducers/educationSlice'
import { deleteData, getData } from '../utils/fetchData'

const Education = ({ id }) => {
  const data = useSelector((event) => event.educationData)

  const dispatch = useDispatch()

  return data.map((item, i) => (
    <div className="mb-5" key={i}>
      <div className="mb-5">
        <div className="flex gap-[33%]">
          <h1 className="text-lg capitalize mb-1">course name </h1>
          {i === 0 ? (
            ''
          ) : (
            <MdDelete
              className="text-2xl cursor-pointer"
              onClick={async () => {
                const dbName = 'education'
                await deleteData(item._id, dbName)
                await getData(dispatch, id, getEducation, dbName)
              }}
            />
          )}
        </div>
        <input
          value={item.courseName}
          onChange={(e) => {
            const text = e.target.value
            dispatch(editEducation({ index: i, text, id: 'courseName' }))
          }}
          type="text"
          className="w-full rounded-lg px-2 py-2 font-medium  tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
        />
      </div>
      <div className="mb-5">
        <h1 className="text-lg capitalize mb-1">institution name</h1>
        <input
          value={item.institutionName}
          onChange={(e) => {
            const text = e.target.value
            dispatch(editEducation({ index: i, text, id: 'institutionName' }))
          }}
          type="text"
          className="w-full rounded-lg px-2 py-2 font-medium  tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
        />
      </div>
      <div className="mb-5">
        <h1 className="text-lg capitalize mb-1">collage address</h1>
        <input
          value={item.collageAddress}
          onChange={(e) => {
            const text = e.target.value
            dispatch(editEducation({ index: i, text, id: 'collageAddress' }))
          }}
          type="text"
          className="w-full rounded-lg px-2 py-2 font-medium  tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
        />
      </div>
      <div className="mb-5">
        <h1 className="text-lg capitalize mb-1">start date</h1>
        <input
          value={item.startDate}
          onChange={(e) => {
            const text = e.target.value
            dispatch(editEducation({ index: i, text, id: 'startDate' }))
          }}
          type="text"
          className="w-full rounded-lg px-2 py-2 font-medium  tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
        />
      </div>
      <div className="">
        <h1 className="text-lg capitalize mb-1">end date</h1>
        <input
          value={item.endDate}
          onChange={(e) => {
            const text = e.target.value
            dispatch(editEducation({ index: i, text, id: 'endDate' }))
          }}
          type="text"
          className="w-full rounded-lg px-2 py-2 font-medium  tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
        />
      </div>
    </div>
  ))
}

export default Education
