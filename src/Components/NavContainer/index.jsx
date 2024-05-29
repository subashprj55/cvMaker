import React, { useState } from 'react'
import NavBar from '../HorizontalNavBar'
import Nav from '../Nav'
import Paper from '../Template/Paper'
import Paper2 from '../Template2/Paper2'
import Paper3 from '../Template3/Paper3'

const NavContainer = ({ children }) => {
  const [slideCount, setSliderCount] = useState(1)

  const handelTemplateButton = (page) => {
    setSliderCount(page)
    localStorage.setItem('slideCount', page)
  }

  const renderCvFormat = (id) => {
    if (id === 1) {
      return <Paper />
    }
    if (id === 2) {
      return <Paper2 />
    }
    return <Paper3 />
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
              className={`  w-auto cursor-pointer ${
                slideCount === 1 ? 'text-white' : 'text-gray-200'
              }`}
            >
              Template 1
            </p>
            <p
              onClick={() => handelTemplateButton(2)}
              className={`  w-auto cursor-pointer ${
                slideCount === 2 ? 'text-white' : 'text-gray-200'
              }`}
            >
              Template 2
            </p>
            <p
              onClick={() => handelTemplateButton(3)}
              className={`  w-auto cursor-pointer ${
                slideCount === 3 ? 'text-white' : 'text-gray-200'
              }`}
            >
              Template 3
            </p>
          </div>
          {renderCvFormat(slideCount)}
        </div>
      </div>
    </>
  )
}

export default NavContainer
