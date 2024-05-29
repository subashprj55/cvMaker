import React from 'react'
import { Link } from 'react-router-dom'

const CvButton = ({ name, link }) => {
  return (
    <Link to={link}>
      <button className="capitalize text-lg rounded-xl py-2 px-6 bg-blue-600 text-white hover:bg-blue-700 mt-10">
        {name}
      </button>
    </Link>
  )
}

export default CvButton
