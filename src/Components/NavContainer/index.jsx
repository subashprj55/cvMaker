import React, { useEffect, useState } from 'react'
import NavBar from '../HorizontalNavBar'
import Nav from '../Nav'
import Paper from '../Template/Paper'
import Paper2 from '../Template2/Paper2'
import Paper3 from '../Template3/Paper3'

const NavContainer = ({ children }) => {
  const [cvTemplate, setCvTemplate] = useState(1)

  useEffect(() => {
    const cvTemplateNumber = localStorage.getItem('cvTemplate') * 1
    setCvTemplate(cvTemplateNumber)
  }, [cvTemplate])

  const handelTemplateButton = (templateNumber) => {
    localStorage.setItem('cvTemplate', JSON.stringify(templateNumber))
    setCvTemplate(templateNumber)
  }

  const renderCvFormat = (id) => {
    if (id === 3) {
      return <Paper3 />
    }
    if (id === 2) {
      return <Paper2 />
    }
    return <Paper />
  }
  return (
    <>
      <Nav />
      <div className="flex">
        <NavBar />
        {children}
        <div className="w-auto">
          <div className="flex justify-between bg-gray-700 p-2 text-xl px-4">
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
          {renderCvFormat(cvTemplate)}
        </div>
      </div>
    </>
  )
}

export default NavContainer
