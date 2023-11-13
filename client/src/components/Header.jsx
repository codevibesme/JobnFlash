import React from "react";

const Header = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between w-full p-8 pb-0 bg-slate-200">
            <div className="w-fit mb-6 md:mb-0 mx-auto md:mx-0">
                <h1 className="font-bold font-sans text-5xl md:text-6xl"> <span className="text-red-400">j</span>obsy</h1>
            </div>
            <div className="flex md:flex-row flex-col ">
                <h1 className="text-2xl me-2 md:me-6 font-bold hover:text-red-400 hover:scale-105 cursor-pointer md:flex md:items-end">Home</h1>
                <h1 className="text-2xl me-2 md:me-6 font-bold hover:text-red-400 hover:scale-105 cursor-pointer md:flex md:items-end">Category</h1>
                <h1 className="text-2xl me-2 md:me-6 font-bold hover:text-red-400 hover:scale-105 cursor-pointer md:flex md:items-end">Post a job</h1>
                <h1 className="text-2xl me-2 md:me-6 font-bold hover:text-red-400 hover:scale-105 cursor-pointer md:flex md:items-end">Contact</h1>
                <button className="w-fit text-xl me-2 md:me-6 font-bold text-white bg-red-400 hover:scale-105 cursor-pointer p-1 px-2 rounded-lg">Login / Sign up</button>

            </div>
        </div>
    )
}

export default Header;