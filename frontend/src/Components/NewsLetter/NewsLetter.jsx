import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import email from "../../Assets/email.json";
import email1 from "../../Assets/email1.json";
import Lottie from 'lottie-react';

const NewsLetter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <HiOutlineMail/>
                Email me for jobs
                <Lottie animationData={email} style={{width: '100px', height: '100px'}}/>
            </h3>
            <div className='flex justify-center items-center'>
            <p className='text-Text/75 text-base mb-4'>
                Stay Ahead with WorkSpot! Subscribe to our newsletter for exclusive job listings, career tips, and early access to new opportunities.
            Don't miss out—join WorkSpot today!
            </p>
            </div>
            <div className='w-full flex-row'>
                <input type='email' name='email' id="email1" placeholder='Enter your email' className='w-full block py-2 pl-3 border focus:outline-none ' autoComplete='email' />
                <div className='flex justify-center items-end'>
                <button type='submit' value='Subscribe' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Sign Up
                    </span>
                </button>
                <Lottie animationData={email1} style={{width: '100px', height: '100px'}}/>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter