import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";

// type FormFields = {
//     firstName:string;
//     lastName:string;
//     email:string;
//     phone:string;
//     currentCompany:string;
//     resumeCV:string;
//     bio:string;
//     jobTitle:string;
//     workExperience:string;
//     jobTypes:string;
//     jobLocation:string;
//     remoteWorking:boolean;
//     linkedinUrl:string;
//     twitterUrl:string;
//     githubUrl:string;
//     portfolioUrl:string;
//     otherWebsite:string;
// };

const SignUp1 = () => {
  const navigate = useNavigate();
  let id=100;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit =async (data) => {
    console.log(data);
    const formData = new FormData();
    data.remoteWorking = data.remoteWorking ? "Yes" : "No";
    data.firstname= data.firstname? data.firstname : `User${id}`;
    data.lastname = data.lastname? data.lastname : "";
    data.email = data.email? data.email : `email${id}@gmail.com`;
    data.phone = data.phone? data.phone : (9999999999);
    data.currentCompany = data.currentCompany? data.currentCompany : "None";
    data.resumeCV = data.resumeCV? data.resumeCV : "None";
    data.bio = data.bio? data.bio : "None";
    data.jobTitle = data.jobTitle? data.jobTitle : "None";
    data.workExperience = data.workExperience? data.workExperience : "None";
    data.jobTypes = data.jobTypes? data.jobTypes : "None";
    data.jobLocation = data.jobLocation? data.jobLocation : "None";
    data.linkedinUrl = data.linkedinUrl? data.linkedinUrl : "None";
    data.twitterUrl = data.twitterUrl? data.twitterUrl : "None";
    data.githubUrl = data.githubUrl? data.githubUrl : "None";
    data.portfolioUrl = data.portfolioUrl? data.portfolioUrl : "None";
    data.otherWebsite = data.otherWebsite? data.otherWebsite : "None";

    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    //    formData.append("password", );
    formData.append("phone", data.phone);
    formData.append("currentCompany", data.currentCompany);
    formData.append("resumeCV", data.resumeCV[0]);
    formData.append("bio", data.bio);
    formData.append("jobTitle", data.jobTitle);
    formData.append("workExperience", data.workExperience);
    formData.append("jobTypes", data.jobTypes);
    formData.append("jobLocation", data.jobLocation);
    formData.append("remoteWorking", data.remoteWorking);
    formData.append("linkedinUrl", data.linkedinUrl);
    formData.append("twitterUrl", data.twitterUrl);
    formData.append("githubUrl", data.githubUrl);
    formData.append("portfolioUrl", data.portfolioUrl);
    formData.append("otherWebsite", data.otherWebsite);
    await axios.post("/user/signup", formData, {
      headers: {
      }
    }
    ).then((res) => {
      console.log(res);
      navigate("/login");
    }
    ).catch((err) => {
      console.log(err);
      navigate("/sign-up");
    });
  };


  return (
    <>
      <div className="max-w-4xl px-4 pt-10 sm:px-6 lg:px-8 lg:py-14 m-4 mx-auto w-full p-4 rounded-[15px] shadow sm:p-8 mt-7 bg-white border-4 border-Primary  text-Text ">
        <div className="bg-white rounded-xl shadow p-4 sm:p-7 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200  ">
              <div className="sm:col-span-12">
                <h2 className="text-3xl text-center font-extrabold text-Text  ">
                  Complete Registration
                </h2>
              </div>

              <div className="sm:col-span-3 ">
                <label
                  className="inline-block text-sm font-medium text-Text mt-2.5  "
                >
                  Full name
                </label>
              </div>

              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    {...register("firstname", { required: true })}
                    id="firstname"
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    placeholder="First"
                  />
                  {errors.firstname && (
                    <span className="text-red-500 ">
                      This field is required
                    </span>
                  )}
                  <input
                    {...register("lastname")}
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                    placeholder="Last"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm font-medium text-Text mt-2.5  "
                >
                  Email
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  "
                  placeholder="abcd@example.com"
                />
              </div>

              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label
                    className="inline-block text-sm font-medium text-Text mt-2.5  "
                  >
                    Phone
                  </label>
                </div>
              </div>

              <div className="sm:col-span-9">
                <input
                  {...register("phone")}
                  id=" phone"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                  placeholder="+977----------"
                />
              </div>

              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label
                    className="inline-block text-sm font-medium text-Text mt-2.5  "
                  >
                    Current Company
                  </label>
                </div>
              </div>

              <div className="sm:col-span-9">
                <input
                  {...register("currentCompany")}
                  id=" current-company"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200  ">
              <div className="sm:col-span-12">
                <h2 className="text-lg font-semibold text-Text  ">Profile</h2>
              </div>

              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm font-medium text-Text mt-2.5  "
                >
                  Resume/CV
                </label>
              </div>

              <div className="sm:col-span-9 border-[0.5px] border-Primary">
                <label
                  className="sr-only"
                >
                  Choose file
                </label>
                <input
                  {...register("resumeCV")
                  }
                  type="file"
                  name="resume-cv"
                  id=" resume-cv"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
            file:bg-gray-50 file:border-0 file:me-4
            file:py-2 file:px-4 "
                />
              </div>

              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label
                    className="inline-block text-sm font-medium text-Text mt-2.5  "
                  >
                    Personal Summary
                  </label>
                </div>
              </div>

              <div className="sm:col-span-9">
                <textarea
                  {...register("bio")}
                  id=" bio"
                  className="py-2 px-3 block w-full border-2 border-Primary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  rows="6"
                  placeholder="Add a cover letter or anything else you want to share."
                ></textarea>
              </div>
            </div>

            <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200  ">
              <div className="sm:col-span-12">
                <h2 className="text-lg font-semibold text-Text  ">
                  Work Experience
                </h2>
              </div>

              <div className="col-span-3 ">
                <label
                  className="block text-sm font-medium text-Text mt-2.5 row-span-3  "
                >
                  What is your current Job Title?
                </label>
              </div>

              <div className="sm:col-span-9">
                <select
                  {...register("jobTitle")}
                  name=""
                  id="relevance1"
                  className="bg-white rounded-[3px] px-4 py-1"
                >
                  <option value="Freelancer">Freelancer</option>
                  <option value="Student">Student</option>
                  <option value="Jobless">Jobless</option>
                  <option value="Developer">Developer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm font-medium text-Text mt-2.5  "
                >
                  Work Experience
                </label>
              </div>

              <div className="sm:col-span-9">
                <select
                  {...register("workExperience")}
                  name=""
                  id="relevance2"
                  className="bg-white rounded-[3px] px-4 py-1"
                >
                  <option value="Less than 1 Year">Less than 1 Year</option>
                  <option value="2 Years">2 Years</option>
                  <option value="3 Years">3 Years</option>
                  <option value="4 Years">4 Years</option>
                  <option value="5 Years">5 Years</option>
                  <option value="6 Years">6 Years</option>
                  <option value="7 Years">7 Years</option>
                  <option value="8 Years">8 Years</option>
                  <option value="9 Years">9 Years</option>
                  <option value="10 Years">10 Years</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200  ">
              <div className="sm:col-span-12">
                <h2 className="text-lg font-semibold text-Text  ">
                  Before creating your Account, please let us know...
                </h2>
              </div>

              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm font-medium text-Text mt-2.5  "
                >
                  What kind of Jobs are you looking for?
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  {...register("jobTypes")}
                  id="job-types"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                />
              </div>

              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm font-medium text-Text mt-2.5  "
                >
                  Job Location
                </label>
              </div>

              <div className="sm:col-span-9">
                <select
                  {...register("jobLocation")}
                  name=""
                  id="relevance3"
                  className="bg-white rounded-[3px] px-4 py-1"
                >
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Lalitpur">Lalitpur</option>
                  <option value="Bhaktapur">Bhaktapur</option>
                  <option value="Dhulikhel">Dhulikhel</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mt-5 col-span-9">
                <input
                  {...register("remoteWorking")}
                  type="checkbox"
                  className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  id=" privacy-check"
                />
                <label
                  className=" text-sm font-medium text-bold text-Text ms-2  "
                >
                  Select option for Remote Working
                </label>
              </div>
            </div>

            <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200  ">
              <div className="sm:col-span-12">
                <h2 className="text-lg font-semibold text-Text  ">Links</h2>
              </div>

              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm font-medium text-Text mt-2.5  "
                >
                  LinkedIn URL
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  {...register("linkedinUrl")}
                  id=" linkedin-url"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                />
              </div>

              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm font-medium text-Text mt-2.5  "
                >
                  Twitter URL
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  {...register("twitterUrl")}
                  id=" twitter-url"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                />
              </div>

              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm font-medium text-Text mt-2.5  "
                >
                  Github URL
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  {...register("githubUrl")}
                  id=" github-url"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                />
              </div>

              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm font-medium text-Text mt-2.5  "
                >
                  Portfolio URL
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  {...register("portfolioUrl")}
                  id=" portfolio-url"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                />
              </div>

              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm font-medium text-Text mt-2.5  "
                >
                  Other website
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  {...register("otherWebsite")}
                  id=" other-website"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="relative rounded px-5 py-2.5 overflow-hidden group bg-Primary  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Complete Sign Up</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp1;
