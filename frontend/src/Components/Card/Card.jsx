import React from 'react'
import { Link } from 'react-router-dom';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import rupees from '../../Assets/rupees.png';
import { ImCalendar } from "react-icons/im";

const Card = ({ data }) => {

    const { id, companyName, jobTitle, image, companyLogo, minPrice, maxPrice, salaryType, jobLocation, expires, employmentType, frontendDescription } = data;

    return (
        <section className='card bg-[#eefffe] hover:bg-green-200 hover:border-[#000000] rounded-lg transition-colors duration-300 ease-out delay-120 transform motion-safe:hover:scale-105 animate__animated animate__slideInLeft'>
            <Link to={`/app/job/${id}`} className="flex gap-4 flex-col sm:flex-row items-start">
                <img src={image} alt='' className='w-[72px] h-[72px]' />

                <div>
                    <h4 className='text-Text mb-1'>{companyName}</h4>
                    <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
                    <div className='text-Text/70 text-base flex flex-wrap gap-2 mb-2'>
                        <span className='flex items-center gap-2'><FaMapLocationDot />{jobLocation}</span>
                        <span className='flex items-center gap-2'><FaRegClock />{employmentType}</span>
                        <span className='flex items-center gap-2'><img src={rupees} alt="" className='w-[16px] h-[16px]' />{minPrice}-{maxPrice}</span>
                        <span className='flex items-center gap-2 text-[#FF0000]'><ImCalendar />{expires}</span>
                    </div>
                    <p className='text-base text-Text/70'>{frontendDescription}</p>
                </div>
            </Link>
        </section>
    )
}

export default Card