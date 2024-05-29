import React, { useEffect } from 'react'
import Project from '../Components/Project'
import { addProject } from '../reducers/PSLSlice'
import { useDispatch } from 'react-redux'
import { scrollTop } from '../utils/ScrollTop'
import CvButton from '../Components/CvButton'
import NavContainer from '../Components/NavContainer'

const Projects = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <NavContainer>
      <div className="w-full bg-gray-100 p-5">
        <h1 className="text-4xl text-blue-500 font-bold mb-10 capitalize">
          your projects
        </h1>
        <div className="pb-10 border-b-2 border-gray-400">
          <Project />
        </div>
        <div
          className="mt-5 flex content-center"
          onClick={() => dispatch(addProject())}
        >
          <p className="capitalize text-blue-400 text-xl  cursor-pointer">
            <span className="text-3xl">+</span>add project
          </p>
        </div>
        <CvButton name={'Continue to Skill'} link={'skills'} />
      </div>
    </NavContainer>
  )
}

export default Projects
