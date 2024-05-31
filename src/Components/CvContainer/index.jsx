import React from 'react'

const CvContainer = ({ children, space = true }) => {
  return (
    <div className="flex justify-center">
      <div className={`max-w-[1500px;] w-full ${space ? 'mx-[5%]' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default CvContainer
