import React from "react";
import {  FaFacebookSquare} from 'react-icons/fa';
import { ImGithub,ImGoogle } from "react-icons/im";
import { Link } from 'react-router-dom';



const Login =() =>{
    return(
        <div className="flex justify-center items-center h-[50rem]">
<div className="w-full max-w-md p-4 rounded-[15px] shadow sm:p-8 mt-7 bg-white border-4 border-Primary  mx-auto  text-Text ">
	<h2 className="mb-3 text-4xl font-extrabold text-center">Login to your Account</h2>
	<p className=" mt-7 text-sm text-center text-Text">Dont have account?
		<Link to="/sign-up"  className=" text-Primary focus:underline hover:underline"> Sign up here</Link>
	</p>
	<div className="my-8 space-y-4">
    <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-white p-4 w-full font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
          >
            <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
             <ImGoogle size={30}/>
            </span>
            <span className="absolute flex h-full w-full transform items-center justify-center text-Text transition-all duration-300 group-hover:translate-y-full">
              <ImGoogle size={20}/> <a className="text-center">   Login With Google</a>
            </span>
            <span className="invisible relative">Button</span>
          </button>
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-white p-4 w-full font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
          >
            <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
             <ImGithub size={30}/>
            </span>
            <span className="absolute flex h-full w-full transform items-center justify-center text-Text transition-all duration-300 group-hover:translate-y-full">
              <ImGithub size={20}/> <a className="text-center">   Login With Github</a>
            </span>
            <span className="invisible relative">Button</span>
          </button>
		
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-white p-4 w-full font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
          >
            <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
             <FaFacebookSquare size={30}/>
            </span>
            <span className="absolute flex h-full w-full transform items-center justify-center text-Text transition-all duration-300 group-hover:translate-y-full">
              <FaFacebookSquare size={20}/> <p className="flex items-center justify-center">Login With Facebook</p>
            </span>
            <span className="invisible relative">Button</span>
          </button>

	</div>
	<div className="flex items-center w-full my-4">
		<hr  className="w-full text-Text" />
		<p className="px-3 text-Text text-base">OR</p>
		<hr  className="w-full text-Text" />
	</div>
	<form noValidate="" action="" className="space-y-8">
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="email" className="block text-base font-bold">Email address</label>
				<input type="email" name="email" id="email" placeholder="abcd@efgh.com" className="w-full px-3 py-2 border rounded-md " />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-base font-bold">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-sm font-semibold hover:underline text-white">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md " />
			</div>
		</div>
        <div className=" flex items-center justify-center">
		<button className="relative inline-block text-lg group">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">Login</span>
        </span>
        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
      </button>
        </div>
	</form>
	<p className=" mt-7 text-sm text-center text-Text">Forgot your password?
		<Link to="/reset"  className=" text-Primary focus:underline hover:underline"> Reset here</Link>
	</p>
</div>
</div>
)
}


export default Login