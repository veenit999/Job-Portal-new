import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Createjobs = () => {
  const[ selectedOption , setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    // console.log(data);
    fetch("http://localhost:8000/post-job" , {
      method : "POST" ,
      headers : {"content-type" : "application/json"},
      body : JSON.stringify(data)
    }).then(res => res.json()).then((result) =>{
      console.log(result)
      if(result.acknowledged === true){
        alert("Job Posted Successfully!")
      }
      reset();
    })

  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 pt-6 pb-6">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* First row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Job Title</label>
              <input
                type="text"
                placeholder="Ex-Developer"
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Company/Issuer Name</label>
              <input
                type="text"
                placeholder="Ex-Veenit"
                {...register("issuer")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* Second row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Salary</label>
              <input
                type="text"
                placeholder="85K-90K"
                {...register("salary")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Job Location</label>
              <input
                type="text"
                placeholder="City,State"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* third row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value="">Choose Experience Level</option>
                <option value="No Experience Req">None</option>
                <option value="3+ Years Experience">More than 3 years</option>
                <option value="5+ Years Experience">More than 5 years</option>
              </select>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value="">Choose Employment Type</option>
                <option value="Hourly">Hourly</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>

          {/* Fourth row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg "> Needed Date</label>
              <input
                type="date"
                placeholder="Ex-01/01/2024"
                {...register("neededdate")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex-01/01/2024"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* Fifth row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Add Image Url</label>
              <input
                type="url"
                placeholder="https://addimage.com/img0001"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Phone Number</label>
              <input
                type="text"
                placeholder="Ex-9988898995"
                {...register("phone")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* Sixth row */}
          <div className="w-full">
            <label className="block mb-2 text-lg ">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              rows={6}
              placeholder=" Concise outline of job duties, responsibilities, and qualifications. "
              {...register("description")}
            />
          </div>

          {/* Last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg ">Job Posted By :-</label>
            <input
                type="email"
                placeholder="Your Email , Ex-Chatwithveenit@gmai.com"
                {...register("postedBy")}
                className="create-job-input"
              />
          </div>





          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Createjobs;
