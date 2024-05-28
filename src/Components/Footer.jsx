import React from "react"
//
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-[#06536f] py-6 text-[#DDE8F0]">
      <div className="flex justify-around items-start capitalize text-lg border-b-2 border-gray-300 py-5 px-6">
        <div className="flex-1 text-center">logo</div>
        <div className="flex items-start justify-between flex-1">
          <div>
          <h2 className="text-xl font-semibold pb-1">Service</h2>
            <ul className="text-gray-200">
              <li className="cursor-pointer hover:text-white duration-200">
                <Link to={"/template"}>create CV</Link>
              </li>
              <li className="hover:text-white duration-200 cursor-pointer">
                <Link to={"/template"}>CV Template</Link>
              </li>
              <li className="hover:text-white duration-200 cursor-pointer">
                <Link to={"/aboutus"}>About Us</Link>
              </li>
              <li className="hover:text-white duration-200 cursor-pointer">
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
          </div>
          <div>
          <h2 className="text-xl font-semibold pb-1">Legal Terms</h2>
            <ul className="text-gray-200">
              <li className="cursor-pointer hover:text-white duration-200">
                <Link to="">Privacy Policy</Link>
              </li>
              <li className="hover:text-white duration-200 cursor-pointer">
                <Link to="">Use of Terms</Link>
              </li>
              
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold pb-1">Support</h2>
            <ul className="text-gray-200">
              <li className="cursor-pointer hover:text-white duration-200">
                <Link to="">FAQ</Link>
              </li>
              <li className="hover:text-white duration-200 cursor-pointer">
                <Link to="">Contact Us</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="flex justify-center gap-4 mb-2">
          <FaFacebook className="text-3xl cursor-pointer hover:scale-110 duration-300 rounded-full border border-gray-400" />
          <a
            href="https://github.com/Shivakc7/College-Project"
            rel="noreferrer"
            target="_blank">
            <FaGithub className="text-3xl cursor-pointer hover:scale-110 duration-300 rounded-full border border-gray-400" />
          </a>
          <FaInstagram className="text-3xl cursor-pointer hover:scale-110 duration-300 " />
        </div>
        <div>
          <p className="text-center">
            &#169; 2023 SmartCV. All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
