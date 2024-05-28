import React from "react"
import Nav from "./Nav"
import cvpng from "../img/cvpng.png"
import darts from "../img/darts.png"
import Footer from "../Components/Footer"
import { teams } from "../utils/Data"

const AboutUs = () => {
  return (
    <>
      <Nav />
      <div className="mx-32 mt-20 mb-10 flex justify-between">
        <p className="max-w-2xl text-5xl font-light">
          “Our mission is help to create professional and responsive CV for
          free. We love helping people stand out in their job search and get
          hired faster.”
        </p>
        <img src={cvpng} alt="" className="-mt-5 w-1/3 h-1/3 " />
      </div>
      <div className="flex mx-32 my-32">
        <img src={darts} alt="" className="" />
        <p className=" text-xl mb-10">
          In this modern society people are unable to get job because of bad
          representation and unprofessional CV. So, we are hoping to build a
          websites where anybody can make their own professional and attractive
          CV with a simple click. We will be providing our users many templates
          to choose from. Users can create their CV selecting from different
          choices. They can choose the templates as they want. We will be
          providing different fields of option to choose. Users can choose the
          templates as their field of work. So, our main goal is to make a
          simple websites where users can create their own CV with a simple
          click for free.
        </p>
      </div>
      <div className="px-10">
        <h1 className="font-semibold text-3xl pl-24 text-center">
          Meet Our Team
        </h1>
        <div className="flex justify-between items-center py-10 px-6">
          {teams.map(team => (
            <div key={team.id} className="shadow-md shadow-green-200 hover:scale-105 hover:bg-[#97CBDC] rounded transition ease-out duration-300 px-4 py-4">
              <img
                className="h-40 w-40 rounded-full object-bottom "
                src={team.img}
                alt="arjun"
              />
              <h2 className="text-lg text-center pt-2">{team.name}</h2>
              <p className="text-base text-center text-gray-500">
                {team.jobTitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AboutUs
