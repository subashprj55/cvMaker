import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";

const StarRating = ({ rating, index, editFunction, fieldName }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-1">
      {Array(5)
        .fill(true)
        .map((data, pos) => (
          <div
            key={pos}
            onClick={(e) =>
              dispatch(editFunction({ index, text: pos + 1, id: fieldName }))
            }
          >
            {/* setRating(index + 1) */}
            {rating > pos ? (
              <AiFillStar className="text-2xl mt-2 cursor-pointer" />
            ) : (
              <AiOutlineStar className="text-2xl mt-2 cursor-pointer" />
            )}
          </div>
        ))}
    </div>
  );
};

export default StarRating;
