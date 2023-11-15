import React, { useState } from "react";
import TopQueryBox from "../components/TopQueryBox";
import JobItemCard from "../components/JobItemCard";
import { jobs } from "../data";
import Job from "../components/Job";
import { useNavigate } from "react-router-dom";
const JobsPage = () => {
  const [job, setJob] = useState(jobs[0]);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full w-full bg-slate-200 px-8 pt-16">
      <TopQueryBox />
      <h1 className="my-14 text-2xl">Available Jobs: ({jobs.length})</h1>
      <div className="flex w-full min-h-screen">
        <div className="flex flex-col w-full xl:w-1/3 min-h-fit me-16">
          {jobs.map((item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  if (window.innerWidth < 1280) {
                    // go to job page
                    navigate(`/job/${idx}`);
                  } else {
                    setJob(jobs[idx]);
                  }

                  console.log(window.innerWidth);
                }}
              >
                <JobItemCard job={item} />
              </div>
            );
          })}
        </div>

        <div className="hidden xl:block h-full w-2/3 bg-white rounded-xl rounded-b-none overflow-auto">
          {/* // Start of Component */}
          {job !== null ? <Job job={job} /> : <div></div>}
        </div>
      </div>
    </div>
  );
};
export default JobsPage;
