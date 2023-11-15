import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
const Header = () => {
  const [showMenu, setShowMenu] = useState("hidden");
  return (
    <div className="flex md:flex-row flex-col justify-between w-full p-8 pb-0 bg-slate-200 cursor-pointer">
      <div className="md:w-fit mb-6 md:mb-0 md:mx-0 flex justify-between w-2/3">
        <button
          onClick={() =>
            showMenu === "hidden" ? setShowMenu("") : setShowMenu("hidden")
          }
        >
          <IoMenuOutline className="text-4xl md:hidden" />{" "}
        </button>
        <h1 className="font-bold font-sans text-3xl md:text-4xl">
          {" "}
          <span className="text-red-400">j</span>obsy
        </h1>
      </div>
      <div className={`${showMenu} md:flex md:flex-row flex-col `}>
        <h1 className="text-2xl mb-2 md:me-6 md:mb-0 font-bold hover:text-red-400 hover:scale-105 cursor-pointer md:flex md:items-end">
          Home
        </h1>
        <h1 className="text-2xl mb-2 md:me-6 md:mb-0 font-bold hover:text-red-400 hover:scale-105 cursor-pointer md:flex md:items-end">
          Categories
        </h1>
        <h1 className="text-2xl mb-2 md:me-6 md:mb-0 font-bold hover:text-red-400 hover:scale-105 cursor-pointer md:flex md:items-end">
          All Jobs
        </h1>
        <h1 className="text-2xl mb-2 md:me-6 md:mb-0 font-bold hover:text-red-400 hover:scale-105 cursor-pointer md:flex md:items-end">
          Contact
        </h1>
        <button className="w-fit text-lg me-2 md:me-6 font-bold text-white bg-red-400 hover:scale-105 cursor-pointer hover:shadow-md hover:shadow-red-500 p-1 px-2  rounded-lg md:flex md:items-end">
          Login / Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
