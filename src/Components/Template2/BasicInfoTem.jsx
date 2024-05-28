import React from "react";
import { useSelector } from "react-redux";
import { MdBlurCircular } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { MdOutlineLocationOn } from "react-icons/md";
import parse from "html-react-parser";

const BasicInfoTem = () => {
  const basicInfoData = useSelector((event) => event.basicInfo);

  return (
    <>
      <div className="p-3 flex px-4">
        <div className="w-1/2 ml-3">
          <h1 className="text-7xl capitalize flex ">
            {basicInfoData.firstName}
          </h1>
          <h1 className="text-teal-700 text-[22px] pt-2 capitalize">
            {basicInfoData.professionalTitle}
          </h1>
        </div>
        <div className="mx-3 w-1/2">
          <h1 className="font-medium flex items-center gap-1">
            {basicInfoData.phone ? <BsPhone /> : ""}Phone
          </h1>
          <p>{basicInfoData.phone}</p>
          <p className="mt-2 border border-slate-300"></p>
          <h1 className="font-medium flex items-center gap-1">
            {basicInfoData.email ? <GoMail /> : ""}Gmail
          </h1>
          <p>{basicInfoData.email}</p>
          <p className="mt-2 border border-slate-300"></p>
          <h1 className="font-medium flex items-center gap-1">
            {basicInfoData.address ? <MdOutlineLocationOn /> : ""}Location
          </h1>
          <p>
            {basicInfoData.address} {basicInfoData.city}
          </p>
          <p className="mt-2 border border-slate-300"></p>
          <h1 className="font-medium flex items-center gap-1">
            {basicInfoData.website ? <MdBlurCircular /> : ""}Webside
          </h1>
          <p> {basicInfoData.website}</p>
          <p className="mt-2 border border-slate-300"></p>
        </div>
      </div>
      {basicInfoData.summary ? (
        <div className="mx-4">
          <h3 className="font-medium">Summary</h3>
          <p className="border-b-4 mt-2 border-slate-300"></p>
          <div className="py-1 text-sm ">{parse(basicInfoData.summary)}</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BasicInfoTem;
