import React from "react";
import StarRating from "./StarRating";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteLanguge, editLanguage } from "../reducers/PSLSlice";

const Language = () => {
  const data = useSelector((event) => event.PSRData);
  const dispatch = useDispatch();

  return data.language.map((item, i) => (
    <div className="mb-5" key={i}>
      <div className="">
        <div className="flex gap-[33%]">
          <h1 className="text-lg capitalize mb-1">language </h1>
          {i === 0 ? (
            ""
          ) : (
            <MdDelete
              className="text-2xl cursor-pointer"
              onClick={() => dispatch(deleteLanguge({ i }))}
            />
          )}
        </div>
        <div className="flex gap-3">
          <input
            value={item.language}
            onChange={(e) => {
              const text = e.target.value;
              dispatch(editLanguage({ index: i, text, id: "language" }));
            }}
            type="text"
            className=" w-8/12 rounded-lg px-2 py-2 font-semibold tracking-wide text-xl focus:outline-none focus:ring-sky-500 focus:ring-1"
          />
          <StarRating
            rating={item.languageRating}
            index={i}
            editFunction={editLanguage}
            fieldName={"languageRating"}
          />
        </div>
      </div>
    </div>
  ));
};

export default Language;
