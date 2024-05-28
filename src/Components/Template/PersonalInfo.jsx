import React from "react";
import { MdBlurCircular } from "react-icons/md";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

const PersonalInfo = () => {
  const basicInfoData = useSelector((event) => event.basicInfo);
  return (
    <div className="w-full mx-4">
      <h1 className="text-[34px] font-medium -mb-2 capitalize">
        {basicInfoData.firstName}
      </h1>
      <p className="text-teal-400 text-[22px] capitalize">
        {basicInfoData.professionalTitle}
      </p>
      <div className="flex gap-6 py-1">
        {basicInfoData.phone ? <span>+977 {basicInfoData.phone}</span> : ""}

        <span>{basicInfoData.email}</span>
        <span className="capitalize">
          {basicInfoData.address} {basicInfoData.city}
        </span>
        <a
          href={`http://${basicInfoData.website}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          {basicInfoData.website ? <MdBlurCircular /> : ""}

          {basicInfoData.website}
        </a>
      </div>
      {basicInfoData.summary ? (
        <div className="w-full">
          <h3 className="font-medium">Summary</h3>
          <p className="border-b-4 border-slate-300"></p>
          <div className="py-1 text-sm ">{parse(basicInfoData.summary)}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PersonalInfo;
