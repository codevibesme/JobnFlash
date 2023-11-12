import React from "react";

const LandingPage = () =>{
    return(
        <div className=" bg-gradient-to-tr from-gray-200 to-gray-300 h-screen w-screen flex p-20" >
            <div className="w-1/2 h-fit flex flex-col">
                <h1 className="text-8xl font-bold track-wider text-blue-950 mb-4">Find Your Dream <span className=" text-green-900 h-fit w-fit">Job</span></h1>
                <p className="text-2xl font-semibold text-gray-600">Get yourself exposed to thousands of jobs at our platform, suited to your qualifications. New job postings everyday!</p>
            </div>
            <div className="w-1/2">
                <img src="/assets/jobseeker.png" alt="seeker.img" className=" h-4/5"/>
            </div>
        </div>
    )
}
export default LandingPage;