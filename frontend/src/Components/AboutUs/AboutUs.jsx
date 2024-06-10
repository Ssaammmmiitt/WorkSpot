import React from 'react';
import jobsearch from '../../Assets/jobsearch.png';
import organize from '../../Assets/organize.png';
import customize from '../../Assets/customize.png';
import apply from '../../Assets/apply.png';
import community from '../../Assets/community.png';
import empowerment from '../../Assets/empowerment.png';
import inclusion from '../../Assets/inclusion.png';

const AboutUs = () => {
    return (<>
        <section className="px-6 py-12 sm:py-24 lg:px-8 mx-auto w-[90%] max-w mt-7 bg-white rounded-lg shadow-sm border-2 border-Primary"> 
	<div className="container mx-auto flex flex-col p-6">
		<h2 className="py-4 text-5xl font-bold text-center">Features</h2>
		<div className="divide-y pt-8 ">
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <img src={jobsearch} alt=""  className='w-32 h-32'/>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-sm font-semibold tracking-wider uppercase text-Primary">Step 1 - Aggregate</span>
					<span className="text-xl font-bold md:text-2xl">Aggregating Job Listings</span>
					<span className="mt-4 text-Text">WorkSpot uses advanced web-scraping technology to gather job listings from various sources, including major job boards like LinkedIn, Upwork, Glassdoor, and numerous company career pages. This comprehensive approach ensures that users have access to a diverse and extensive collection of job opportunities in one centralized location.</span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <img src={organize} alt=""  className='w-32 h-32'/>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-sm font-semibold tracking-wider uppercase text-Primary">Step 2 - Organize</span>
					<span className="text-xl font-bold md:text-2xl">Organizing and Filtering Data</span>
					<span className="mt-4 text-Text">After collecting job listings, WorkSpot processes and categorizes the data to ensure accuracy and eliminate duplicates. Users can easily navigate through listings by applying filters based on job title, location, industry, and company. This makes it simple to find relevant job postings tailored to individual preferences.</span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <img src={customize} alt=""  className='w-32 h-32'/>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-sm font-semibold tracking-wider uppercase text-Primary">Step 3 - Customize</span>
					<span className="text-xl font-bold md:text-2xl">User Interaction and Customization</span>
					<span className="mt-4 text-Text">While users can browse job listings without an account, creating a free WorkSpot account provides additional benefits. Registered users can save job searches, bookmark favorite listings, and set up personalized job alerts. These alerts notify users via email about new job postings that match their criteria, ensuring they stay updated with the latest opportunities.</span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <img src={apply} alt=""  className='w-32 h-32'/>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-sm font-semibold tracking-wider uppercase text-Primary">Step 4 - Apply</span>
					<span className="text-xl font-bold md:text-2xl">Direct Application Process</span>
					<span className="mt-4 text-Text">WorkSpot provides direct links to the original job postings on external websites. Users can click on these links to view the full job description and submit their applications directly through the respective job board or company career page. This ensures that applications are submitted correctly and securely, streamlining the job application process.</span>
				</div>
			</div>
		</div>
	</div>
		<div className='' >
	<div className='mb-[4rem] mt-[6rem]'>
	<h1 className='text-Text text-[25px] py-[2rem] pb-[3rem] font-bold w-[400] block'>The value that holds us true and to account
	</h1>

	<div className='flex sm:flex-col lg:flex-row'>
	  
	  <div className='sinngleGrid rounded-[10px] hover:bg-[#ffdbac] p-[1.5rem]'>
		  <div className='flex item-center gap-3'>
			<div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
			  <img src={empowerment} alt=""  className='w-[70%]'/>
			</div>
			<span className='font-semibold text-Text text-lg'> Empowerment</span>
		  </div>
	  <p className='text-sm text-Text opacity-[.7] py-[1rem] font-semibold'>We are dedicated to empowering individuals by providing the resources, tools, and support they need to achieve their career goals. We believe in the potential of every job seeker and work tirelessly to help them succeed.</p>
	  </div>

	  <div className='sinngleGrid rounded-[10px] hover:bg-[#b1f3b1] p-[1.5rem]'>
		  <div className='flex item-center gap-3'>
			<div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
			  <img src={inclusion} alt=""  className='w-[70%]'/>
			</div>
			<span className='font-semibold text-Text text-[18px]'> Inclusivity</span>
		  </div>
	  <p className='text-sm text-Text opacity-[.7] py-[1rem] font-semibold'>We champion diversity and inclusivity in the workplace. Our platform is designed to promote equal opportunities for all, regardless of background, experience, or identity.</p>
	  </div>

	  <div className='sinngleGrid rounded-[10px] hover:bg-[#ffb5bd]  p-[1.5rem]'>
		  <div className='flex item-center gap-3'>
			<div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
			  <img src={community} alt=""  className='w-[70%]'/>
			</div>
			<span className='font-semibold text-Text text-[18px]'> Community</span>
		  </div>
	  <p className='text-sm text-Text opacity-[.7] py-[1rem] font-semibold'>We believe in the power of community. By fostering a supportive and collaborative environment, we help job seekers connect with potential employers and peers, creating opportunities for growth and development.</p>
	  </div>
	  </div>
	</div>
	</div>
	</section>

</>    );
};

export default AboutUs;