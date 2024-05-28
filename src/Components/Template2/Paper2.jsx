import React from "react";
import EducationInfo from "../Template/EducationInfo";
import ExperienceInfo from "../Template/ExperienceInfo";
import LanguageInfo from "../Template/LanguageInfo";
import ProjectInfo from "../Template/ProjectInfo";
import SkillsInfo from "../Template/SkillsInfo";
import BasicInfoTem from "./BasicInfoTem";

const Paper2 = () => {
  return (
    <div>
      <div className="bg-white block w-[21cm] h-auto mx-auto pt-10 py-6">
        <BasicInfoTem />
        <div className="flex flex-wrap">
          <div className="w-1/2">
            <EducationInfo />
          </div>
          <div className="w-1/2">
            <ExperienceInfo />
          </div>
          <div className="w-1/2">
            <ProjectInfo />
          </div>

          <div className="w-1/2">
            <SkillsInfo />
          </div>
          <div className="w-1/2">
            <LanguageInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paper2;
