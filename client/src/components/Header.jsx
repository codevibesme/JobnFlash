import React, { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AvatarGenerator } from "random-avatar-generator";
import { setIsLoggedIn, setToken, setUser } from "../slices/authSlice";
const Header = () => {
  const IsLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const [showMenu, setShowMenu] = useState("hidden");
  const [showProfileMenu, setShowProfileMenu] = useState("hidden");
  const dispatch = useDispatch();

  const genAvatarWithSeed = () => {
    const generator = new AvatarGenerator();
    const logo = generator.generateRandomAvatar(user._id);
    console.log(logo);
    return logo;
  };

  const handleLogout = () => {
    dispatch(setIsLoggedIn({ flag: false }));
    dispatch(setToken({ token: "" }));
    dispatch(setUser({ user: null }));
  };
  useEffect(() => {
    console.log(IsLoggedIn);
  }, [IsLoggedIn]);
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
        {!IsLoggedIn ? (
          <button className="w-fit text-lg me-2 md:me-6 font-bold text-white bg-red-400 hover:scale-105 cursor-pointer hover:shadow-md hover:shadow-red-500 p-1 px-2  rounded-lg md:flex md:items-end">
            Login / Sign up
          </button>
        ) : (
          <div className="flex flex-col bg-red-400 rounded-lg hover:scale-105">
            <div className="flex w-fit p-2 items-center hover:border-2 hover:border-black rounded-lg">
              <div className="rounded-full h-12 w-12 me-2 overflow-hidden">
                <img
                  src={genAvatarWithSeed()}
                  className="h-12 w-12 "
                  alt="prof"
                />
              </div>
              <p className="text-xl text-white font-bold hover:text-black">
                {user.name}
              </p>
              <button
                className="text-white text-xl ms-2 font-bold tracking-widest hover:text-black"
                onClick={() =>
                  showProfileMenu === "hidden"
                    ? setShowProfileMenu("flex")
                    : setShowProfileMenu("hidden")
                }
              >
                ˅
              </button>
            </div>
            <div
              className={`${showProfileMenu} flex-col text-xl font-bold text-white p-2`}
            >
              <h1 className="hover:text-black">Profile</h1>
              <hr className="mb-1" />
              <h1 className="hover:text-black" onClick={() => handleLogout()}>
                Logout
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
