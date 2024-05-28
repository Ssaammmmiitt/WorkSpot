import React from 'react';
import { MdOutlineTimer } from "react-icons/md";
import logo4 from '../../Assets/logo(4).png';
import logo2 from '../../Assets/logo(2).png';
import logo3 from '../../Assets/logo(3).png';
import logo1 from '../../Assets/logo(1).png';

const Data =[

  {
    id:1,
    image:logo4,
    title:'Software Engingeer',
    time:'Now',
    location:'Canada',
    desc:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, commodi?',
    company:'Novac Linus Co.'
  },
  {
    id:2,
    image:logo2,
    title:'Web Developer',
    time:'14 Hours',
    location:'Manchester',
    desc:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, commodi?',
    company:'Liquid Accessments'
  },
  {
    id:3,
    image:logo3,
    title:'UI designer',
    time:'14 Hours',
    location:'Manchester',
    desc:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, commodi?',
    company:'Web Tech Nepal'
  },
  {id:4,
  image:logo1,
  title:'HR manager',
  time:'14 Hours',
  location:'Texas',
  desc:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, commodi?',
  company:'Street Corporation'
  },
  {
    id:5,
    image:logo3,
    title:'UI designer',
    time:'14 Hours',
    location:'Manchester',
    desc:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, commodi?',
    company:'Web Tech Nepal'
  },
  {
    id:6,
    image:logo3,
    title:'UI designer',
    time:'14 Hours',
    location:'Manchester',
    desc:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, commodi?',
    company:'Web Tech Nepal'
  },
  {
    id:7,
    image:logo3,
    title:'UI designer',
    time:'14 Hours',
    location:'Manchester',
    desc:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, commodi?',
    company:'Web Tech Nepal'
  },
  {
    id:8,
    image:logo3,
    title:'UI designer',
    time:'14 Hours',
    location:'Manchester',
    desc:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, commodi?',
    company:'Web Tech Nepal'
  }
]


const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Data.map(({ id, image, title, time, location, desc, company }) => {
            return (
              <div  key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-Primary shadow-lg shadow-Accent-400/700 hover:shadow-lg'>
                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-Text group-hover:text-green' >{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <MdOutlineTimer />{time}
                  </span>
                </span>
                <h6 className='text-[#ccc]'>{location}</h6>
                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-20px group-hover:text-white'>{desc}</p>
                <div className='companty flex items-center gap-2'>
                  <img src={image} alt='Company Logo' className='w-[10%]' />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>
                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-Text hover:bg-ButtonBg group-hover/item:text-Text group-hover:text-white'>Apply Now</button>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};



export default Jobs