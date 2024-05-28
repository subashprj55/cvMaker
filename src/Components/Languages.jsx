import React, { useEffect } from "react";
import Language from "./Language";
import { useDispatch } from "react-redux";
import {
  updateBasicInfo,
  updateEducation,
  updateExperience,
  updatePSL,
} from "./fetchData";
import { useSelector } from "react-redux";
import { addLanguge } from "../reducers/PSLSlice";
import { useNavigate } from "react-router-dom";

const Languages = ({ scrollTop }) => {
  const navigate = useNavigate();
  const basicInfoData = useSelector((event) => event.basicInfo);
  const educationData = useSelector((event) => event.educationData);
  const experienceData = useSelector((event) => event.experienceData);
  const PSRData = useSelector((event) => event.PSRData);

  const dispatch = useDispatch();

  useEffect(() => {
    scrollTop();
  }, [scrollTop]);
  return (
    <div className="w-full bg-gray-200 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-10 capitalize">
        language
      </h1>
      <div className="pb-10 border-b-2 border-gray-400">
        <Language />
      </div>
      <div
        className="mt-5 flex content-center"
        onClick={() => dispatch(addLanguge())}
      >
        <p className="capitalize text-blue-400 text-xl  cursor-pointer">
          <span className="text-3xl">+</span>add language
        </p>
      </div>

      <button
        onClick={async () => {
          await updateBasicInfo(basicInfoData);
          await updateEducation(educationData);
          await updateExperience(experienceData);
          await updatePSL(PSRData);
          navigate("/preview");
        }}
        className="capitalize text-lg rounded-xl py-2 px-6 bg-sky-600 text-white hover:bg-sky-700 mt-10"
      >
        PreView
      </button>
    </div>
  );
};

export default Languages;
