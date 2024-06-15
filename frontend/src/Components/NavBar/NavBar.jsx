// // // import React, { useState } from 'react'
// // // import { NavLink ,Link} from 'react-router-dom';
// // // import { FaBarsStaggered, FaXmark  } from "react-icons/fa6";
// // // import search from "../../Assets/search.json";
// // // import Lottie from "lottie-react";

// // // const NavBar=()=>{
// // //   const [isMenuOpen,setIsMenuOpen]=useState(false);
// // //   const [isLoggedIn,setIsLoggedIn]=useState(true);
// // //   const handleMenuToggler=()=>{
// // //     setIsMenuOpen(!isMenuOpen);
// // //   };

// // //   const handleLogin=() =>{
// // //     //implement login logic
// // //     setIsLoggedIn(!isLoggedIn);
// // //   }
// // //   const navItems = [
// // //     {path:"/",title:"Start a search"},
// // //     // {path:"/my-job",title:"My Jobs"},
// // //     {path:"/salary",title:"Estimated Salary"},
// // //     {path:"/about",title:"About Us"},
// // //     {path:"/faq",title:"FAQ"},
// // //     {path:"/contact-us",title:"Contact"},
// // //   ]

// // //   return (
// // //   <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
// // //     <nav className='flex justify-between items-center py-6'>
// // //   <div className=' flex items-center justify-center'>
// // //     <Lottie animationData={search} style={{width: 100, height: 100}} />
// // //       <Link to="/" ><h1 className='logo text-[35px] animate-bounce text-black font-bold hover:text-Primary'><strong>Work</strong>Spot</h1></Link>
// // //   </div>

// // //   {/* nav items for large devices */}
// // //   <ul className='hidden md:flex gap-12'>
// // //     {
// // //       navItems.map(({path,title}) => (
// // //         <li key={path} className='text-lg font-medium text-Text no-underline hover:underline '>
// // //           <NavLink
// // //               to={path}
// // //               className={({ isActive}) =>
// // //                     isActive
// // //                       ? "active" : ""
// // //                     }
// // //           >
// // //           {title}
// // //            </NavLink>
// // //         </li>
// // //     ))
// // //     }
// // //   </ul>

// // //   {/*signup and login button*/}
// // //   {isLoggedIn? (
// // //     <><Link to="/my-jobs"><ul list-none> <li  className='text-lg font-medium text-Text no-underline hover:underline '> My Jobs</li></ul> </Link>
// // //     <Link to="/sign-up" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
// // //         <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// // //         Sign Out
// // //         </span>
// // //       </Link>
// // //     </>
// // //   ):(
// // //     <div className='text-lg text-Text font-medium space-x-5 hidden lg:block'>
// // //       <Link to="/login" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
// // //         <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// // //         Login
// // //         </span>
// // //       </Link>
// // //       <Link to="/sign-up" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
// // //         <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// // //         Sign Up
// // //         </span>
// // //       </Link>
// // //     </div>
// // //   )}
// // //   {/*mobile menu for small devices*/}
// // //   <div className='md:hidden block'>
// // //     <button onClick={handleMenuToggler}>
// // //       {
// // //         isMenuOpen ? <FaXmark className='h-5 w-5'/> : <FaBarsStaggered className='w-5 h-5 text-Text '/>
// // //       }
// // //     </button>
// // //   </div>
// // //   </nav>

// // //   {/*nav items for mobile*/}
// // //   <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "":"hidden"}`}>
// // //     <ul className='flex-col items-center'>
// // //     {
// // //       navItems.map(({path,title}) => (
// // //         <li key={path} className='text-base text-white first:text-white py-1  text-center'>
// // //           <NavLink
// // //               to={path}
// // //               className={({ isActive}) =>
// // //                     isActive
// // //                       ? "active" : ""
// // //                     }
// // //           >
// // //           {title}
// // //            </NavLink>
// // //         </li>
// // //     ))
// // //     }
// // //     <li className='text-white'>
// // //       <Link to="/login" className="text-white block text-center md:text-left">Login</Link>
// // //     </li>
// // //     </ul>
// // //   </div>
// // //   </header>
// // //   )
// // // }

// // // export default NavBar
// // import Swal from 'sweetalert2'

// // import React, { useState } from 'react'
// // import { NavLink, Link } from 'react-router-dom';
// // import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
// // import search from "../../Assets/search.json";
// // import Lottie from "lottie-react";

// // const NavBar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isLoggedIn, setIsLoggedIn] = useState(true);

// //   const handleMenuToggler = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   const handleLogin = () => {
// //     // implement login logic
// //     setIsLoggedIn(!isLoggedIn);
// //   }

// //   const navItems = [
// //     { path: "/", title: "Start a search" },
// //     { path: "/salary", title: "Estimated Salary" },
// //     { path: "/about", title: "About Us" },
// //     { path: "/faq", title: "FAQ" },
// //     { path: "/contact-us", title: "Contact" },
// //   ]
// //     const show =(isLoggedIn) =>{
// //       if(isLoggedIn==false){
// //       Swal.fire({
// //         title: "Do you want to save the changes?",
// //         showDenyButton: true,
// //         showCancelButton: true,
// //         confirmButtonText: "Save",
// //         denyButtonText: `Don't save`
// //       }).then((result) => {
// //         /* Read more about isConfirmed, isDenied below */
// //         if (result.isConfirmed) {
// //           Swal.fire("Saved!", "", "success");
// //         } else if (result.isDenied) {
// //           Swal.fire("Changes are not saved", "", "info");
// //         }
// //       });
// //     }
// //     }

// //   return (
// //     <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
// //       <nav className='flex justify-between items-center py-6'>
// //         <div className='flex items-center justify-center'>
// //           <Lottie animationData={search} style={{ width: 100, height: 100 }} />
// //           <Link to="/" ><h1 className='logo text-[35px] animate-bounce text-black font-bold hover:text-Primary'><strong>Work</strong>Spot</h1></Link>
// //         </div>

// //         {/* nav items for large devices */}
// //         <ul className='hidden md:flex gap-8'>
// //           {navItems.map(({ path, title }) => (
// //             <li key={path} className='text-lg font-medium text-Text no-underline hover:underline'>
// //               <NavLink
// //                 to={path}
// //                 className={({ isActive }) =>
// //                   isActive ? "active" : ""
// //                 }
// //               >
// //                 {title}
// //               </NavLink>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* signup and login button */}
// //         <div className='hidden md:flex items-center space-x-4'>
// //           {isLoggedIn ? (
// //             <>
// //               <Link to="/my-jobs" className='text-lg font-medium text-Text no-underline hover:underline'>My Jobs</Link>
// //               <Link to="/sign-up" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
// //                 <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// //                   Sign Out
// //                 </span>
// //               </Link>
// //             </>
// //           ) : (
// //             <>
// //               <Link to="/login" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
// //                 <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// //                   Login
// //                 </span>
// //               </Link>
// //               <Link to="/sign-up" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
// //                 <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// //                   Sign Up
// //                 </span>
// //               </Link>
// //             </>
// //           )}
// //         </div>

// //         {/* mobile menu button */}
// //         <div className='md:hidden block'>
// //           <button onClick={handleMenuToggler}>
// //             {isMenuOpen ? <FaXmark className='h-5 w-5' /> : <FaBarsStaggered className='w-5 h-5 text-Text' />}
// //           </button>
// //         </div>
// //       </nav>

// //       {/* nav items for mobile */}
// //       <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
// //         <ul className='flex flex-col items-center space-y-4'>
// //           {navItems.map(({ path, title }) => (
// //             <li key={path} className='text-base text-white py-1 text-center'>
// //               <NavLink
// //                 to={path}
// //                 className={({ isActive }) =>
// //                   isActive ? "active" : ""
// //                 }
// //               >
// //                 {title}
// //               </NavLink>
// //             </li>
// //           ))}
// //           <li className='text-white'>
// //             <Link to="/login" className="text-white block text-center md:text-left">Login</Link>
// //           </li>
// //           <li className='text-white'>
// //             <Link to="/sign-up" className="text-white block text-center md:text-left">Sign Up</Link>
// //           </li>
// //         </ul>
// //       </div>
// //     </header>
// //   )
// // }

// // export default NavBar

import Swal from "sweetalert2";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import search from "../../Assets/search.json";
import Lottie from "lottie-react";
import { useAuth } from "../../firebase/AuthProvider";

const NavBar = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(user != null); // Set initial state to false for demonstration

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleLogin = () => {
  //   console.log(user);
  //   // implement login logic
  //   if (user) {
  //     setIsLoggedIn(true);
  //     return;
  //   }
  //   setIsLoggedIn(!isLoggedIn);
  // };

  const navItems = [
    { path: "/app", title: "Start a search" },
    { path: "/app/salary", title: "Estimated Salary" },
    { path: "/about", title: "About Us" },
    { path: "/faq", title: "FAQ" },
    { path: "/contact-us", title: "Contact" },
  ];

  const handleProtectedNavClick = (e, path) => {
    if (!isLoggedIn) {
      e.preventDefault();
      Swal.fire({
        title: "You need to be logged in to access this feature",
        showCancelButton: true,
        confirmButtonText: "Login",
        denyButtonText: "Sign Up",
        showDenyButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to login page
          window.location.href = "/login";
        } else if (result.isDenied) {
          // Redirect to sign up page
          window.location.href = "/sign-up";
        }
      });
    }
  };

  return (<>
    {/*handleLogin*/}
    < header className="max-w-screen-2xl container mx-auto xl:px-24 px-4" >
      <nav className="flex justify-between items-center py-6">
        <div className="flex items-center justify-center">
          <Lottie animationData={search} style={{ width: 100, height: 100 }} />
          {/* <Link to={isLoggedIn ? "/" : ""}> <h1 className='logo text-[35px] animate-bounce text-black font-bold hover:text-Primary'><strong>Work</strong>Spot</h1></Link> */}
          {isLoggedIn ? (
            <Link to="/">
              <h1 className="logo text-[35px] animate-bounce text-black font-bold hover:text-Primary">
                <strong>Work</strong>Spot
              </h1>
            </Link>
          ) : (
            <h1 className="logo text-[35px] animate-bounce text-black font-bold hover:text-Primary">
              <strong>Work</strong>Spot
            </h1>
          )}
        </div>

        {/* nav items for large devices */}
        <ul className="hidden md:flex gap-8">
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-lg font-medium text-Text no-underline hover:underline"
            >
              {title == "Start a search" || title == "Estimated Salary" ? (
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={(e) => handleProtectedNavClick(e, path)}
                >
                  {title}
                </NavLink>
              ) : (
                <Link to={path}>{title}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* signup and login button */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/app/my-jobs"
                className="text-lg font-medium text-Text no-underline hover:underline"
              >
                My Jobs
              </Link>
              <Link
                to="/login"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Sign Out
                </span>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Login
                </span>
              </Link>
              <Link
                to="/sign-up"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Sign Up
                </span>
              </Link>
            </>
          )}
        </div>

        {/* mobile menu button */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="h-5 w-5" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-Text" />
            )}
          </button>
        </div>
      </nav>

      {/* nav items for mobile */}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"
          }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {/* {navItems.map(({ path, title }) => (
            <li key={path} className='text-base text-white py-1 text-center'>
              <NavLink
                to={path}
                className={({ isActive }) => isActive ? "active" : ""}
                onClick={(e) => handleProtectedNavClick(e, path)}
              >
                {title}
              </NavLink>
            </li>
          ))} */}
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white py-1 text-center">
              {title == "Start a search" || title == "Estimated Salary" ? (
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={(e) => handleProtectedNavClick(e, path)}
                >
                  {title}
                </NavLink>
              ) : (
                <Link to={path}>{title}</Link>
              )}
            </li>
          ))}
          <li className="text-white">
            <Link
              to="/login"
              className="text-white block text-center md:text-left"
            >
              Login
            </Link>
          </li>
          <li className="text-white">
            <Link
              to="/sign-up"
              className="text-white block text-center md:text-left"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </header >
  </>
  );
};

export default NavBar;

