import React, { useEffect, useState } from "react";
import { Preview, print } from "react-html2pdf";
import Paper from "./Template/Paper";
import Paper2 from "./Template2/Paper2";
import Paper3 from "./Template3/Paper3";

const PFD = () => {
  const [slideCount, setSlideCount] = useState(1);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("slideCount"));
    if (data) {
      setSlideCount(data);
    }
    console.log(data);
  }, []);

  return (
    <>
      <Preview id={"jsx-template"}>
        {slideCount === 1 ? <Paper /> : ""}
        {slideCount === 2 ? <Paper2 /> : ""}
        {slideCount === 3 ? <Paper3 /> : ""}
      </Preview>
      <div className="relative mt-10 mb-36">
        <button
          className="absolute right-20 capitalize text-lg rounded-xl py-2 px-6 bg-sky-600 text-white hover:bg-sky-700 "
          onClick={() => print("document", "jsx-template")}
        >
          Download your cv
        </button>
      </div>
    </>
  );
};

export default PFD;
