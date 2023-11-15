import React from "react";

const TopQueryBox = () => {
  return (
    <form id="search" className="flex w-full min-h-fit rounded-lg bg-white">
      <input
        id="title"
        className="w-2/3 text-lg md:border-r-2 md:border-gray-200 p-3 md:p-6 focus:outline-none  md:text-2xl md:w-1/5 rounded-lg rounded-e-none"
        placeholder="Title"
      />
      <input
        id="location"
        className="hidden md:inline border-r-2 border-gray-200 p-6 focus:outline-none  text-2xl w-1/5"
        placeholder="Location"
      />
      <input
        id="job-type"
        className="hidden md:inline border-r-2 border-gray-200 p-6 focus:outline-none  text-2xl w-1/5"
        placeholder="Job Type"
      />
      <input
        id="salary"
        className="hidden md:inline p-6 focus:outline-none  text-2xl w-1/5"
        placeholder="Salary Range"
      />
      <button
        type="submit"
        className="rounded-lg w-1/3 text-lg md:text-3xl text-white bg-red-400 hover:scale-105 hover:shadow-md hover:shadow-red-500 md:w-1/5 text-center"
      >
        Find Job
      </button>
    </form>
  );
};

export default TopQueryBox;
