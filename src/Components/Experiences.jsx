import React, { useEffect } from "react";
import Experience from "./Experience";
import { useDispatch, useSelector } from "react-redux";
import { getExperience } from "../reducers/experienceSlice";
import { createExperienceDB, getData, updateExperience } from "./fetchData";
import { useParams } from "react-router-dom";

const Experiences = ({ setActiveBtn, scrollTop }) => {
  const experienceData = useSelector((event) => event.experienceData);

  const dispatch = useDispatch();
  const id = useParams().id;

  useEffect(() => {
    scrollTop();
  }, [scrollTop]);

  return (
    <div className="w-full bg-gray-200 p-5">
      <h1 className="text-4xl text-blue-600 font-bold mb-10 capitalize">
        experience
      </h1>
      <div className="pb-10 border-b-2 border-gray-400">
        <Experience id={id} />
      </div>
      <div
        className="mt-5 flex content-center"
        onClick={async () => {
          await updateExperience(experienceData);
          await createExperienceDB(id);
          const dbName = "experience";
          await getData(dispatch, id, getExperience, dbName);
        }}
      >
        <p className="capitalize text-blue-400 text-xl  cursor-pointer">
          <span className="text-3xl">+</span>add employment
        </p>
      </div>
      <button
        onClick={(e) => {
          setActiveBtn("project");
        }}
        className="capitalize text-lg rounded-xl py-2 px-6 bg-blue-600 text-white hover:bg-blue-700 mt-10"
      >
        Continue to Project
      </button>
    </div>
  );
};

export default Experiences;
