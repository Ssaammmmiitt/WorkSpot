// import React from 'react'
// import {useParams} from 'react-router-dom'
// import jobs from '../../Public/jobListings.json'
// import { Link } from 'react-router-dom';
// import { FaMapLocationDot } from "react-icons/fa6";
// import { FaRegClock } from "react-icons/fa";
// import rupees from '../Assets/rupees.png';
// import { ImCalendar } from "react-icons/im";
// import { IoHome } from "react-icons/io5";
// import { BsFillPeopleFill } from "react-icons/bs";
// import Swal from 'sweetalert2'


// const JobDetails = () => {
//     const {id} = useParams();
//     const found = jobs.find (job => job.id === parseInt(id));
//        console.log(found);
//     const {companyName,jobTitle,jobCategory,availablePositions,requirements,sector,image,expires,minPrice,url,maxPrice,salaryType,jobLocation,responsibilities,created,employmentType,description,experienceLevel}= found;
 
//     const redirect = (url) => {
//       Swal.fire({
//           title: 'Do you want to apply to the job',
//           text: "You will be redirected to the application page.",
//           icon: 'info',
//           showCancelButton: true,
//           confirmButtonColor: '#008a8a',
//           cancelButtonColor: '#d33',
//           confirmButtonText: 'Yes, apply now!'
//       }).then((result) => {
//           if (result.isConfirmed) {
//               window.location.assign(url);
//           }
//       });
//   }


//      return (<>
//         <div className="max-w-4xl p-8 bg-white shadow-md w-[85%]  mx-auto mt-7   border-2  border-Primary rounded-lg">
//   <div className="flex justify-between items-center mb-4">
//     <div>
//       <h1 className="text-3xl font-bold text-Text/90 ">{jobTitle}</h1>
      
//       <div className="flex items-center space-x-2 text-Text/60 ">
//         <img src={image} alt="Company Logo" className="w-[96px] h-[96px] rounded-full" />
//         <span>{companyName}</span>
//         <span>•</span>
//         <span>{jobLocation}</span>
//       </div>
//         <div className='text-Text/70 text-base flex flex-cols gap-2 mb-2'>
//             <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><FaMapLocationDot/>{jobLocation}</span>
//             <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><FaRegClock/>{employmentType}</span>
//             <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><img src={rupees} alt="" className='w-[16px] h-[16px]'/>{minPrice}-{maxPrice}</span>
//         </div>
//         <div className='text-Text/70 text-base flex flex-cols gap-2 mb-2'>
//             <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><BsFillPeopleFill/>Vacancies: {availablePositions} </span>
//             <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><ImCalendar/>{created}</span>
//         </div>
     
//     </div>
//     <div className='inline '>
//     <Link to="/home"><IoHome className='text-Primary w-6 h-6 mx-auto'/></Link>
//     <button className="relative inline-block text-lg  pt-4 group" onClick={() => redirect(url)}>
//         <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//             <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//         <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//         <span className="relative">Apply Now </span>
//         </span>
//         <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
//       </button>
//     </div>
//   </div>
//   <div className="mb-4">
//     <h2 className="text-xl font-semibold text-Text/90  ">Job Details</h2>
//     {
//         (sector!=undefined)?(<p className="text-Text/70">
//         Sector: {sector}</p>):(<></>)
//     }
//      <p className="text-Text/70  ">
//         Job Category: {jobCategory}
//     </p>
//     <p className="text-Text/70  ">
//         Experience Level: {experienceLevel}
//     </p>
//     <p className="text-Text/70  ">
//         Posted on: {created}
//     </p>
//     <p className="text-Text/70  ">
//         Expires on:<span className='text-[#ff0000]'> {expires} </span>
//     </p>
//     <p className="text-Text/70  ">
//         Salary Type : {salaryType}
//     </p>
//   </div>
//   <div className="mb-4">
//     <h2 className="text-xl font-semibold text-Text/90  ">About this role</h2>
//     <div 
//         className='text-Text/70'
//         dangerouslySetInnerHTML={{ __html: description }}
//     ></div>
//   </div>
//   <div className="mb-4">
//     <h2 className="text-xl font-semibold text-Text/90  ">Requirements</h2>
//     <div 
//         className='text-Text/70'
//         dangerouslySetInnerHTML={{ __html: requirements }}
//     ></div>
//   </div>
 
//   {
//     (responsibilities!=undefined)?(<div className="mb-4">
//     <h2 className="text-xl font-semibold text-Text/90  ">Responsibility</h2>
//     <div
//         className='text-Text/70'
//         dangerouslySetInnerHTML={{ __html: responsibilities }}
//       ></div>
//   </div>):(<></>)
//   }
  
// </div>
//         </>
//         )}

// export default JobDetails


import React from 'react'
import { useParams } from 'react-router-dom'
import jobs from '../../Public/jobListings.json'
import { Link } from 'react-router-dom';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import rupees from '../Assets/rupees.png';
import { ImCalendar } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import Swal from 'sweetalert2'


const JobDetails = () => {
    const { id } = useParams();
    const found = jobs.find(job => job.id === parseInt(id));
    console.log(found);
    const { companyName, jobTitle, jobCategory, availablePositions, requirements, sector, image, expires, minPrice, url, maxPrice, salaryType, jobLocation, responsibilities, created, employmentType, description, experienceLevel } = found;

    const redirect = (url) => {
        Swal.fire({
            title: 'Do you want to apply to the job',
            text: "You will be redirected to the application page.",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#008a8a',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, apply now!'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.assign(url);
            }
        });
    }

    return (
        <>
            <div className="max-w-4xl p-8 bg-white shadow-md w-[85%] mx-auto mt-7 border-2 border-Primary rounded-lg flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-Text/90">{jobTitle}</h1>
                        <div className="flex items-center space-x-2 text-Text/60">
                            <img src={image} alt="Company Logo" className="w-[96px] h-[96px] rounded-full" />
                            <span>{companyName}</span>
                            <span>•</span>
                            <span>{jobLocation}</span>
                        </div>
                        <div className='text-Text/70 text-base flex flex-cols gap-2 mb-2'>
                            <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><FaMapLocationDot />{jobLocation}</span>
                            <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><FaRegClock />{employmentType}</span>
                            <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><img src={rupees} alt="" className='w-[16px] h-[16px]' />{minPrice}-{maxPrice}</span>
                        </div>
                        <div className='text-Text/70 text-base flex flex-cols gap-2 mb-2'>
                            <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><BsFillPeopleFill />Vacancies: {availablePositions} </span>
                            <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><ImCalendar />{created}</span>
                        </div>
                    </div>
                    <div className='hidden md:inline'>
                   
                        <Link to="/home"><IoHome className='text-Primary w-6 h-6 mx-auto' /></Link>
                        <button className="px-6 py-2 mt-2 mx-auto font-medium bg-Primary text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"  onClick={() => redirect(url)}>
                          Apply Now
                          </button> 
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-Text/90">Job Details</h2>
                    {sector && <p className="text-Text/70">Sector: {sector}</p>}
                    <p className="text-Text/70">Job Category: {jobCategory}</p>
                    <p className="text-Text/70">Experience Level: {experienceLevel}</p>
                    <p className="text-Text/70">Posted on: {created}</p>
                    <p className="text-Text/70">Expires on:<span className='text-[#ff0000]'> {expires} </span></p>
                    <p className="text-Text/70">Salary Type : {salaryType}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-Text/90">About this role</h2>
                    <div className='text-Text/70' dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-Text/90">Requirements</h2>
                    <div className='text-Text/70' dangerouslySetInnerHTML={{ __html: requirements }}></div>
                </div>
                {responsibilities && (
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-Text/90">Responsibility</h2>
                        <div className='text-Text/70' dangerouslySetInnerHTML={{ __html: responsibilities }}></div>
                    </div>
                )}
                <div className="flex flex-col md:hidden mt-auto">
                    <Link to="/"><IoHome className='text-Primary w-6 h-6 mx-auto' /></Link>
                    <button className="px-6 py-2 mt-2 mx-auto font-medium bg-Primary text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"  onClick={() => redirect(url)}>
                          Apply Now
                          </button> 
                </div>
            </div>
        </>
    )
}

export default JobDetails
