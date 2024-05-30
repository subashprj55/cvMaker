import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="w-full bg-gray-600 text-[#DDE8F0] ">
        <div className="flex justify-between items-center px-[5%;] py-2">
          <h2 className="text-3xl">
            <Link to="/">Smart CV</Link>
          </h2>
          <ul className="w-auto flex justify-between gap-10 cursor-pointer text-xl">
            <>
              <li className="px-2">
                <Link to="/login"> Login</Link>
              </li>
              <li className="px-2">
                <Link to="/signUp"> Register</Link>
              </li>
            </>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
