import React from 'react'
import {useParams} from 'react-router-dom'
import jobs from '../../Public/message.json'
import { Link } from 'react-router-dom';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import rupees from '../Assets/rupees.png';
import { ImCalendar } from "react-icons/im";
import { IoHome } from "react-icons/io5";

const imgurl= "https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1704219829366-277175250.png&w=256&q=75";


const JobDetails = () => {
    const {id} = useParams();
    const found = jobs.find (job => job.id === parseInt(id));
       console.log(found);
    const {companyName,jobTitle,availablePositions,requirements,companyLogo,minPrice,url,maxPrice,salaryType,jobLocation,responsibilities,postingDate,employmentType,description}= found;

    

     return (<>
        <div className="max-w-4xl p-8 bg-white shadow-md w-[85%]  mx-auto mt-7   border-2  border-Primary rounded-lg">
  <div className="flex justify-between items-center mb-4">
    <div>
      <h1 className="text-3xl font-bold text-Text/90 ">{jobTitle}</h1>
      
      <div className="flex items-center space-x-2 text-Text/60 ">
        <img src={imgurl} alt="Company Logo" className="w-[72px] h-[72px] rounded-full" />
        <span>{companyName}</span>
        <span>•</span>
        <span>{jobLocation}</span>
      </div>
        <div className='text-Text/70 text-base flex flex-cols gap-2 mb-2'>
            <span className='flex bg-Primary/85 p-2 rounded-lg items-center gap-2'><FaMapLocationDot/>{jobLocation}</span>
            <span className='flex bg-Primary/85 p-2 rounded-lg items-center gap-2'><FaRegClock/>{employmentType}</span>
            <span className='flex bg-Primary/85 p-2 rounded-lg items-center gap-2'><img src={rupees} alt="" className='w-[16px] h-[16px]'/>{minPrice}-{maxPrice}</span>
            <span className='flex bg-Primary/85 p-2 rounded-lg items-center gap-2'><ImCalendar/>{postingDate}</span>
        </div>
        <div className='text-Text/70 text-base flex flex-cols gap-2 mb-2'>
            <span className='flex bg-Primary/85 p-2 rounded-lg items-center gap-2'>Vacancies: {availablePositions} </span>
        </div>
     
    </div>
    <div className='inline '>
    <Link to="/home"><IoHome className='text-Primary w-6 h-6 mx-auto'/></Link>
    <a href={url} className="relative inline-block text-lg  pt-4 group" >
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">Apply Now </span>
        </span>
        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
      </a>
    </div>
  </div>
  <div className="mb-4">
    <h2 className="text-xl font-semibold text-Text/90  ">About this role</h2>
    <p className="text-Text/70  ">
      {description}
    </p>
  </div>
  <div className="mb-4">
    <h2 className="text-xl font-semibold text-Text/90  ">Requirements</h2>
    <p className='text-Text/70'>{requirements}</p>
  </div>
  <div className="mb-4">
    <h2 className="text-xl font-semibold text-Text/90  ">Responsibility</h2>
   <p className='text-Text/70'>{responsibilities}</p>
  </div>
</div>
        </>
        )}

export default JobDetails

{/* <div className='w-[80%]  mx-auto mt-7 bg-white shadow-sm border-2 px-2 border-Primary rounded-lg'>
            <h1 className='text-Text text-2xl font-bold text-left '>{jobTitle}</h1>
            <div className=''>
            <span className=''>
                <img src={url} alt='' className='w-[100px] h-[100px] rounded-full'/>
                <h2 className='text-Text/70 text-lg font-semibold '> {companyName}</h2>
            </span>
                <div className='text-Text/70 text-base flex flex-cols gap-2 mb-2'>
                        <span className='flex items-center gap-2'><FaMapLocationDot/>{jobLocation}</span>
                        <span className='flex items-center gap-2'><FaRegClock/>{employmentType}</span>
                        <span className='flex items-center gap-2'><img src={rupees} alt="" className='w-[16px] h-[16px]'/>{minPrice}-{maxPrice}k</span>
                        <span className='flex items-center gap-2'><ImCalendar/>{postingDate}</span>
                    </div>
            </div>
        </div> */}
{/* <div className='bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
            
            
            <p>IMG</p>
            <div className='flex'>
                <p className='text-Text text-2xl font-bold '>{jobTitle}</p>
                <p className='text-Text/70 text-lg font-semibold'>{companyName}</p>
            </div>
    <div>JobDetails : {id} 
    <p>Job Title: {jobTitle}</p>
    <p>Company Name: {companyName}</p></div>
    </div> */}