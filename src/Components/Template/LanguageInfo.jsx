import React from "react";
import { useSelector } from "react-redux";
import RatingInfo from "./RatingInfo";

const LanguageInfo = () => {
  const PSRData = useSelector((event) => event.PSRData);
  const languageData = PSRData.language;
  return (
    <div className="mx-4 py-3">
      {languageData[0].language ? (
        <>
          <h3 className="font-medium text-xl">Languages</h3>
          <p className="mt-2 border-b-4 border-slate-300"></p>

          {languageData.map((item, i) => {
            return (
              <div key={i} className="flex justify-between mb-1">
                <h4 className="capitalize text-lg">{item.language}</h4>
                <RatingInfo rating={item.languageRating} />
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

export default LanguageInfo;
