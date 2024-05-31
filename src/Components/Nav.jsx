import { Link } from 'react-router-dom'
import CvContainer from './CvContainer'

const Nav = () => {
  return (
    <>
      <nav className="w-full bg-gray-600 text-[#DDE8F0] ">
        <CvContainer>
          <div className="flex justify-between items-center py-2">
            <h2 className="text-2xl md:text-3xl">
              <Link to="/">Smart CV</Link>
            </h2>
            <ul className="w-auto flex justify-between gap-4 md:gap-10 cursor-pointer md:text-xl">
              <>
                <li>
                  <Link to="/login"> Login</Link>
                </li>
                <li>
                  <Link to="/signUp"> Register</Link>
                </li>
              </>
            </ul>
          </div>
        </CvContainer>
      </nav>
    </>
  )
}

export default Nav
