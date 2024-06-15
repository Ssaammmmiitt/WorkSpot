// import React from 'react';
// import { Link,useNavigate } from 'react-router-dom';
// import { FaFacebookSquare } from 'react-icons/fa';
// import { ImGithub,ImGoogle } from "react-icons/im";
// import { FaEye , FaEyeSlash } from "react-icons/fa";
// import { useState } from 'react';

// const SignUp=()=>{
//   const [showPassword,setShowPassword]=useState(false);
//   const [showConfirmPassword,setShowConfirmPassword]=useState(false);

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaEye, FaEyeSlash } from 'react-icons/fa';
import { ImGithub, ImGoogle } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, getAuth } from 'firebase/auth';


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');

  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const auth = getAuth();

  const handleSocialSignUp = async (provider) => {
    if (provider === "Google") {


    } else if (provider === "Github") {

    } else if (provider === "Facebook") {

    }

  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePasswords(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setPasswordMatchError('Passwords do not match');
    } else {
      setPasswordMatchError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = {
      email: data.get("email"),
      password: data.get("password"),
      confirm_password: data.get("confirm-password")
    };
    console.log(value);
    if (value.password !== value.confirm_password) {
      alert("Password does not match");
      return;
    }
    if (e.target[4].checked === false) {
      alert("Please accept the terms and conditions");
      return;
    }
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        localStorage.setItem("user", JSON.stringify(userCredential));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return alert(errorMessage);
      });
    console.log(localStorage.getItem("user"));
    navigate("/complete-registration");
  };
  return (
    <div className="mt-7 bg-white border-4 border-Primary rounded-xl shadow-sm max-w-md mx-auto ">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-3xl font-extrabold text-Text  ">Sign Up</h1>
          <p className="mt-2 text-sm text-Text  ">
            Already have an account?
            <Link to='/login' className="text-blue-600 decoration-2 hover:underline font-semibold " href="../examples/html/signin.html">
              Sign in here
            </Link>
          </p>
        </div>

        <div className="mt-5 gap-3 p-4">
          <button id="Google" onClick={() => handleSocialSignUp("Google")} className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-Primary p-4 w-full font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
          >
            <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
              <ImGoogle size={30} />
            </span>
            <span className="absolute flex h-full w-full transform items-center justify-center text-Text transition-all duration-300 group-hover:translate-y-full">
              <ImGoogle size={20} /> <a className="text-center">Sign Up With Google</a>
            </span>
            <span className="invisible relative">Button</span>
          </button>

          <button id="Google" onClick={() => handleSocialSignUp("Github")} className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-Primary p-4 w-full font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out">
            <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
              <ImGithub size={30} />
            </span>
            <span className="absolute flex h-full w-full transform items-center justify-center text-Text transition-all duration-300 group-hover:translate-y-full">
              <ImGithub size={20} /> <a className="text-center">Sign Up With Github</a>
            </span>
            <span className="invisible relative">Button</span>
          </button>

          <button id="Google" onClick={() => handleSocialSignUp("Facebook")} className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-Primary p-4 w-full font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out">
            <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
              <FaFacebookSquare size={30} />
            </span>
            <span className="absolute flex h-full w-full transform items-center justify-center text-Text transition-all duration-300 group-hover:translate-y-full">
              <FaFacebookSquare size={20} /> <p className="flex items-center justify-center">Sign Up With Facebook</p>
            </span>
            <span className="invisible relative">Button</span>
          </button>

          <div className="py-3 flex items-center text-xs text-Text font-semibold uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">OR</div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email Address</label>
                <div className="relative">
                  <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-2 border-Secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error" />
                  <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3"></div>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm mb-2">Password</label>
                <div className="relative">
                  <input type={(!showPassword) ? "password" : "text"} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md pr-10" onChange={handlePasswordChange} />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    {showPassword ? <FaEye onClick={() => setShowPassword(!showPassword)} size={20} className="cursor-pointer" />
                      : <FaEyeSlash onClick={() => setShowPassword(!showPassword)} size={20} className="cursor-pointer" />}
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm mb-2">Confirm Password</label>
                <div className="relative">
                  <input type={(!showConfirmPassword) ? "password" : "text"} name="confirm-password" id="confirm-password" placeholder="*****" className="w-full px-3 py-2 border rounded-md pr-10" onChange={handleConfirmPasswordChange} />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    {showConfirmPassword ? <FaEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} size={20} className="cursor-pointer" />
                      : <FaEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)} size={20} className="cursor-pointer" />}
                  </span>
                </div>
                {passwordMatchError && <p className="text-red-500 text-sm mt-1">{passwordMatchError}</p>}
              </div>

              <div className="flex items-center">
                <div className="flex">
                  <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500" />
                </div>
                <div className="ms-3">
                  <label htmlFor="remember-me" className="text-sm">I accept the <Link to="/terms-and-conditions" className="text-blue-600 decoration-2 hover:underline font-medium">Terms and Conditions</Link></label>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative rounded px-5 py-2.5 overflow-hidden group bg-Primary  hover:bg-gradient-to-r hover:from-black hover:to-black-200 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                  <button type='submit' >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">Sign Up</span>
                  </button>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
