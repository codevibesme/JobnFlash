import React from "react";
import Search from "../components/Search";
const LandingPage = () =>{
    return(
        <div className=" bg-slate-200 h-fit w-screen flex flex-col px-8 md:flex-row pb-8" >
            <div className="w-full md:w-1/2 h-fit flex flex-col pt-10">
                <h1 className="text-5xl md:text-8xl font-bold track-wider mb-4">Find Your Dream <span className=" text-red-400 h-fit w-fit">Job</span></h1>
                <p className="text-xl md:text-2xl font-semibold text-gray-700">Get yourself exposed to thousands of jobs at our platform, suited to your qualifications. New job postings everyday!</p>
                <div className=" hidden md:block">
                    <Search />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
                <img src="/assets/jobseeker.png" alt="seeker.img" className=" h-full w-full mx-auto"/>
                <div className=" block md:hidden">
                    <Search />
                </div>
            </div>
        </div>
    )
}
export default LandingPage;