import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema({
    company_name: String,
    overview: String,
    job_desc: String,
    eligibility: String,
    exp_yr: String,
    salary: String,
    bg_img: String,
    job_title: String,
    job_type: String,
    location: String,
    experience: String,
    time_posted:String,
    address: String
});

const jobs = mongoose.model("job", jobsSchema);
export default jobs;

