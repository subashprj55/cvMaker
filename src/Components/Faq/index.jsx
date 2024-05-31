import React from 'react'
import CvContainer from '../CvContainer'
import { faqData } from './data'

const Faq = () => {
  return (
    <div className="bg-[#DDE8F0] w-full h-auto py-5 md:py-20">
      <CvContainer>
        <div>
          <h1 className="text-4xl text-center ">CV (Curriculum Vitae)</h1>
          <p className="text-center py-2 text-gray-600">
            Frequently Asked Questions and Information
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 py-10 md:px-2">
          {faqData.map(({ id, title, description }) => {
            return (
              <div
                key={id}
                className="container md:w-[70%] bg-white p-10 rounded-md shadow-lg"
              >
                <h3 className="text-base pb-6">{title}</h3>
                <p className="text-gray-500 ">{description}</p>
              </div>
            )
          })}
        </div>
      </CvContainer>
    </div>
  )
}

export default Faq
