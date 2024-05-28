import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const RatingInfo = ({ rating }) => {
  return (
    <div className="flex gap-1 pt-3">
      {Array(5)
        .fill(true)
        .map((data, pos) => (
          <div key={pos}>
            {rating > pos ? (
              <AiFillStar className="text-xl cursor-pointer" />
            ) : (
              <AiOutlineStar className="text-xl cursor-pointer" />
            )}
          </div>
        ))}
    </div>
  );
};

export default RatingInfo;
