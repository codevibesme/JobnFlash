import React from "react";
import { useParams, useNavigate } from "react-router";
import { jobs } from "../data";
import { IoArrowBackOutline } from "react-icons/io5";
const JobPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //   const {id} = jobs[id];
  const job = jobs[id];
  //   useEffect(() => {
  //     console.log(params);
  //   }, []); // eslint-disable-line
  return (
    <div className="bg-slate-200 p-10">
      {job && (
        <div className="flex flex-col h-screen w-full overflow-auto bg-white rounded-xl rounded-b-none">
          <div className={`relative h-2/4 w-full`}>
            <div className="h-4/5 w-full rounded-xl rounded-b-none">
              <img
                src="https://t3.ftcdn.net/jpg/05/79/48/52/360_F_579485255_hzHox0stuQmBx5QViwnQqQjk7RD2AJza.jpg"
                alt="bg"
                className="h-full w-full rounded-xl rounded-b-none"
              />
              <div className="absolute h-20 w-20 md:h-24 md:w-24 rounded-md bottom-5 left-5">
                <img
                  src="https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=White&clotheType=Hoodie&eyeType=Wink&eyebrowType=UpDownNatural&facialHairColor=BrownDark&facialHairType=BeardMedium&hairColor=SilverGray&hatColor=Heather&mouthType=Smile&skinColor=Tanned&topType=LongHairBigHair"
                  alt="company"
                  className="h-24 w-24 rounded-md"
                />
              </div>
              <button className="absolute bg-red-400 text-xl text-white font-bold rounded-md hover:scale-105 hover:shadow-md hover:shadow-red-500 p-2 bottom-5 right-5">
                Apply Now
              </button>
              <button
                onClick={() => navigate("/jobs")}
                className="absolute top-5 left-5 rounded-lg text-4xl text-white bg-red-400 p-2 hover:scale-105 hover:shadow-md hover:shadow-red-500"
              >
                <IoArrowBackOutline />
              </button>
            </div>
          </div>

          <div className="px-10 flex flex-col">
            <h1 className="mb-2 text-4xl font-bold">{job.job_title}</h1>

            <div className="flex justify-between mb-6">
              <h1 className="text-lg text-gray-400">{job.location}</h1>
              <h1 className="text-lg text-gray-400">{job.time_posted}</h1>
            </div>

            <div className="flex flex-col mb-6 border border-gray-500 rounded-md w-full">
              <div className="flex p-2 border-b border-b-gray-500 w-full items-center">
                <div className="w-1/2">
                  <h1 className="text-lg text-gray-500 mb-2">Experience</h1>
                </div>
                <div className="w-1/2">
                  <h1 className="text-lg text-gray-500 text-center">
                    {job.exp_yr}
                  </h1>
                </div>
              </div>
              <div className="flex p-2 border-b border-b-gray-500 w-full items-center">
                <div className="w-1/2">
                  <h1 className="text-lg text-gray-500 mb-2">Work Level</h1>
                </div>
                <div className="w-1/2">
                  <h1 className="text-lg text-gray-500 text-center">
                    {job.experience}
                  </h1>
                </div>
              </div>
              <div className="flex p-2 border-b border-b-gray-500 w-full items-center">
                <div className="w-1/2">
                  <h1 className="text-lg text-gray-500 mb-2">Job Type</h1>
                </div>
                <div className="w-1/2">
                  <h1 className="text-lg text-gray-500 text-center">
                    {job.job_type}
                  </h1>
                </div>
              </div>
              <div className="flex p-2 border-b border-b-gray-500 w-full items-center">
                <div className="w-1/2">
                  <h1 className="text-lg text-gray-500 mb-2">Salary</h1>
                </div>
                <div className="w-1/2">
                  <h1 className="text-lg text-gray-500 text-center">
                    Rs. {job.salary} p.m
                  </h1>
                </div>
              </div>
            </div>
            <h1 className="font-bold text-3xl mb-4">Overview</h1>
            <p className="text-lg mb-6">{job.overview}</p>

            <h1 className="font-bold text-3xl mb-4">Job Description</h1>
            <p className="text-lg mb-6">{job.job_desc}</p>

            <h1 className="font-bold text-3xl mb-4">Qualifications</h1>
            <p className="text-lg mb-6">{job.eligibility}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPage;
