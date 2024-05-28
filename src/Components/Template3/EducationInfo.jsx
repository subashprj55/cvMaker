import React from "react";
import { useSelector } from "react-redux";

const EducationInfo = () => {
  const educationData = useSelector((event) => event.educationData);

  return (
    <div className="mx-4 py-3">
      {educationData[0].courseName ? (
        <div>
          <h3 className="font-medium text-xl">Education</h3>
          <p className="mt-2 border-b-4 border-slate-300"></p>
          {educationData.map((item, i) => {
            return (
              <div key={i} className="text-lg py-1">
                <h4 className="capitalize">{item.courseName}</h4>
                <address className="text-sm capitalize">
                  {item.startDate} - {item.endDate}
                </address>

                <div className="">
                  <p className="capitalize text-base text-blue-600">
                    {item.institutionName}
                  </p>
                </div>
                <address className="text-sm">{item.collageAddress}</address>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EducationInfo;
