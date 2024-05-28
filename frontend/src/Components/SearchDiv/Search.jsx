import React from 'react'
import { MdOutlineSearch  } from "react-icons/md";
import { MdOutlineWarehouse } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoLocation } from "react-icons/io5";



const Search = () => {
  return (
    <div className='searchDiv grid gp-10 bg-Primary rounded-[10px] p-[3rem]'>
      
      <form action="">
        
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] p-5 shadow-lg shadow-Accent-700'>
          
          <div className='flex gap-2 items-center'>
            <MdOutlineSearch className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-black-500 focus:outline-none w-[100%] placeholder-black' placeholder ='Search Job Here...' />
            <IoMdCloseCircleOutline className='text-[30px] text-Text hover:text-Secondary icon' />
          </div>

          <div className='flex gap-2 items-center whitespace-normal'>
            <MdOutlineWarehouse className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-black-500 focus:outline-none w-[100%] placeholder-black' placeholder='Search By Company..' />
            <IoMdCloseCircleOutline className='text-[30px] text-Text hover:text-Secondary icon' />
          </div>

          <div className='flex gap-2 items-center'>
            <IoLocation className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-black-500 focus:outline-none w-[100%] placeholder-black' placeholder='Search By Location...' />
            <IoMdCloseCircleOutline className='text-[30px] text-Text hover:text-Secondary icon' />
          </div> 

          <button className='bg-transparent h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-Secondary'>
            Search
          </button>
        </div>
      
      </form>
    
    <div className='secDiv flex items-center gap-10 justify-center'>

      <div className='singleSearch flex items-center gap-2'>
        <label htmlFor='relevance' className='text-Text font-semibold'>Sort by:
        </label>
        <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1' >

        <option value="">Relevance</option>
        <option value="">Inclusive</option>
        <option value="">Starts With</option>
        <option value="">Contains</option>
        </select>

      </div>
      <div className='singleSearch flex items-center gap-2'>
        <label htmlFor='type' className='text-Text font-semibold'>Type:
        </label>
        <select name='' id='type' className='bg-white rounded-[3px] px-4 py-1' >

        <option value="">Full-time</option>
        <option value="">Remote</option>
        <option value="">Contract</option>
        <option value="">Part-time</option>
        </select>

      </div>
      <div className='singleSearch flex items-center gap-2'>
        <label htmlFor='level' className='text-Text font-semibold'>Level:
        </label>
        <select name='' id='level' className='bg-white rounded-[3px] px-4 py-1' >

        <option value="">Senior</option>
        <option value="">Beginner</option>
        <option value="">Intermediate</option>
        <option value="">Advocate</option>
        </select>

      </div>

      <span className='text-Text cursor-pointer'>Clear All</span>
    </div>
    </div>
  )
}

export default Search