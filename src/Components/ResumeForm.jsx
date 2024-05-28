import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import NavBar from "./NavBar";
import Educations from "./Educations";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Languages from "./Languages";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getData } from "./fetchData";
import { useDispatch } from "react-redux";
import { setBasicInfo } from "../reducers/basicInfoSlice";
import { getEducation } from "../reducers/educationSlice";
import { getExperience } from "../reducers/experienceSlice";
import { getAllData } from "../reducers/PSLSlice";
import Paper from "./Template/Paper";
import Paper2 from "./Template2/Paper2";
import Paper3 from "./Template3/Paper3";

const ResumeForm = () => {
  const [slideCount, setSliderCount] = useState(1);
  const dispatch = useDispatch();

  const [id, setId] = useState(useParams().id);

  useEffect(() => {
    const count = JSON.parse(localStorage.getItem("slideCount"));
    if (count) {
      setSliderCount(count);
    }
  }, []);

  const handelTemplateButton = (page) => {
    setSliderCount(page);
    localStorage.setItem("slideCount", page);
  };

  useEffect(() => {
    let dbName = "basicInfo";
    getData(dispatch, id, setBasicInfo, dbName);
    dbName = "education";
    getData(dispatch, id, getEducation, dbName);
    dbName = "experience";
    getData(dispatch, id, getExperience, dbName);
    dbName = "psl";
    getData(dispatch, id, getAllData, dbName);
  }, [id, dispatch]);

  const [activeBtn, setActiveBtn] = useState("about");
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Nav />
      <div className="flex">
        <NavBar activeBtn={activeBtn} setActiveBtn={setActiveBtn} />

        {activeBtn === "about" ? (
          <BasicInfo setActiveBtn={setActiveBtn} scrollTop={scrollTop} />
        ) : (
          ""
        )}
        {activeBtn === "education" ? (
          <Educations setActiveBtn={setActiveBtn} scrollTop={scrollTop} />
        ) : (
          ""
        )}
        {activeBtn === "experience" ? (
          <Experiences setActiveBtn={setActiveBtn} scrollTop={scrollTop} />
        ) : (
          ""
        )}
        {activeBtn === "project" ? (
          <Projects setActiveBtn={setActiveBtn} scrollTop={scrollTop} />
        ) : (
          ""
        )}
        {activeBtn === "skill" ? (
          <Skills setActiveBtn={setActiveBtn} scrollTop={scrollTop} />
        ) : (
          ""
        )}

        {activeBtn === "language" ? (
          <Languages setActiveBtn={setActiveBtn} scrollTop={scrollTop} />
        ) : (
          ""
        )}
        <div className="w-auto ">
          <div className="flex justify-between bg-gray-700 p-2 text-xl px-4">
            <p
              onClick={() => handelTemplateButton(1)}
              className={`  w-auto cursor-pointer ${
                slideCount === 1 ? "text-white" : "text-gray-200"
              }`}
            >
              Template 1
            </p>
            <p
              onClick={() => handelTemplateButton(2)}
              className={`  w-auto cursor-pointer ${
                slideCount === 2 ? "text-white" : "text-gray-200"
              }`}
            >
              Template 2
            </p>
            <p
              onClick={() => handelTemplateButton(3)}
              className={`  w-auto cursor-pointer ${
                slideCount === 3 ? "text-white" : "text-gray-200"
              }`}
            >
              Template 3
            </p>
          </div>
          <div>
            {slideCount === 1 ? <Paper /> : ""}
            {slideCount === 2 ? <Paper2 /> : ""}
            {slideCount === 3 ? <Paper3 /> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeForm;
