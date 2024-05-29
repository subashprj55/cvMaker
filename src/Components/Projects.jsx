import React, { useEffect } from "react";
import Project from "./Project";
import { addProject } from "../reducers/PSLSlice";
import { useDispatch } from "react-redux";
const Projects = ({ setActiveBtn, scrollTop }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    scrollTop();
  }, [scrollTop]);
  return (
    <div className="w-full bg-gray-100 p-5">
      <h1 className="text-4xl text-blue-500 font-bold mb-10 capitalize">
        your projects
      </h1>
      <div className="pb-10 border-b-2 border-gray-400">
        <Project />
      </div>
      <div
        className="mt-5 flex content-center"
        onClick={() => dispatch(addProject())}
      >
        <p className="capitalize text-blue-400 text-xl  cursor-pointer">
          <span className="text-3xl">+</span>add project
        </p>
      </div>

      <button
        onClick={(e) => {
          setActiveBtn("skill");
        }}
        className="capitalize text-lg rounded-xl py-2 px-6 bg-sky-600 text-white hover:bg-sky-700 mt-10"
      >
        Continue to Skill
      </button>
    </div>
  );
};

export default Projects;
