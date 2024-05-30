import React, { useEffect } from 'react'
import Skill from '../Components/Skill'
import { addSkill } from '../reducers/PSLSlice'
import { useDispatch } from 'react-redux'
import { scrollTop } from '../utils/ScrollTop'
import CvButton from '../Components/CvButton'
import NavContainer from '../Components/NavContainer'

const Skills = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    scrollTop()
  }, [])
  //
  return (
    <NavContainer>
      <div className="w-full bg-gray-100 p-5 min-h-screen">
        <h1 className="text-4xl text-blue-600 font-bold mb-10 capitalize">
          skill
        </h1>
        <div className="pb-10 border-b-2 border-gray-400">
          <Skill />
        </div>
        <div
          className="mt-5 flex content-center"
          onClick={() => dispatch(addSkill())}
        >
          <p className="capitalize text-blue-400 text-xl  cursor-pointer">
            <span className="text-3xl">+</span>add skill
          </p>
        </div>
        <CvButton name={'Continue to Language'} link={'/languages'} />
      </div>
    </NavContainer>
  )
}

export default Skills
