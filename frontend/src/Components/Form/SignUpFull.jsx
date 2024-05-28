import React from "react"

const SignUp1 =()=>{
    return (
        <>
<div className="max-w-4xl px-4 pt-10 sm:px-6 lg:px-8 lg:py-14 m-4 mx-auto">
  <div className="bg-white rounded-xl shadow p-4 sm:p-7 ">
    <form>
        
      <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200  ">
        <div className="sm:col-span-12">
          <h2 className="text-3xl text-center font-extrabold text-Text  ">
            Complete Registration
          </h2>
        </div>

        <div className="sm:col-span-3 ">
          <label for="af-submit-application-full-name" className="inline-block text-sm font-medium text-Text mt-2.5  ">
            Full name
          </label>
        </div>

        <div className="sm:col-span-9">
          <div className="sm:flex">
            <input id="af-submit-application-full-name" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="First"/>
            <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    " placeholder="Last"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label for="af-submit-application-email" className="inline-block text-sm font-medium text-Text mt-2.5  ">
            Email
          </label>
        </div>

        <div className="sm:col-span-9">
          <input id="af-submit-application-email" type="email" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  " placeholder="abcd@example.com"/>
        </div>


        <div className="sm:col-span-3">
          <div className="inline-block">
            <label for="af-submit-application-phone" className="inline-block text-sm font-medium text-Text mt-2.5  ">
              Phone
            </label>
          </div>
        </div>
          

        <div className="sm:col-span-9">
          <input id="af-submit-application-phone" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    " placeholder="+977----------"/>

          <p className="mt-3">
            <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium " href="../docs/index.html">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
              Add phone
            </a>
          </p>
        </div>

        <div className="sm:col-span-3">
          <div className="inline-block">
            <label for="af-submit-application-current-company" className="inline-block text-sm font-medium text-Text mt-2.5  ">
              Current Company
            </label>
          </div>
        </div>

        <div className="sm:col-span-9">
          <input id="af-submit-application-current-company" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "/>
        </div>
          
      </div>


      <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200  ">
        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold text-Text  ">
            Profile
          </h2>
        </div>


        <div className="sm:col-span-3">
          <label for="af-submit-application-resume-cv" className="inline-block text-sm font-medium text-Text mt-2.5  ">
            Resume/CV
          </label>
        </div>


        <div className="sm:col-span-9 border-[0.5px] border-Primary">
          <label for="af-submit-application-resume-cv" className="sr-only">Choose file</label>
          <input type="file" name="af-submit-application-resume-cv" id="af-submit-application-resume-cv" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
            file:bg-gray-50 file:border-0
            file:bg-gray-100 file:me-4
            file:py-2 file:px-4 "/>
        </div>
            

        <div className="sm:col-span-3">
          <div className="inline-block">
            <label for="af-submit-application-bio" className="inline-block text-sm font-medium text-Text mt-2.5  ">
              Personal Summary
            </label>
          </div>
        </div>
            

        <div className="sm:col-span-9">
          <textarea id="af-submit-application-bio" className="py-2 px-3 block w-full border-2 border-Primary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " rows="6" placeholder="Add a cover letter or anything else you want to share."></textarea>
        </div>
            
      </div>
       
      <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200  ">
        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold text-Text  ">
            Work Experience
          </h2>
        </div>
            

        <div className="col-span-3 ">
          <label for="af-submit-application-desired-salary" className="block text-sm font-medium text-Text mt-2.5 row-span-3  ">
            What is your current Job Title?
          </label>
        </div>
            

        <div className="sm:col-span-9">
        <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1' >

        <option value="">Freelancer</option>
        <option value="">Student</option>
        <option value="">Jobless</option>
        <option value="">Developer</option>
        </select>  
                  
        </div>
            

        <div className="sm:col-span-3">
          <label for="af-submit-application-available-start-date" className="inline-block text-sm font-medium text-Text mt-2.5  ">
            Work Experience
          </label>
        </div>
            

        <div className="sm:col-span-9">
          <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1' >

            <option value="">Less than 1 Year</option>
            <option value="">2 Years</option>
            <option value="">3 Years</option>
            <option value="">4 Years</option>
            <option value="">5 Years</option>
            <option value="">6 Years</option>
            <option value="">7 Years</option>
            <option value="">8 Years</option>
            <option value="">9 Years</option>
            <option value="">10 Years</option>
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
          <label for="af-submit-application-desired-salary" className="inline-block text-sm font-medium text-Text mt-2.5  ">
            What kind of Jobs are you looking for?
          </label>
        </div>
            
        <div className="sm:col-span-9">
          <input id="job-types" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "/>
        </div>        
            

        <div className="sm:col-span-3">
          <label for="job-location" className="inline-block text-sm font-medium text-Text mt-2.5  ">
            Job Location
          </label>
        </div>
            
        <div className="sm:col-span-9">
          <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1' >

          <option value="">Kathmandu</option>
          <option value="">Lalitpur</option>
          <option value="">Bhaktapur</option>
          <option value="">Dhulikhel</option>
          </select>  
        </div>

        
            
        <div className="mt-5 col-span-9">
          <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " id="af-submit-application-privacy-check"/>
          <label for="af-submit-application-privacy-check" className=" text-sm font-medium text-bold text-Text ms-2  ">Select option for Remote Working</label>
        </div>

      </div>

      <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200  ">
        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold text-Text  ">
            Links
          </h2>
        </div>
            

        <div className="sm:col-span-3">
          <label for="af-submit-application-linkedin-url" className="inline-block text-sm font-medium text-Text mt-2.5  ">
            LinkedIn URL
          </label>
        </div>
            

        <div className="sm:col-span-9">
          <input id="af-submit-application-linkedin-url" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "/>
        </div>
            

        <div className="sm:col-span-3">
          <label for="af-submit-application-twitter-url" className="inline-block text-sm font-medium text-Text mt-2.5  ">
            Twitter URL
          </label>
        </div>
            

        <div className="sm:col-span-9">
          <input id="af-submit-application-twitter-url" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "/>
        </div>
            

        <div className="sm:col-span-3">
          <label for="af-submit-application-github-url" className="inline-block text-sm font-medium text-Text mt-2.5  ">
            Github URL
          </label>
        </div>
            

        <div className="sm:col-span-9">
          <input id="af-submit-application-github-url" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "/>
        </div>
            

        <div className="sm:col-span-3">
          <label for="af-submit-application-portfolio-url" className="inline-block text-sm font-medium text-Text mt-2.5  ">
            Portfolio URL
          </label>
        </div>
            

        <div className="sm:col-span-9">
          <input id="af-submit-application-portfolio-url" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "/>
        </div>
            

        <div className="sm:col-span-3">
          <label for="af-submit-application-other-website" className="inline-block text-sm font-medium text-Text mt-2.5  ">
            Other website
          </label>
        </div>
            

        <div className="sm:col-span-9">
          <input id="af-submit-application-other-website" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none    "/>
        </div>
            

        <div className="sm:col-start-4 sm:col-span-8">
          <a className="inline-flex items-center gap-x-1 text-sm text-Primary decoration-2 hover:underline font-medium " href="../docs/index.html">
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
            Add URL
          </a>
        </div>
      </div>
        
      <div className="flex justify-center">
        <button href="#_" class="relative rounded px-5 py-2.5 overflow-hidden group bg-Primary  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span class="relative">Complete Sign Up</span>
        </button>
      </div>
      
    </form>
  </div>

</div>
</>
)
}

export default SignUp1

