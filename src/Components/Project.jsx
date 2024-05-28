import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, editProject } from "../reducers/PSLSlice";

const Project = () => {
  const data = useSelector((event) => event.PSRData);

  const dispatch = useDispatch();

  return data.project.map((item, i) => (
    <div className="mb-5" key={i}>
      <div className="mb-5">
        <div className="flex gap-[33%]">
          <h1 className="text-lg capitalize mb-1">project name </h1>
          {i === 0 ? (
            ""
          ) : (
            <MdDelete
              className="text-2xl cursor-pointer"
              onClick={() => dispatch(deleteProject({ i }))}
            />
          )}
        </div>
        <input
          value={item.projectName}
          onChange={(e) => {
            const text = e.target.value;
            dispatch(editProject({ index: i, text, id: "projectName" }));
          }}
          type="text"
          className="w-full rounded-lg px-2 py-2 font-medium  tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
        />
      </div>
      <div className="mb-5">
        <h1 className="text-lg capitalize mb-1">description</h1>

        {/* need to change input file to text-editor  */}

        <textarea
          value={item.description}
          onChange={(e) => {
            const text = e.target.value;
            dispatch(editProject({ index: i, text, id: "description" }));
          }}
          required
          type="text"
          rows="4"
          className="resize-none w-full rounded-lg px-2 py-2 font-medium  text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
        />

        {/* ///////////////// */}
      </div>
      <div className="">
        <h1 className="text-lg capitalize mb-1">Link</h1>
        <input
          value={item.link}
          onChange={(e) => {
            const text = e.target.value;
            dispatch(editProject({ index: i, text, id: "link" }));
          }}
          type="text"
          className="w-full rounded-lg px-2 py-2 font-medium  tracking-wide text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
        />
      </div>
    </div>
  ));
};

export default Project;
