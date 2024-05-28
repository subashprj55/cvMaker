import React from "react";
import { useEffect } from "react";

const Alert = ({ message, setMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, setMessage]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-auto flex justify-center z-50 duration-700`}
    >
      <div className="bg-red-500 py-4 px-4 rounded-lg shadow-lg">
        <h1 className="text-lg">{message}</h1>
      </div>
    </div>
  );
};

export default Alert;
