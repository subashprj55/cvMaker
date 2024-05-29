import React from 'react'
import { SideBarData } from './data'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const pathName = window.location.pathname
  return (
    <div className="border-r-2 border-gray-400 py-2 w-auto px-1">
      {SideBarData.map(({ id, name, icon: Icon, link }) => {
        return (
          <Link to={link} key={id}>
            <div
              className={`${
                pathName === link
                  ? 'bg-blue-500 text-white'
                  : 'md:hover:bg-gray-200'
              } capitalize cursor-pointer  mb-2 p-3 rounded-lg duration-300`}
            >
              <Icon className="text-2xl mx-auto" />
              <h1 className="text-center capitalize">{name}</h1>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default NavBar
