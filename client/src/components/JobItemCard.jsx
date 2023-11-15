import React from "react";
import { AvatarGenerator } from "random-avatar-generator";

const JobItemCard = ({ job }) => {
  const genAvatarWithSeed = () => {
    const generator = new AvatarGenerator();
    const logo = generator.generateRandomAvatar();
    return logo;
  };
  return (
    <div className="group flex flex-col h-fit bg-white rounded-xl p-6 mb-6 hover:scale-95 hover:shadow-md hover:shadow-gray-400 hover:bg-red-400 hover:text-white">
      <div className="flex items-center mb-4">
        <img
          src={genAvatarWithSeed()}
          alt="logo"
          className="rounded-md h-20 overflow-hidden me-6"
        />
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p className="text-xl font-bold">{job.company_name}</p>
            <p className="md:hidden text-lg text-gray-400 group-hover:text-white">
              {job.time_posted}
            </p>
          </div>
          <p className="text-lg text-slate-400 group-hover:text-white">
            {job.address}
          </p>
        </div>
      </div>
      <p className="text-lg text-slate-400 mb-4 group-hover:text-white">
        {job.job_title}
      </p>
      <div className="flex justify-center w-full">
        <div className="flex md:w-3/4">
          <div className="text-lg text-blue-700 font-bold bg-blue-100 p-1 rounded-md me-6 md:w-1/4 min-w-fit text-center">
            {job.job_type}
          </div>
          <div className="text-lg text-red-700 font-bold bg-red-100 p-1 rounded-md me-6 md:w-1/4 min-w-fit text-center">
            {job.experience}
          </div>
          <div className="text-lg text-green-700 font-bold bg-green-100 p-1 rounded-md md:w-1/4 min-w-fit text-center">
            {job.location}
          </div>
        </div>
        <div className="hidden md:flex text-lg text-gray-400 md:w-1/4 min-w-fit justify-end items-center group-hover:text-white">
          {job.time_posted}
        </div>
      </div>
    </div>
  );
};

export default JobItemCard;
