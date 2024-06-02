import React, { useState } from 'react'
import { NavLink ,Link} from 'react-router-dom';
import { FaBarsStaggered, FaXmark,  } from "react-icons/fa6";
import search from "../../Assets/search.json";
import Lottie from "lottie-react";

// const NavBar = () => {
//   return (
//     <div className='navBar flex justify-between items-center p-[3rem]'>
//       <div className='logoDiv'>
//         <h1 className='logo text-[35px] text-[#123346] hover:text-Secondary'><strong>Work</strong>Spot</h1>
//       </div>

//       <div className="menu flex gap-8">
//         <li className='menuList text-Text hover:text-Secondary'>Jobs</li>
//         <li className='menuList text-Text hover:text-Secondary'>Companies</li>
//         <li className='menuList text-Text hover:text-Secondary'>About</li>
//         <li className='menuList text-Text hover:text-Secondary'>Contact</li>
//         <li className='menuList text-Text hover:text-Secondary'>Login</li>
//         <li className='menuList text-Text hover:text-Secondary'>Signup</li>


//       </div>
//     </div>
//   )
// }

const NavBar=()=>{
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const handleMenuToggler=()=>{
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {path:"/",title:"Start a search"},
    {path:"/my-job",title:"My Jobs"},
    {path:"/salary",title:"Estimated Salary"},
    {path:"/about",title:"About Us"},
    {path:"/contact-us",title:"Contact"},
  ]

  return (
  <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
    <nav className='flex justify-between items-center py-6'>
  <div className='animate-bounce flex items-center justify-center'>
    <Lottie animationData={search} style={{width: 100, height: 100}} />
      <h1 className='logo text-[35px] text-black font-bold hover:text-Primary'><strong>Work</strong>Spot</h1>
  </div>

  {/* nav items for large devices */}
  <ul className='hidden md:flex gap-12'>
    {
      navItems.map(({path,title}) => (
        <li key={path} className='text-lg text-Text '>
          <NavLink
              to={path}
              className={({ isActive}) =>
                    isActive
                      ? "active" : ""
                    }
          >
          {title}
           </NavLink>
        </li>
    ))
    }
  </ul>

  {/*signup and login button*/}
    <div className='text-lg text-Text font-medium space-x-5 hidden lg:block'>
      <Link to="/login" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Login
        </span>
      </Link>
      <Link to="/sign-up" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Sign Up
        </span>
      </Link>
    </div>

  {/*mobile menu for small devices*/}
  <div className='md:hidden block'>
    <button onClick={handleMenuToggler}>
      {
        isMenuOpen ? <FaXmark className='h-5 w-5'/> : <FaBarsStaggered className='w-5 h-5 text-Text '/>
      }   
    </button>
  </div>    
  </nav>


  {/*nav items for mobile*/}
  <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "":"hidden"}`}>
    <ul className='flex-col items-center'>
    {
      navItems.map(({path,title}) => (
        <li key={path} className='text-base text-white first:text-white py-1'>
          <NavLink
              to={path}
              className={({ isActive}) =>
                    isActive
                      ? "active" : ""
                    }
          >
          {title}
           </NavLink>
        </li>
    ))
    }
    <li className='text-white'>
      <Link to="/login" className="text-white">Login</Link>
    </li>
    </ul>
  </div>
  </header>
  )
}


export default NavBar