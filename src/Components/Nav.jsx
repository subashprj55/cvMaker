import { Link, useNavigate } from 'react-router-dom'
import CvContainer from './CvContainer'
import { FaBars } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import { useState } from 'react'
import { SideBarData } from './HorizontalNavBar/data'

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNavButton = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      <nav
        className={`${
          isNavOpen ? 'fixed' : ''
        } w-full bg-gray-600 text-[#DDE8F0]`}
      >
        <CvContainer>
          <div className="flex justify-between items-center py-2">
            <h2 className="text-2xl md:text-3xl">
              <Link to="/">Smart CV</Link>
            </h2>
            <ul className="w-auto hidden md:flex justify-between gap-4 md:gap-10 cursor-pointer md:text-xl">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signUp">Register</Link>
              </li>
            </ul>
            <div className="md:hidden">
              {isNavOpen ? (
                <IoCloseSharp className="text-2xl" onClick={handleNavButton} />
              ) : (
                <FaBars className="text-xl" onClick={handleNavButton} />
              )}
            </div>
          </div>
        </CvContainer>
      </nav>
      <SideNavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  )
}

export default Nav

const SideNavBar = ({ isNavOpen, setIsNavOpen }) => {
  const navigate = useNavigate()
  const pathName = window.location.pathname

  const handleClick = (link) => {
    setIsNavOpen(false)
    navigate(link)
  }

  return (
    <div
      className={`lg:hidden fixed top-12 left-0 w-screen h-screen bg-white z-50 transition-transform duration-200 ${
        isNavOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {SideBarData.map(({ id, name, icon: Icon, link }) => (
        <div
          key={id}
          onClick={() => handleClick(link)}
          className={`${
            pathName === link ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
          } capitalize cursor-pointer mb-2 p-3 transition-colors duration-300 flex items-center gap-3`}
        >
          <Icon className="text-lg" />
          <h1 className="capitalize">{name}</h1>
        </div>
      ))}
    </div>
  )
}
