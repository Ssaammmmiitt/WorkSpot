import React from 'react'
import {  FaFacebookSquare,FaGithubSquare,FaInstagram} from 'react-icons/fa';


const Footer = () => {
  return (<>
    <div className='footer p-[5rem] mb-4 bg-Primary rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-st'>
      <div>
        <div className='logoDiv'>
        <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
          <strong>Work</strong>Spot
        </h1>
      </div>
      <p className='text-white pb-[13px] opacity-70 leading-7'>
      Discover, Connect, Succeed: At WorkSpot, We Make Your Job Search Journey Smooth and Rewarding by Matching You with the Right Employers.
      </p>
    </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
        Company
        </span>
         <div className='grid-gap 3'>
        <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
        <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
        <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
        <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
        Resources
        </span>
         <div className='grid-gap 3'>
        <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
        <li className='text-white opacity-[.7] hover:opacity-[1]'>Support</li>
        <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
        <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
        Support
        </span>
         <div className='grid-gap 3'>
        <li className='text-white  hover:text-Text'>Events</li>
        <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
        <li className='text-white opacity-[.7] hover:opacity-[1]'>Req Demo</li>
        <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
        Contact Info
        </span>
        <div>
          <small className='text-[14px] text-white'>
            abcd@abcd.com
          </small>
          <div className='icons flex gap-4 py-[1rem]'> 
            <FaFacebookSquare size={30} className='hover:bg-ButtonBg rounded-sm'/>
            <FaInstagram size={30} className='hover:bg-ButtonBg rounded-sm'/>
            <FaGithubSquare size={30} className='hover:bg-ButtonBg rounded-sm'/>
          </div>
        </div>
      </div>
    </div>
    <p className="flex  justify-center items-center py-6 text-sm text-center text-Text">© 2024 Company Co. All rights reserved.</p>
    </>
  )
}

export default Footer