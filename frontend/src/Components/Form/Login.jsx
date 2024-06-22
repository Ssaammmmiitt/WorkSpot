import { React, useState } from "react";
import { ImGithub, ImGoogle } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { db_firebase } from "../../firebase/firebase.config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFunctions } from 'firebase/functions';
import app from "../../firebase/firebase.config";
import { useAuth } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";
import { getAuth } from "firebase/auth";
import Cookies from 'universal-cookie';

const functions = getFunctions();
const cookies = new Cookies();
const Time_of_expiry = 45;

const Login = () => {
  const { login, signUpWithGoogle, signUpWithGithub } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

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
      console.log("Result:", result);
      const user = result.user;

      // Check if the user document already exists
      const userRef = doc(db_firebase, `users/${user.uid}`);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        console.log("User already exists");
        //adding session token to local storage
        const idToken = result.user.accessToken;
        const expirationTime = new Date().getTime() + Time_of_expiry * 60 * 1000;

        cookies.set('token', idToken, { expires: new Date(expirationTime) });
        console.log("Token added to cookies", cookies.get('token'));
        navigate("/app");
      } else {
        console.log("User does not exist, creating new user document");
        // User doesn't exist, create new user document
        // await createNewUser(user);
        console.log("New user created successfully");
        Swal.fire({
          icon: "warning",
          title: "SignUp First",
          text: "You need to complete your registration first",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/sign-up");
          }
        })
      }

    } catch (error) {
      console.error("Error in social login:", error);
      const auth = getAuth();
      if (error.code === 'auth/account-exists-with-different-credential') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An account already exists with the same email address but different sign-in credentials. Try signing in.",
        });
        const email = error.email;
        return;
      }
    }
  };

  const createNewUser = async (user) => {
    const userRef = doc(db_firebase, `users/${user.uid}`);

    // Use set with merge option to avoid overwriting existing data
    await setDoc(userRef, {
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      // Add any other initial user data you want to store
    }, { merge: true });

    console.log("User document created or updated in Firestore");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = {
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      await login(value.email, value.password);

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

