import React from 'react'
import { MdDelete } from 'react-icons/md'
import StarRating from './StarRating'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSkill, editSkill } from '../reducers/PSLSlice'

const Skill = () => {
  const data = useSelector((event) => event.PSRData)
  const dispatch = useDispatch()

  return data.skill.map((item, i) => (
    <div key={i} className="mb-5 ">
      <div className="flex gap-[33%]">
        <h1 className="text-lg capitalize font-medium tracking-wide mb-1">
          skill{' '}
        </h1>
        {i === 0 ? (
          ''
        ) : (
          <MdDelete
            className="text-2xl cursor-pointer"
            onClick={(e) => dispatch(deleteSkill({ i }))}
          />
        )}
      </div>
      <div className="flex gap-3">
        <input
          value={item.skill}
          onChange={(e) => {
            const text = e.target.value
            dispatch(editSkill({ index: i, text, id: 'skill' }))
          }}
          type="text"
          className=" w-8/12 rounded-lg px-2 py-2 tracking-wide text-xl"
        />
        <StarRating
          rating={item.skillRating}
          index={i}
          editFunction={editSkill}
          fieldName={'skillRating'}
        />
      </div>
    </div>
  ))
}

export default Skill
