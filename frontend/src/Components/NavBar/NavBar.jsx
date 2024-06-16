import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import search from "../../Assets/search.json";
import Lottie from "lottie-react";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../../firebase/AuthProvider";
import { getAuth } from "firebase/auth";
import { FaChevronDown } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";
import { db_firebase } from "../../firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";


const NavBar = () => {
  let { user, logout } = useAuth();
  if (user) {
    console.log(user.providerData[0].providerId);
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(user != null); // Set initial state to false for demonstration
  const [isOpen, setIsOpen] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [data, setData] = useState([]);
  const [users, setUser] = useState(null);

  // useEffect(() => {
  //   if (user) {
  //     if (user.providerData[0].providerId === "google.com" || user.providerData[0].providerId === "github.com") {
  //       const result = getAuth().currentUser;
  //       if (result.displayName !== null && result.photoURL !== null) {
  //         setPhotoUrl(result.photoURL);
  //         setFirstName(result.displayName.split(" ")[0]);
  //       }
  //       else {
  //         const userDoc = data;
  //         setPhotoUrl(userDoc.photoURL);
  //         setFirstName(userDoc.displayName.split(" ")[0]);
  //       }
  //     }
  //   }
  // }, [user]);

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

  // const getJobs = async () => {
  //   const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
  //     if (user) {
  //       console.log(db_firebase);
  //       const userDoc = await getDocs(collection(db_firebase, "users"));
  //       console.log(userDoc);
  //       let data1 = userDoc.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  //       data1 = data1.find((doc) => doc.id === user.uid);
  //       console.log(data1)
  //       setData(data1);

  //     } else {
  //       setData(null);
  //     }
  //   });

  //   return unsubscribe;
  // };

  // useEffect(() => {
  //   getJobs();
  // }, []);
  useEffect(() => {
    const getJobs = async () => {
      const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {

        if (user) {
          if (user.providerData[0].providerId === "password") {
            console.log(db_firebase);
            const userDoc = await getDocs(collection(db_firebase, `users`));
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

  const onSignOut = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to SignOut? This will take you to the login page",
      showCancelButton: true,
      confirmButtonText: "SignOut",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        setData(null);
        user = null;
        setIsLoggedIn(false);
        NavBar(); // This may not be necessary as the state change should re-render the component
      }
    });
  };

  return (
    <>
      <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
        <nav className="flex justify-between items-center py-6 ">
          <div className="flex items-center justify-center">
            <Lottie
              animationData={search}
              style={{ width: 100, height: 100 }}
            />
            {isLoggedIn ? (
              <Link to="/app">
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

          <ul className="hidden md:flex gap-8">
            {navItems.map(({ path, title }) => (
              <li
                key={path}
                className="text-lg font-medium text-Text no-underline hover:underline"
              >
                {title === "Start a search" || title === "Estimated Salary" ? (
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

          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="w-full py-6 pb-8">
                <div className="relative inline-block">
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-Primary hover:bg-Primary/65 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                    onClick={toggleDropdown}
                  >
                    {firstName}{" "}
                    <img
                      className="ml-4 rounded-full w-7 h-7 border"
                      src={photoUrl}
                    />{" "}
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
                            onClick={[(e) => onSignOut(e), closeDropdown]}
                            to="/login"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <span className="mr-2">Sign Out</span>
                              <BiLogOut className="" />
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
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
          className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"
            }`}
        >
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-white py-1 text-center">
                {title === "Start a search" || title === "Estimated Salary" ? (
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
            {isLoggedIn?<>
              <li className="text-white">
              <Link
                to="/app/profile"
                className="text-white block text-center md:text-left"
              >
                My Profile
              </Link>
            </li>
              <li className="text-white">
              <Link
                to="/app/my-jobs"
                className="text-white block text-center md:text-left"
              >
                My Jobs
              </Link>
            </li>
            <li className="text-white">
              <Link
                onClick={(e) => onSignOut(e)}
                to="/login"
                className="text-white block text-center md:text-left"
              >
                 <div className="flex items-center">
                              <span className="mr-2">Sign Out</span>
                              <BiLogOut className="" />
                            </div>
              </Link>
            </li>
            </>:<>

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
            </>}
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavBar;
