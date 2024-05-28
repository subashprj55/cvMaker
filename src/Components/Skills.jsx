import React, { useEffect } from "react";
import Skill from "./Skill";
import { addSkill } from "../reducers/PSLSlice";
import { useDispatch } from "react-redux";

const Skills = ({ setActiveBtn, scrollTop }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    scrollTop();
  }, [scrollTop]);
  //
  return (
    <div className="w-full bg-gray-200 p-5">
      <h1 className="text-4xl text-blue-600 font-bold mb-10 capitalize">
        skill
      </h1>
      <div className="pb-10 border-b-2 border-gray-400">
        <Skill />
      </div>
      <div
        className="mt-5 flex content-center"
        onClick={() => dispatch(addSkill())}
      >
        <p className="capitalize text-blue-400 text-xl  cursor-pointer">
          <span className="text-3xl">+</span>add skill
        </p>
      </div>

      <button
        onClick={(e) => {
          setActiveBtn("language");
        }}
        className="capitalize text-lg rounded-xl py-2 px-6 bg-sky-600 text-white hover:bg-sky-700 mt-10"
      >
        Continue to Language
      </button>
    </div>
  );
};

export default Skills;
