import React from 'react'

import community from '../../Assets/community.png';
import empowerment from '../../Assets/empowerment.png';
import inclusion from '../../Assets/inclusion.png';


 const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-Text text-[25px] py-[2rem] [b-[3rem] font-bold w-[400] block'>The value that holds us true and to account
      </h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        
        <div className='sinngleGrid rounded-[10px] hover:bg-[#ffdbac] p-[1.5rem]'>
            <div className='flex item-center gap-3'>
              <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                <img src={empowerment} alt=""  className='w-[70%]'/>
              </div>
              <span className='font-semibold text-Text text-[18px]'> Empowerment</span>
            </div>
        <p className='text-[13px] text-Text opacity-[.7] py-[1rem] font-semibold'>We are dedicated to empowering individuals by providing the resources, tools, and support they need to achieve their career goals. We believe in the potential of every job seeker and work tirelessly to help them succeed.</p>
        </div>

        <div className='sinngleGrid rounded-[10px] hover:bg-[#b1f3b1] p-[1.5rem]'>
            <div className='flex item-center gap-3'>
              <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                <img src={inclusion} alt=""  className='w-[70%]'/>
              </div>
              <span className='font-semibold text-Text text-[18px]'> Inclusivity</span>
            </div>
        <p className='text-[13px] text-Text opacity-[.7] py-[1rem] font-semibold'>We champion diversity and inclusivity in the workplace. Our platform is designed to promote equal opportunities for all, regardless of background, experience, or identity.</p>
        </div>

        <div className='sinngleGrid rounded-[10px] hover:bg-[#ffb5bd]  p-[1.5rem]'>
            <div className='flex item-center gap-3'>
              <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                <img src={community} alt=""  className='w-[70%]'/>
              </div>
              <span className='font-semibold text-Text text-[18px]'> Community</span>
            </div>
        <p className='text-[13px] text-Text opacity-[.7] py-[1rem] font-semibold'>We believe in the power of community. By fostering a supportive and collaborative environment, we help job seekers connect with potential employers and peers, creating opportunities for growth and development.</p>
        </div>
        
      </div>

      <div className="card mt-[2rem] flex justify-between bg-Secondary p-[5rem] rounded-[10px]">

        <div>
            <h1 className='text-[#ffffff] text-[30px] font-bold' > Ready to switch a career?
            </h1>
            <h2  className='text-blue-200 text-[25px] font-bold'>Let's get Started!
            </h2>
        </div>

        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-Primary hover:bg-white border-Secondary'>
        Get Started
        </button>
      </div>
    </div>
  )
}

export default Value