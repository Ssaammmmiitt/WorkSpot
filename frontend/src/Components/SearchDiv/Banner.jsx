import React from 'react'
import { IoSearch,IoLocationOutline } from "react-icons/io5";
import find from "../../Assets/find.json";
import Lottie from "lottie-react";


const Banner = ({query,handleInputChange}) => {
  return (
    <div className='max-w-screen-2xl container mx-auo xl:px-24 px-4 md:py-20 py-14'>
            <h1 className='text-5xl font-bold text-Text mb-3'>Kickstart your <span className='text-Primary'>new job</span> search today.</h1>
            <p className='text-lg text-Text/70'> Unlock your potential with new job opportunities and begin your exciting career path today.</p>

            <form>
                <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
                    <div className='flex mt-2 md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-ring-inset focus-within:ring-Primary md:w-1/2 w-full'>
                        <input type='text' name="title" id="title" className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-Text/80 placeholder-Text/40 focus:right-0 sm:text-sm sm:leading-6' placeholder='Job title, keywords or company' onChange={handleInputChange} value={query}/>
                        <IoSearch className='absolute mt-2.5 ml-2 text-Text/40'/>
                    </div>
                    <div className='flex mt-2 md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-ring-inset focus-within:ring-Primary md:w-1/3 w-full'>
                        <input type='text' name="title" id="location" className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-Text/80 placeholder-Text/40 focus:right-0 sm:text-sm sm:leading-6' placeholder='Location'/>
                        <IoLocationOutline className='absolute mt-2.5 ml-2 text-Text/40'/>
                    </div>
                    <button className='bg-Primary py-2 px-8 ml-2 text-white md:rounded-s-none rounded mt-2 '>Find Jobs</button>
                    {/* <Lottie animationData={find} className='w-[100px] h-[100px]' /> */}
                </div>
            </form>
    
    </div>
  )
}

export default Banner