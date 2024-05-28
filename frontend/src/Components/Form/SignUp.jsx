import React from 'react';
import {  FaFacebookSquare} from 'react-icons/fa';
import { ImGithub,ImGoogle } from "react-icons/im";


const SignUp=()=>{
return (
  <div class="mt-7 bg-white border-4 border-Primary rounded-xl shadow-sm max-w-md mx-auto ">
  <div class="p-4 sm:p-7">
    <div class="text-center">
      <h1 class="block text-3xl font-extrabold text-Text  ">Sign Up</h1>
      <p class="mt-2 text-sm text-Text  ">
        Already have an account?
        <a class="text-blue-600 decoration-2 hover:underline font-semibold " href="../examples/html/signin.html">
          Sign in here
        </a>
      </p>
    </div>

    <div class="mt-5 gap-3 p-4">
     <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-Primary p-4 w-full font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
          >
            <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
             <ImGoogle size={30}/>
            </span>
            <span className="absolute flex h-full w-full transform items-center justify-center text-Text transition-all duration-300 group-hover:translate-y-full">
              <ImGoogle size={20}/> <a className="text-center">   Sign Up With Google</a>
            </span>
            <span className="invisible relative">Button</span>
      </button>

      <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-Primary p-4 w-full font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
          >
            <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
             <ImGithub size={30}/>
            </span>
            <span className="absolute flex h-full w-full transform items-center justify-center text-Text transition-all duration-300 group-hover:translate-y-full">
              <ImGithub size={20}/> <a className="text-center">   Sign Up With Github</a>
            </span>
            <span className="invisible relative">Button</span>
          </button>
		

        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-Primary p-4 w-full font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
          >
            <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
             <FaFacebookSquare size={30}/>
            </span>
            <span className="absolute flex h-full w-full transform items-center justify-center text-Text transition-all duration-300 group-hover:translate-y-full">
              <FaFacebookSquare size={20}/> <p className="flex items-center justify-center">Sign Up With Facebook</p>
            </span>
            <span className="invisible relative">Button</span>
          </button>

      <div class="py-3 flex items-center text-xs text-Text font-semibold uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6  ">OR</div>

      <form>
        <div class="grid gap-y-4 ">
          <div>
            <label for="email" class="block text-sm mb-2  ">Email Address</label>
            <div class="relative">
              <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-2 border-Secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   " required aria-describedby="email-error"/>
              <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
              </div>
            </div>
            <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
          </div>

          <div>
            <label for="password" class="block text-sm mb-2  ">Password</label>
            <div class="relative">
              <input type="password" id="password" name="password" class="py-3 px-4 block w-full border-2 border-Secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  " required aria-describedby="password-error"/>
              <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                <svg class="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              </div>
            </div>
            <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
          </div>
 
          <div>
            <label for="confirm-password" class="block text-sm mb-2  ">Confirm Password</label>
            <div class="relative">
              <input type="password" id="confirm-password" name="confirm-password" class="py-3 px-4 block w-full border-2 border-Secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " required aria-describedby="confirm-password-error"/>
              <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                {/* <svg class="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg> */}
              </div>
            </div>
            <p class="hidden text-xs text-red-600 mt-2" id="confirm-password-error">Password does not match the password</p>
          </div>

          <div class="flex items-center">
            <div class="flex">
              <input id="remember-me" name="remember-me" type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"/>
            </div>
            <div class="ms-3">
              <label for="remember-me" class="text-sm  ">I accept the <a class="text-blue-600 decoration-2 hover:underline font-medium  " href="#">Terms and Conditions</a></label>
            </div>
          </div>

        <div className="flex justify-center">
        <button href="#_" class="relative rounded px-5 py-2.5 overflow-hidden group bg-Primary  hover:bg-gradient-to-r hover:from-black hover:to-black-200 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span class="relative">Sign Up</span>
        </button>
      </div>
      
              </div> 
      </form>
   </div>
  </div>
</div>
)
}



export default SignUp