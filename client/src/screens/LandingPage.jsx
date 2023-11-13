import React from "react";
import Search from "../components/Search";
import Category from "../components/Category";
import Footer from "../components/Footer";
const LandingPage = () =>{
    return(
        <div className="bg-slate-200 min-w-full px-8 pb-4">
            <div className="h-fit flex flex-col md:flex-row" >
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

            <div className="h-fit flex flex-col md:flex-row" >
                <div className="w-full md:w-1/2 flex flex-col">
                    <img src="/assets/jobseeker2.png" alt="seeker.img" className=" h-full w-full mx-auto"/>
                </div>
                <div className="w-full md:w-1/2 h-fit flex flex-col pt-10">
                    <h1 className="text-5xl md:text-8xl font-bold track-wider mb-4">Your <span className=" text-red-400 h-fit w-fit">Future </span>Begins Now</h1>
                    <p className="text-xl md:text-2xl font-semibold text-gray-700">Discover Exciting Career Opportunities at Your Fingertips.</p>
                </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mt-10 mb-6 text-center">Browse Popular <span className="text-red-400">Categories</span></h1>
            <Category />
            <hr className="border border-slate-500 mt-8 w-2/3 mx-auto" />
            <Footer />
        </div>
    )
}
export default LandingPage;