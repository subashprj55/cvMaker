import React from 'react'
import ExperienceInfo from '../Template/ExperienceInfo'
import LanguageInfo from '../Template/LanguageInfo'
import ProjectInfo from '../Template/ProjectInfo'
import SkillsInfo from '../Template/SkillsInfo'
import { useSelector } from 'react-redux'
import { MdBlurCircular } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { MdOutlineLocationOn } from 'react-icons/md'
import EducationInfo from './EducationInfo'
import parse from 'html-react-parser'

const Paper3 = () => {
  const basicInfoData = useSelector((event) => event.basicInfo)

  return (
    <div>
      <div className="bg-white block w-[21cm] h-auto mx-auto pt-10 py-6">
        <div>
          <h1 className="text-center capitalize font-medium">
            {basicInfoData.professionalTitle}
          </h1>
          <div className="mx-36 mb-7 text-center">
            {parse(basicInfoData.summary)}
          </div>
          <h1 className="bg-sky-300 pl-6 pb-5 font-medium  capitalize text-3xl">
            {basicInfoData.firstName}
          </h1>
        </div>
        <div className="flex">
          <div className="w-1/3 pl-2 bg-gray-100 h-auto">
            <div className="mx-4 my-2">
              <h1 className="font-medium flex items-center gap-1">
                {basicInfoData.phone ? <BsPhone /> : ''}Phone
              </h1>
              <p>{basicInfoData.phone}</p>
              <h1 className="font-medium flex items-center gap-1">
                {basicInfoData.email ? <GoMail /> : ''}Gmail
              </h1>
              <p>{basicInfoData.email}</p>
              <h1 className="font-medium flex items-center gap-1">
                {basicInfoData.address ? <MdOutlineLocationOn /> : ''}Location
              </h1>
              <p>
                {basicInfoData.address} {basicInfoData.city}
              </p>
              <h1 className="font-medium flex items-center gap-1">
                {basicInfoData.website ? <MdBlurCircular /> : ''}Webside
              </h1>
              <p> {basicInfoData.website}</p>
            </div>
            <SkillsInfo />
            <LanguageInfo />
          </div>
          <div className="w-full">
            <EducationInfo />
            <ExperienceInfo />
            <ProjectInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paper3
