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

  return (
    <>
      <Preview id={'jsx-template'}>
        {cvTemplate === 1 ? <Paper /> : ''}
        {cvTemplate === 2 ? <Paper2 /> : ''}
        {cvTemplate === 3 ? <Paper3 /> : ''}
      </Preview>
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
