import React from 'react'
import { Link } from 'react-router-dom';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import rupees from '../../Assets/rupees.png';
import { ImCalendar } from "react-icons/im";


const Card = ({data}) => {

    const {companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,jobLocation,postingDate,employmentType,description}= data;
   
    return (
        <section className='card bg-[#eefffe] hover:bg-green-200 transition-colors duration-300 ease-out delay-120 transform motion-safe:hover:scale-105'>
            <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
                <img src={companyLogo} alt='' />
                <div>
                    <h4 className='text-Text mb-1'>{companyName}</h4>
                    <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
                    <div className='text-Text/70 text-base flex flex-wrap gap-2 mb-2'>
                        <span className='flex items-center gap-2'><FaMapLocationDot/>{jobLocation}</span>
                        <span className='flex items-center gap-2'><FaRegClock/>{employmentType}</span>
                        <span className='flex items-center gap-2'><img src={rupees} alt="" className='w-[16px] h-[16px]'/>{minPrice}-{maxPrice}k</span>
                        <span className='flex items-center gap-2'><ImCalendar/>{postingDate}</span>
                    </div>
                    <p className='text-base text-Text/70'>{description}</p>
                </div>
            </Link>
        </section>
  )
}

export default Card