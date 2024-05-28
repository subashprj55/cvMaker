import React from "react";
import { useSelector } from "react-redux";

function ExperienceInfo() {
  const experienceData = useSelector((event) => event.experienceData);

  return (
    <div className="mx-4 py-3">
      {experienceData[0].jobTitle ? (
        <>
          <h3 className="text-xl font-medium">Experience</h3>
          <p className="mt-2 border-b-4 border-slate-300"></p>
          {experienceData.map((item, i) => {
            return (
              <div key={i} className="py-1">
                <h4 className="text-lg capitalize">
                  <span className="font-semibold ">- </span>
                  {item.companyName}
                </h4>
                <address className="text-sm capitalize ml-2">
                  {item.location}
                </address>
                <div className="flex justify-between ">
                  <h5 className="text-lg capitalize m-2">{item.jobTitle}</h5>
                  <p className="text-sm">
                    {item.startDate} - {item.endDate}
                  </p>
                </div>
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

export default ExperienceInfo;
