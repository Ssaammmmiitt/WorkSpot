

import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import search from "../../Assets/search.json";

const Footer = () => {
  return (
    <>
      <div className='footer p-4 md:p-6 mb-2 bg-Primary rounded-[10px] grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-[90%] mx-auto items-start'>
        <div className='col-span-1 mx-5 sm:col-span-1 sm:px-4 xl:col-span-1 mb-4 xl:mb-0'>
          <div className='logoDiv flex justify-left items-center'>
            <Lottie animationData={search} style={{ width: 70, height: 70 }} />
            <h1 className='logo text-[30px] text-white pb-[1rem]'>
              <strong>Work</strong>Spot
            </h1>
          </div>
          <p className='text-white opacity-70 leading-7'>
            <span className='font-semibold text-white'>
            Discover, Connect, Succeed:</span> At WorkSpot, We Make Your Job Search Journey Smooth and Rewarding by Matching You with the Right Employers.
          </p>
        </div>

        <div className='sm:col-span-1 mb-4 xl:mb-0'>
          <span className='divTitle text-[16px] font-semibold pb-[1rem] text-white'>
            Company
          </span>
          <ul className='space-y-2 mt-5'>
            <li><Link to="/about" className='text-white opacity-70 hover:opacity-100'>About Us</Link></li>
            <li><Link to="/about" className='text-white opacity-70 hover:opacity-100'>Features</Link></li>
            <li><Link to="/faq" className='text-white opacity-70 hover:opacity-100'>FAQ</Link></li>
          </ul>
        </div>

        <div className='sm:col-span-1 mb-4 xl:mb-0'>
          <span className='divTitle text-[16px] font-semibold pb-[1rem] text-white'>
            Resources
          </span>
          <ul className='space-y-2 mt-5'>
            <li><Link to="/app/salary" className='text-white opacity-70 hover:opacity-100'>Estimated Salaries</Link></li>
            <li><Link to="/terms-and-conditions" className='text-white opacity-70 hover:opacity-100'>Terms and Condition</Link></li>
            <li><Link to="/contact-us" className='text-white opacity-70 hover:opacity-100'>Feedback</Link></li>
            <li><Link to="/contact-us" className='text-white opacity-70 hover:opacity-100'>Contact Us</Link></li>
          </ul>
        </div>

        <div className='sm:col-span-2 md:col-span-1 mb-4 xl:mb-0'>
          <span className='divTitle text-[16px] font-semibold pb-[1rem] text-white'>
            Contact Info
          </span>
          <div className='mt-5'>
            <small className='text-[14px] text-white'>
              abcd@abcd.com
            </small>
            <div className='icons flex gap-3 py-[0.5rem]'>
             <a href='facebook.com'> <FaFacebookSquare size={24} className='hover:bg-ButtonBg rounded-sm'/></a>
              <FaInstagram size={24} className='hover:bg-ButtonBg rounded-sm'/>
              <FaGithubSquare size={24} className='hover:bg-ButtonBg rounded-sm'/>
            </div>
          </div>
        </div>
      </div>
      <p className="flex justify-center items-center py-4 text-sm text-center text-Text">© 2024 WorkSpot. All rights reserved.</p>
    </>
  )
}

export default Footer
