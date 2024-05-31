import React, { useEffect, useState } from 'react'
import { Preview, print } from 'react-html2pdf'
import Paper from '../Components/Template/Paper'
import Paper2 from '../Components/Template2/Paper2'
import Paper3 from '../Components/Template3/Paper3'

const PreViewPdf = () => {
  const [cvTemplate, setCvTemplate] = useState(1)

  useEffect(() => {
    const cvTemplateNumber = localStorage.getItem('cvTemplate') * 1
    setCvTemplate(cvTemplateNumber)
  }, [cvTemplate])

  const handelTemplateButton = (templateNumber) => {
    console.log(templateNumber)
    localStorage.setItem('cvTemplate', JSON.stringify(templateNumber))
    setCvTemplate(templateNumber)
  }

  return (
    <>
      <div className="w-screen mt-20">
        <Preview id={'jsx-template'}>
          {cvTemplate === 1 ? <Paper /> : ''}
          {cvTemplate === 2 ? <Paper2 /> : ''}
          {cvTemplate === 3 ? <Paper3 /> : ''}
        </Preview>
      </div>
      <div className="flex lg:hidden justify-between bg-gray-700 p-2 text-xl px-4">
        <p
          onClick={() => handelTemplateButton(1)}
          className={`w-auto cursor-pointer ${
            cvTemplate === 1 ? 'text-white' : 'text-gray-400'
          }`}
        >
          Template 1
        </p>
        <p
          onClick={() => handelTemplateButton(2)}
          className={`  w-auto cursor-pointer ${
            cvTemplate === 2 ? 'text-white' : 'text-gray-400'
          }`}
        >
          Template 2
        </p>
        <p
          onClick={() => handelTemplateButton(3)}
          className={`  w-auto cursor-pointer ${
            cvTemplate === 3 ? 'text-white' : 'text-gray-400'
          }`}
        >
          Template 3
        </p>
      </div>
      <div className="relative mt-10 mb-36">
        <button
          className="absolute right-20 capitalize text-lg rounded-xl py-2 px-6 bg-sky-600 text-white hover:bg-sky-700 "
          onClick={() => print('document', 'jsx-template')}
        >
          Download your cv
        </button>
      </div>
    </>
  )
}

export default PreViewPdf
