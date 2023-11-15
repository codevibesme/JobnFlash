import React from "react";

const Footer = () => {
  return (
    <div className="w-full min-h-fit py-6 bg-slate-200">
      <hr className="border border-slate-500 mt-4 mb-8 w-2/3 mx-auto" />

      <h1 className="font-bold font-sans text-3xl md:text-4xl text-center mb-6">
        {" "}
        <span className="text-red-400">j</span>obsy
      </h1>
      <div className="flex flex-col">
        <div className="w-1/3 mx-auto text-lg md:text-xl">
          <h1 className="text-center">
            Copyright{"  "}&copy;{"  "}Jobsy, Inc.{" "}
          </h1>
        </div>
        <div className="flex mx-auto md:w-1/3 md:mx-auto text-center text-xl mt-6 cursor-pointer justify-center">
          <h1 className="text-lg md:text-2xl text-slate-600 hover:text-black hover:underline me-4 md:me-4">
            Legal{" "}
          </h1>
          <h1 className="text-lg md:text-2xl text-slate-600 hover:text-black hover:underline me-4 md:me-4">
            Privacy{" "}
          </h1>
          <h1 className="text-lg md:text-2xl text-slate-600 hover:text-black hover:underline me-4 md:me-4">
            Security
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Footer;
