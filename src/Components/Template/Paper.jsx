import React from "react";
import ExperienceInfo from "./ExperienceInfo";
import PersonalInfo from "./PersonalInfo";
import SkillsInfo from "./SkillsInfo";
import EducationInfo from "./EducationInfo";
import LanguageInfo from "./LanguageInfo";
import ProjectInfo from "./ProjectInfo";

function Paper() {
  return (
    <>
      <div className="bg-white  w-[21cm] h-auto mx-auto pt-10 py-6">
        <PersonalInfo />
        <div className="flex items-start py-2 gap-6 ">
          <div className="flex-[4]">
            <ExperienceInfo />
            <ProjectInfo />
          </div>
          <div className="flex-[2]">
            <EducationInfo />
            <SkillsInfo />
            <LanguageInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default Paper;
