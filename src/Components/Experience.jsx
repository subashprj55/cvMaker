import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { editExperience, getExperience } from '../reducers/experienceSlice'
import { deleteData, getData } from '../utils/fetchData'

const Experience = ({ id }) => {
  const data = useSelector((event) => event.experienceData)
  const dispatch = useDispatch()

  return data.map((item, i) => (
    <div className="mb-5" key={i}>
      <div className="mb-5">
        <div className="flex gap-[33%]">
          <h1 className="text-lg capitalize mb-1">job title </h1>
          {i === 0 ? (
            ''
          ) : (
            <MdDelete
              className="text-2xl cursor-pointer z-50"
              onClick={async () => {
                const dbName = 'experience'
                await deleteData(item._id, dbName)
                await getData(dispatch, id, getExperience, dbName)
              }}
            />
          )}
        </div>
        <input
          value={item.jobTitle}
          onChange={(e) => {
            const text = e.target.value
            dispatch(editExperience({ index: i, text, id: 'jobTitle' }))
          }}
          type="text"
          className="w-full rounded-lg px-2 py-2 font-medium  tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
        />
      </div>
      <div className="mb-5">
        <h1 className="text-lg capitalize mb-1">company name</h1>
        <input
          value={item.companyName}
          onChange={(e) => {
            const text = e.target.value
            dispatch(editExperience({ index: i, text, id: 'companyName' }))
          }}
          type="text"
          className="w-full rounded-lg px-2 py-2 font-medium  tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
        />
      </div>
      <div className="mb-5">
        <h1 className="text-lg capitalize mb-1">location</h1>
        <input
          value={item.location}
          onChange={(e) => {
            const text = e.target.value
            dispatch(editExperience({ index: i, text, id: 'location' }))
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
            dispatch(editExperience({ index: i, text, id: 'startDate' }))
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
            dispatch(editExperience({ index: i, text, id: 'endDate' }))
          }}
          type="text"
          className="w-full rounded-lg px-2 py-2 font-medium  tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
        />
      </div>
    </div>
  ))
}

export default Experience
