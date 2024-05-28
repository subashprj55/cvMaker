import React, { useEffect } from "react";
import Education from "./Education";
import { getEducation } from "../reducers/educationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createEducationDB, getData, updateEducation } from "./fetchData";

const Educations = ({ setActiveBtn, scrollTop }) => {
  const educationData = useSelector((event) => event.educationData);
  console.log(educationData);

  const id = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    scrollTop();
  }, [scrollTop]);

  return (
    <div className="w-full bg-gray-100 p-5">
      <h1 className="text-4xl text-blue-600 font-bold mb-10 capitalize">
        education
      </h1>
      <div className=" pb-10 border-b-2 border-gray-400">
        <Education id={id} />
      </div>
      <div
        className="mt-5 flex content-center"
        onClick={async () => {
          await updateEducation(educationData);
          await createEducationDB(id);
          const dbName = "education";
          await getData(dispatch, id, getEducation, dbName);
        }}
      >
        <p className="capitalize text-blue-400 text-xl  cursor-pointer">
          <span className="text-3xl">+</span>add education
        </p>
      </div>
      <button
        onClick={(e) => {
          setActiveBtn("experience");
        }}
        className="capitalize text-lg rounded-xl py-2 px-6 bg-blue-600 text-white hover:bg-blue-700 mt-10"
      >
        Continue to Experience
      </button>
    </div>
  );
};

export default Educations;
