import { React, useContext, useEffect, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { ImGithub, ImGoogle } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { db_firebase } from "../../firebase/firebase.config";
import { doc, runTransaction, getDoc, setDoc } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import app from "../../firebase/firebase.config";
import { useAuth } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const functions = getFunctions();


const Login = () => {

  const { login, signUpWithGoogle, signUpWithGithub } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  let idToken = {};

  // const handleSocialLogin = async (provider) => {

  //   try {
  //     let result;

  //     // Perform sign-up based on provider
  //     if (provider === "Google") {
  //       result = await signUpWithGoogle();
  //     } else if (provider === "Github") {
  //       result = await signUpWithGithub();
  //     } else {
  //       throw new Error("Unsupported provider");
  //     }

  //     const user = result.user;

  //     // Check if user exists in Firestore
  //     try {
  //       const userRef = doc(db_firebase, `users/${user.uid}`);
  //       const userDoc = await getDoc(userRef);

  //       if (userDoc.exists()) {
  //         // User exists in Firestore
  //         console.log("User exists:", userDoc.data());
  //         navigate("/app");
  //       } else {
  //         // User does not exist in Firestore
  //         console.log("User does not exist, creating new user");
  //         await createNewUser(user);
  //         navigate("/sign-up");
  //       }
  //     } catch (firestoreError) {
  //       console.error("Firestore error:", firestoreError);
  //       // If there's an error (including permission denied), try to create the user
  //       await createNewUser(user);
  //       navigate("/sign-up");
  //     }

  //   } catch (error) {
  //     console.error("Error in social login:", error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: error.message,
  //     });
  //   }
  // };
  const handleSocialLogin = async (provider) => {
    try {
      let result;

      // Perform sign-up based on provider
      if (provider === "Google") {
        result = await signUpWithGoogle();
      } else if (provider === "Github") {
        result = await signUpWithGithub();
      } else {
        throw new Error("Unsupported provider");
      }

      const user = result.user;

      // Check if user exists in Firestore
      try {
        const userRef = doc(db_firebase, `users/${user.uid}`);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          // User exists in Firestore
          console.log("User exists:", userDoc.data());
          navigate("/app");
        } else {
          // User does not exist in Firestore
          console.log("User does not exist, creating new user");
          await createNewUser(user);
          navigate("/sign-up");
        }
      } catch (firestoreError) {
        console.error("Firestore error:", firestoreError);
        console.error("Firestore error code:", firestoreError.code);
        console.error("Firestore error message:", firestoreError.message);

        if (firestoreError.code === 'permission-denied') {
          console.log("Permission denied, attempting to create user");
          await createNewUser(user);
          navigate("/sign-up");
        } else {
          // For other Firestore errors, we might want to handle them differently
          throw firestoreError;
        }
      }

    } catch (error) {
      console.error("Error in social login:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);

      let errorMessage = "An unexpected error occurred. Please try again.";

      if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = "The sign-in popup was closed before completing the process.";
      } else if (error.code === 'auth/cancelled-popup-request') {
        errorMessage = "The sign-in process was cancelled.";
      } else if (error.code === 'auth/popup-blocked') {
        errorMessage = "The sign-in popup was blocked. Please allow popups for this site.";
      } else if (error.code === 'permission-denied') {
        errorMessage = "Permission denied. Please check your account permissions.";
      }

      Swal.fire({
        icon: "error",
        title: "Sign-In Error",
        text: errorMessage,
      });
    }
  };
  // Function to create a new user in Firestore
  async function createNewUser(user) {
    try {
      // Call a Cloud Function to create the user document
      const createUserFunction = httpsCallable(functions, 'createUser');
      await createUserFunction({
        // uid: user.uid,
        // email: user.email,
        // displayName: user.displayName,
        firstname: user.displayName.split(" ")[0],
        lastname: user.displayName.split(" ")[1],
        email: user.email,
        phone: 0,
        currentCompany: "None",
        bio: "None",
        jobTitle: "None",
        workExperience: 0,
        jobTypes: "None",
        jobLocation: "None",
        remoteWorking: false,
        linkedinUrl: "None",
        twitterUrl: "None",
        githubUrl: "None",
        portfolioUrl: "None",
        otherWebsite: "None",

        // Add any other initial user data you want to store
      });
      console.log("New user created in Firestore");
    } catch (error) {
      console.error("Error creating new user:", error);
      throw error;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = {
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      await login(value.email, value.password);
      const expirationTime = new Date().getTime() + sessionExpirationMinutes * 60 * 1000;
      localStorage.setItem('idToken', idToken);
      localStorage.setItem('tokenExpiration', expirationTime);
      navigate("/app");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-[50rem]">
        <div className="w-full max-w-md p-4 rounded-[15px] shadow sm:p-8 mt-7 bg-white border-4 border-Primary  mx-auto  text-Text ">
          <h2 className="mb-3 text-4xl font-extrabold text-center">
            Login to your Account
          </h2>
          <p className=" mt-7 text-sm text-center text-Text">
            Dont have account?
            <Link
              to="/sign-up"
              className=" text-Primary focus:underline hover:underline"
            >
              {" "}
              Sign up here
            </Link>
          </p>
          <div className="my-8 space-y-4">
            <button id="Google" onClick={() => handleSocialLogin("Google")} className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-white p-4 w-full font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out">
              <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
                <ImGoogle size={30} />
              </span>
              <span className="absolute flex h-full w-full transform items-center justify-center text-Text transition-all duration-300 group-hover:translate-y-full">
                <ImGoogle size={20} />{" "}
                <a className="text-center"> Login With Google</a>
              </span>
              <span className="invisible relative">Button</span>
            </button>
            <button id="Github" onClick={() => handleSocialLogin("Github")} className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-white p-4 w-full font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out">
              <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
                <ImGithub size={30} />
              </span>
              <span className="absolute flex h-full w-full transform items-center justify-center text-Text transition-all duration-300 group-hover:translate-y-full">
                <ImGithub size={20} />{" "}
                <a className="text-center"> Login With Github</a>
              </span>
              <span className="invisible relative">Button</span>
            </button>

            {/* <button id="Facebook" onClick={() => handleSocialLogin("Facebook")} className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-white p-4 w-full font-medium text-[#C4DFE</button>6] shadow-md transition duration-300 ease-out">
              <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
                <FaFacebookSquare size={30} />
              </span>
              <span className="absolute flex h-full w-full transform items-center justify-center text-Text transition-all duration-300 group-hover:translate-y-full">
                <FaFacebookSquare size={20} />{" "}
                <p className="flex items-center justify-center">
                  Login With Facebook
                </p>
              </span>
              <span className="invisible relative">Button</span>
            </button> */}
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full text-Text" />
            <p className="px-3</button> text-Text text-base">OR</p>
            <hr className="w-full text-Text" />
          </div>
          <form noValidate="" className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-base font-bold">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abcd@efgh.com"
                  className="w-full px-3 py-2 border rounded-md "
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-base font-bold">
                    Password
                  </label>
                </div>
                <div className="relative w-full max-w-sm">
                  <input
                    type={!showPassword ? "password" : "text"}
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md pr-10 "
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    {showPassword ? (
                      <FaEye
                        onClick={() => setShowPassword(!showPassword)}
                        size={20}
                        className="cursor-pointer"
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={() => setShowPassword(!showPassword)}
                        size={20}
                        className="cursor-pointer"
                      />
                    )}
                  </span>
                </div>{" "}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="relative inline-block text-lg group"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Login</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>
            </div>
          </form>
          <p className=" mt-7 text-sm text-center text-Text">
            Forgot your password?
            <Link
              to="/reset"
              className=" text-Primary focus:underline hover:underline"
            >
              {" "}
              Reset here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

