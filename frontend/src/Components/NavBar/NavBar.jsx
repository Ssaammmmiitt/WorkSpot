// import Swal from "sweetalert2";
// import React, { useState, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
// import search from "../../Assets/search.json";
// import Lottie from "lottie-react";
// import { BiLogOut } from "react-icons/bi";
// import { useAuth } from "../../firebase/AuthProvider";
// import { getAuth } from "firebase/auth";
// import { FaChevronDown } from "react-icons/fa";
// import { onAuthStateChanged } from "firebase/auth";
// import { db_firebase } from "../../firebase/firebase.config";
// import { collection, getDocs } from "firebase/firestore";

// const NavBar = () => {
//   let { user, logout } = useAuth();
//   if(user){
//   console.log(user.providerData[0].providerId);
//   }
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(user != null); // Set initial state to false for demonstration
//   const [isOpen, setIsOpen] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [data,setData]=useState([]);

//   useEffect(() => {
//     if(user){
//     if (user.providerData[0].providerId === "google.com" || user.providerData[0].providerId === "github.com") {
//       const result = getAuth().currentUser;
//       if(result.displayName !== null && result.photoURL !== null){
//       setPhotoUrl(result.photoURL);
//       setFirstName(result.displayName.split(" ")[0]);
//     }
//     else
//     {
//       const userDoc = data;
//       setPhotoUrl(userDoc.photoURL);
//       setFirstName(userDoc.displayName.split(" ")[0]);
//     }
//   }
//   }}, [user]);

//   useEffect(() => {
//     const getJobs = async () => {
//         const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
//             if (user) {
//                 console.log(db_firebase);
//                 const userDoc = await getDocs(collection(db_firebase, "users"));
//                 console.log(userDoc);
//                 let data = userDoc.docs.map( doc => ({ ...doc.data(), id: doc.id }));
//                 data=data.find((doc)=>doc.id===user.uid);
//                 console.log(data)
//                 setData(data);

//             } else {
//                 setData(null);
//             }
//         });

//         return unsubscribe;
//     };
//     getJobs();
// }, []);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeDropdown = () => {
//     setIsOpen(false);
//   };

//   const handleMenuToggler = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // const handleLogin = () => {
//   //   console.log(user);
//   //   // implement login logic
//   //   if (user) {
//   //     setIsLoggedIn(true);
//   //     return;
//   //   }
//   //   setIsLoggedIn(!isLoggedIn);
//   // };

//   const navItems = [
//     { path: "/app", title: "Start a search" },
//     { path: "/app/salary", title: "Estimated Salary" },
//     { path: "/about", title: "About Us" },
//     { path: "/faq", title: "FAQ" },
//     { path: "/contact-us", title: "Contact" },
//   ];

//   const handleProtectedNavClick = (e, path) => {
//     if (!isLoggedIn) {
//       e.preventDefault();
//       Swal.fire({
//         title: "You need to be logged in to access this feature",
//         showCancelButton: true,
//         confirmButtonText: "Login",
//         denyButtonText: "Sign Up",
//         showDenyButton: true,
//       }).then((result) => {
//         if (result.isConfirmed) {
//           // Redirect to login page
//           window.location.href = "/login";
//         } else if (result.isDenied) {
//           // Redirect to sign up page
//           window.location.href = "/sign-up";
//         }
//       });
//     }
//   };

//   const onSignOut = (e) => {
//     e.preventDefault();
//     Swal.fire({
//       title: "Do you want to SignOut? This will take you to the login page",
//       showCancelButton: true,
//       confirmButtonText: "SignOut",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         logout();
//         setData(null);
//         user=null;
//         setIsLoggedIn(false);
//         NavBar(); // This may not be necessary as the state change should re-render the component
//       }
//     });
//   };

//   return (
//     <>
//       <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
//         <nav className="flex justify-between items-center py-6 ">
//           <div className="flex items-center justify-center">
//             <Lottie
//               animationData={search}
//               style={{ width: 100, height: 100 }}
//             />
//             {isLoggedIn ? (
//               <Link to="/app">
//                 <h1 className="logo text-[35px] animate-bounce text-black font-bold hover:text-Primary">
//                   <strong>Work</strong>Spot
//                 </h1>
//               </Link>
//             ) : (
//               <h1 className="logo text-[35px] animate-bounce text-black font-bold hover:text-Primary">
//                 <strong>Work</strong>Spot
//               </h1>
//             )}
//           </div>

//           <ul className="hidden md:flex gap-8">
//             {navItems.map(({ path, title }) => (
//               <li
//                 key={path}
//                 className="text-lg font-medium text-Text no-underline hover:underline"
//               >
//                 {title === "Start a search" || title === "Estimated Salary" ? (
//                   <NavLink
//                     to={path}
//                     className={({ isActive }) => (isActive ? "active" : "")}
//                     onClick={(e) => handleProtectedNavClick(e, path)}
//                   >
//                     {title}
//                   </NavLink>
//                 ) : (
//                   <Link to={path}>{title}</Link>
//                 )}
//               </li>
//             ))}
//           </ul>

//           <div className="hidden md:flex items-center space-x-4">
//             {isLoggedIn ? (
//               <div className="w-full py-6 pb-8">
//                 <div className="relative inline-block">
//                   <button
//                     type="button"
//                     className="px-4 py-2 text-white bg-Primary hover:bg-Primary/65 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
//                     onClick={toggleDropdown}
//                   >
//                     {firstName}{" "}
//                     <img
//                       className="ml-4 rounded-full w-7 h-7 border"
//                       src={photoUrl}
//                     />{" "}
//                     <FaChevronDown className="w-2.5 h-2.5 ml-2.5" />
//                   </button>

//                   {isOpen && (
//                     <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                       <ul
//                         role="menu"
//                         aria-orientation="vertical"
//                         aria-labelledby="options-menu"
//                       >
//                         <li>
//                           <Link
//                             to="/profile"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             onClick={closeDropdown}
//                           >
//                             My Profile
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             to="/app/my-jobs"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             onClick={closeDropdown}
//                           >
//                             My Jobs
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             onClick={[(e) => onSignOut(e), closeDropdown]}
//                             to="/login"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                           >
//                             <div className="flex items-center">
//                               <span className="mr-2">Sign Out</span>
//                               <BiLogOut className="" />
//                             </div>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
//                 >
//                   <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                     Login
//                   </span>
//                 </Link>
//                 <Link
//                   to="/sign-up"
//                   className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
//                 >
//                   <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                     Sign Up
//                   </span>
//                 </Link>
//               </>
//             )}
//           </div>

//           <div className="md:hidden block">
//             <button onClick={handleMenuToggler}>
//               {isMenuOpen ? (
//                 <FaXmark className="h-5 w-5" />
//               ) : (
//                 <FaBarsStaggered className="w-5 h-5 text-Text" />
//               )}
//             </button>
//           </div>
//         </nav>

//         <div
//           className={`px-4 bg-black py-5 rounded-sm ${
//             isMenuOpen ? "" : "hidden"
//           }`}
//         >
//           <ul className="flex flex-col items-center space-y-4">
//             {navItems.map(({ path, title }) => (
//               <li key={path} className="text-base text-white py-1 text-center">
//                 {title === "Start a search" || title === "Estimated Salary" ? (
//                   <NavLink
//                     to={path}
//                     className={({ isActive }) => (isActive ? "active" : "")}
//                     onClick={(e) => handleProtectedNavClick(e, path)}
//                   >
//                     {title}
//                   </NavLink>
//                 ) : (
//                   <Link to={path}>{title}</Link>
//                 )}
//               </li>
//             ))}
//             <li className="text-white">
//               <Link
//                 to="/login"
//                 className="text-white block text-center md:text-left"
//               >
//                 Login
//               </Link>
//             </li>
//             <li className="text-white">
//               <Link
//                 to="/sign-up"
//                 className="text-white block text-center md:text-left"
//               >
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </header>
//     </>
//   );
// };

// export default NavBar;

import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark, FaChevronDown } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import Lottie from "lottie-react";
import search from "../../Assets/search.json";
import { useAuth } from "../../firebase/AuthProvider";
import { db_firebase } from "../../firebase/firebase.config";

const NavBar = () => {
  let { user, logout } = useAuth();
  const [users, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(user != null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [data, setData] = useState(null);
  // useEffect(() => {
  //   const getUserData = async () => {
  //     const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
  //       if (user) {
  //         const userDocs = await getDocs(collection(db_firebase, "users"));
  //         const userData = userDocs.docs.map((doc) => ({
  //           ...doc.data(),
  //           id: doc.id,
  //         }));
  //         const currentUserData = userData.find((doc) => doc.id === user.uid);
  //         setData(currentUserData);
  //       } else {
  //         setData(null);
  //       }
  //     });
  //     return unsubscribe;
  //   };
  //   getUserData();
  // }, []);
 

//   useEffect(() => {
//     if (user) {
//       const providerId = user.providerData[0].providerId;
//       const result = getAuth().currentUser;

//       if (providerId === "google.com" || providerId === "github.com") {
//         if (result.displayName && result.photoURL) {
//           setPhotoUrl(result.photoURL);
//           setFirstName(result.displayName.split(" ")[0]);
//         } else {
//           console.log(data);
//           setPhotoUrl(userDoc.photoURL);
//           setFirstName(userDoc.displayName.split(" ")[0]);
//         }
//       }
//       console.log(user);
//     }
//   }, [user, data]);

//   useEffect(() => {
//     const getJobs = async () => {
//         const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
//             if (user) {
//                 console.log(db_firebase);
//                 const userDoc = await getDocs(collection(db_firebase, "users"));
//                 console.log(userDoc);
//                 let data = userDoc.docs.map( doc => ({ ...doc.data(), id: doc.id }));
//                 data=data.find((doc)=>doc.id===user.uid);
//                 console.log(data)
//                 setData(data);

//             } else {
//                 setData(null);
//             }
//         });

//         return unsubscribe;
//     };
//     getJobs();
// }, []);

// useEffect(() => {
//   setUnsubscribe(()=>{
//   const getJobs = async () => {
//     let unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
//       if (user) {
//         const userDoc = await getDocs(collection(db_firebase, "users"));
//         let data1 = userDoc.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//         data1 = data1.find((doc) => doc.id === user.uid);
//         setData(data1);

//         // Merged functionality from the first useEffect
//         const providerId = user.providerData[0].providerId;
//         const result = getAuth().currentUser;
//         console.log(providerId);
//         if (providerId.toLowerCase() == "google.com" || providerId.toLowerCase() == "github.com") {
//           if (result.displayName && result.photoURL) {
//             setPhotoUrl(result.photoURL);
//             setFirstName(result.displayName.split(" ")[0]);
//           }}
        
//        else if(providerId.toLowerCase() == "password" && data ){
//             if(data.photoURL && data.firstname){
//             console.log(data.photoURL);
//             setPhotoUrl(data.photoURL);
//             setFirstName(data.firstname);
//           }}
//       } else {
//         setData(null);
//       }
//     });

//     return () => {};

//   getJobs();}}
//   );
// }, [unsubscribe]);

useEffect(() => {
  const getJobs = async () => {
    const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {

      if (user) {
        if (user.providerData[0].providerId === "password") {
          console.log(db_firebase);
          const userDoc = await getDocs(collection(db_firebase, "users"));
          console.log(userDoc);
          let data = userDoc.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          data = data.filter((doc) => doc.id === user.uid);
          data = data[0];
          console.log(data.job_id);
          setUser(data);
          //setJobs(data.job_id);
          setPhotoUrl(data.photoURL);
          setFirstName(data.firstname);
          console.log(data.photoURL);
        } else {
          if (user.providerData[0].providerId === "google.com" || user.providerData[0].providerId === "github.com") {
            const result = getAuth().currentUser;
            console.log(result);
            if (result.displayName !== null && result.photoURL !== null) {
              setPhotoUrl(result.photoURL);
              setFirstName(result.displayName.split(" ")[0]);
            }
          }
        }
      }
    });



    return unsubscribe;
  };


  getJobs();
}, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          window.location.href = "/login";
        } else if (result.isDenied) {
          window.location.href = "/sign-up";
        }
      });
    }
  };

  const onSignOut = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      title: "Do you want to SignOut? This will take you to the login page",
      showCancelButton: true,
      confirmButtonText: "SignOut",
    });

    if (result.isConfirmed) {
      // Clear user-related state
      setData(null);
      setIsLoggedIn(false);
      setPhotoUrl("");
      setFirstName("");
      user=null;

      // Clear local storage if used
      localStorage.removeItem("user"); // Adjust key if necessary

      // Sign out from Firebase
      await logout();

      // Redirect to login or home page if necessary
      window.location.href = "/login";
    }
  };

  const navItems = [
    { path: "/app", title: "Start a search" },
    { path: "/app/salary", title: "Estimated Salary" },
    { path: "/about", title: "About Us" },
    { path: "/faq", title: "FAQ" },
    { path: "/contact-us", title: "Contact" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <div className="flex items-center justify-center">
          <Lottie animationData={search} style={{ width: 100, height: 100 }} />
          <Link to={isLoggedIn ? "/app" : "/"}>
            <h1 className="logo text-[35px] animate-bounce text-black font-bold hover:text-Primary">
              <strong>Work</strong>Spot
            </h1>
          </Link>
        </div>

        <ul className="hidden md:flex gap-8">
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-lg font-medium text-Text no-underline hover:underline"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={(e) => handleProtectedNavClick(e, path)}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative inline-block">
              <button
                type="button"
                className="px-4 py-2 text-white bg-Primary hover:bg-Primary/65 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                onClick={toggleDropdown}
              >
                {firstName}
                <img
                  className="ml-4 rounded-full w-7 h-7 border"
                  src={photoUrl}
                />
                <FaChevronDown className="w-2.5 h-2.5 ml-2.5" />
              </button>

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <ul
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <li>
                      <Link
                        to="/app/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/app/my-jobs"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        My Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={(e) => {
                          onSignOut(e);
                          closeDropdown();
                        }}
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <span className="mr-2">Sign Out</span>
                          <BiLogOut />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
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

      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white py-1 text-center">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={(e) => handleProtectedNavClick(e, path)}
              >
                {title}
              </NavLink>
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
    </header>
  );
};

export default NavBar;
