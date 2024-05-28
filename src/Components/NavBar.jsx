import React from "react"
import { CgProfile } from "react-icons/cg"
import {
  MdCastForEducation,
  MdOutlineLanguage,
} from "react-icons/md"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineProject } from "react-icons/ai"
import { HiOutlineLightBulb } from "react-icons/hi"


const NavBar = ({ activeBtn, setActiveBtn }) => {
  return (
    <div className="border-r-2 border-gray-400 py-2 w-auto px-1">
      <div
        onClick={e => setActiveBtn("about")}
        className={`${
          activeBtn === "about"
            ? "bg-blue-500 text-white"
            : "md:hover:bg-gray-200"
        } cursor-pointer  mb-2 p-3 rounded-lg duration-300`}>
        <CgProfile className="text-2xl mx-auto" />
        <h1 className="text-center capitalize">About</h1>
      </div>
      <div
        onClick={e => setActiveBtn("education")}
        className={`${
          activeBtn === "education"
            ? "bg-blue-500 text-white"
            : "md:hover:bg-gray-200"
        } cursor-pointer mt-1 mb-2 p-3 rounded-2xl duration-300`}>
        <MdCastForEducation className="text-2xl mx-auto " />
        <h1 className="text-center capitalize">education</h1>
      </div>
      <div
        onClick={e => setActiveBtn("experience")}
        className={`${
          activeBtn === "experience"
            ? "bg-blue-500 text-white"
            : "md:hover:bg-gray-200"
        } cursor-pointer  mt-1 mb-2 p-3 rounded-2xl duration-300`}>
        <BsBagCheck className="text-2xl mx-auto" />
        <h1 className="text-center capitalize">experience</h1>
      </div>
      <div
        onClick={e => setActiveBtn("project")}
        className={`${
          activeBtn === "project"
            ? "bg-blue-500 text-white"
            : "md:hover:bg-gray-200"
        } cursor-pointer  mt-1 mb-2 p-3 rounded-2xl duration-300`}>
        <AiOutlineProject className="text-2xl mx-auto" />
        <h1 className="text-center capitalize">project</h1>
      </div>
      <div
        onClick={e => setActiveBtn("skill")}
        className={`${
          activeBtn === "skill"
            ? "bg-blue-500 text-white"
            : "md:hover:bg-gray-200"
        } cursor-pointer  mt-1 mb-2 p-3 rounded-2xl duration-300`}>
        <HiOutlineLightBulb className="text-2xl mx-auto" />
        <h1 className="text-center capitalize">skill</h1>
      </div>
      <div
        onClick={e => setActiveBtn("language")}

        className={`${
          activeBtn === "language"
            ? "bg-blue-500 text-white"
            : "md:hover:bg-gray-200"
        } cursor-pointer  mt-1 mb-2 p-3 rounded-2xl duration-300`}>
        <MdOutlineLanguage className="text-2xl mx-auto" />
        <h1 className="text-center capitalize">language</h1>
      </div>

    </div>
  )
}

export default NavBar
