import React from "react";
import { useSelector } from "react-redux";
import RatingInfo from "./RatingInfo";

function SkillsInfo() {
  const PSRData = useSelector((event) => event.PSRData);
  const skillData = PSRData.skill;

  return (
    <div className="mx-4 py-3">
      {skillData[0].skill ? (
        <>
          <h3 className="font-medium text-xl">Skills</h3>
          <p className="mt-2 border-b-4 border-slate-300"></p>
          {skillData.map((item, i) => {
            return (
              <div key={i} className="flex justify-between mb-1">
                <h4 className="capitalize text-lg">{item.skill}</h4>
                <RatingInfo rating={item.skillRating} />
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
export default SkillsInfo;
