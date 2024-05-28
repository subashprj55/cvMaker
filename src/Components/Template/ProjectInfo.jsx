import React from "react";
import { useSelector } from "react-redux";

const ProjectInfo = () => {
  const PSRData = useSelector((event) => event.PSRData);
  const projectDate = PSRData.project;
  return (
    <div className="mx-4 py-3">
      {projectDate[0].projectName ? (
        <>
          <h3 className="text-xl font-medium">Project</h3>
          <p className="mt-2 border-b-4 border-slate-300"></p>
          {projectDate.map((item, i) => {
            return (
              <div key={i} className="py-1">
                <h4 className="text-lg capitalize">{item.projectName}</h4>
                <address className="text-sm">{item.link}</address>
                <div className="flex justify-between ">
                  <p className="text-sm">{item.description}</p>
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
};

export default ProjectInfo;
