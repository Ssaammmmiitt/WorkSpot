import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiHandbagSimpleFill } from "react-icons/pi";




const Profile = () => {
  return (
    
  <div className="max-w-4xl flex items-center justify-left h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    
	{/*<!--Main Col-- */}
	<div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
	

		<div className="p-4 md:p-12 text-center lg:text-left">
			{/*<!-- Image for mobile view--> */}
			<div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-('https://source.unsplash.com/MP0IUfwrn0A')"></div>
			<h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
			<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
			<p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><PiHandbagSimpleFill className='mr-5 w-7 h-7'/> What you do</p>
			<p className="pt-2 text-Text text-xs lg:text-sm flex items-center justify-center lg:justify-start"><IoLocationSharp className='mr-5 w-7 h-7'/> Your Location - 25.0000° N, 71.0000° W</p>
            <p className="pt-2 text-Text text-xs lg:text-sm flex items-center justify-center lg:justify-start"><MdEmail className=' mr-5 w-7 h-7'/> Your email</p>
			<p className="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>

			<div className="pt-12 pb-8">
				<button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
				  Get In Touch
				</button> 
			</div>

            <h1 className='text-[#000000]'>Urls:</h1>
			<div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-col ">
            <ul >
				<li className='flex justify-left items-center'><FaGithubSquare className='mr-5 w-7 h-7'/> Github url</li>
                <li className='flex justify-left items-center'><FaTwitterSquare className='mr-5 w-7 h-7'/>Twitter url</li>
                <li className='flex justify-left items-center'><FaLinkedin className='mr-5 w-7 h-7'/>Linkedin url</li>
                <li className='flex justify-left items-center'><CgWebsite className='mr-5 w-7 h-7'/>Website url</li>
                <li className='flex justify-left items-center'><CgWebsite className='mr-5 w-7 h-7'/>Other Website</li>

			</ul>
			

		</div>

	</div>
    </div>
	
	{/*<!--Img Col--> */}
	<div className="  w-full lg:w-2/5 ">
		{/*<!-- Big profile image for side bar (desktop) --*/}
		<img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className=" ml-5 rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>
		{/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}
		
	</div>
    </div>
    
);
}

export default Profile