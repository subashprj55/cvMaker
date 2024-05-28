import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserInfo } from "./fetchData";

const Nav = () => {
  const [userData, setUserData] = useState("");

  const fetchData = async (id) => {
    const userInfo = await getUserInfo(id);
    setUserData(userInfo);
  };

  const handelLogOut = () => {
    localStorage.removeItem("userId");
    window.location.reload();
  };

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userId"));
    if (id) {
      fetchData(id);
    }
  }, []);
  return (
    <>
      <nav className="w-full bg-[#06536f] text-[#DDE8F0] ">
        <div className="flex justify-between items-center px-[5%;] py-2">
          <h2 className="text-3xl">
            <Link to="/">Smart CV</Link>
          </h2>
          <ul className="w-auto flex justify-between gap-10 cursor-pointer text-xl">
            {userData ? (
              <>
                <li onClick={handelLogOut} className="px-2">
                  <Link to="/"> LogOut</Link>
                </li>
                <li className="px-2 capitalize text-white">{`${userData.userName} ${userData.lastName}`}</li>
              </>
            ) : (
              <>
                <li className="px-2">
                  <Link to="/login"> Login</Link>
                </li>
                <li className="px-2">
                  <Link to="/signUp"> Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
