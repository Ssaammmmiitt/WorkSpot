import React from 'react'
import { useParams } from 'react-router-dom'
import jobs from '../../Public/jobListings.json'
import { Link } from 'react-router-dom';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import rupees from '../Assets/rupees.png';
import { ImCalendar } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import Swal from 'sweetalert2'
import 'animate.css';
import db_firebase from '../firebase/firebase.config';
import { collection, doc, updateDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { arrayUnion } from 'firebase/firestore';





const JobDetails = () => {
    const { id } = useParams();
    const auth = getAuth();
    const found = jobs.find(job => job.id === parseInt(id));
    console.log(found);
    const { companyName, jobTitle, jobCategory, availablePositions, requirements, sector, image, expires, minPrice, url, maxPrice, salaryType, jobLocation, responsibilities, created, employmentType, description, experienceLevel } = found;

    const redirect = async (url) => {
        const result = await Swal.fire({
            title: 'Do you want to apply to the job',
            text: "You will be redirected to the application page.",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#008a8a',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, apply now!'
        });
        console.log(auth.currentUser.uid);
        if (result.isConfirmed) {
            await handleJobsAdd();
            window.location.assign(url);
        }

    }

    const handleJobsAdd = async () => {
        try {
            const userUID = auth.currentUser.uid;
            const querySnapshot = doc(collection(db_firebase.db_firebase, "users"), userUID);
            await updateDoc(querySnapshot, {
                job_id: arrayUnion(id)
            }); // Reference to the user's document
            //alert("Document written successfully");
        } catch (e) {
            alert("Error adding document: " + e);
            console.error("Error adding document: ", e);
        }
    };


    return (
        <>
            <div className="max-w-4xl p-8 bg-white shadow-md w-[85%] mx-auto mt-7 border-2 border-Primary rounded-lg flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-Text/90">{jobTitle}</h1>
                        <div className="flex items-center space-x-2 text-Text/60">
                            <img src={image} alt="Company Logo" className="w-[96px] h-[96px] rounded-full" />
                            <span>{companyName}</span>
                            <span>•</span>
                            <span>{jobLocation}</span>
                        </div>
                        <div className='animate__animated animate__fadeInUp text-Text/70 text-base flex flex-wrap gap-2 mb-2'>
                            <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><FaMapLocationDot />{jobLocation}</span>
                            <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><FaRegClock />{employmentType}</span>
                            <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><img src={rupees} alt="" className='w-[16px] h-[16px]' />{minPrice}-{maxPrice}</span>
                        </div>
                        <div className='animate__animated animate__backInRight text-Text/70 text-base flex flex-wrap gap-2 mb-2'>
                            <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><BsFillPeopleFill />Vacancies: {availablePositions} </span>
                            <span className='flex bg-[#99d0d0] p-2 rounded-lg items-center gap-2'><ImCalendar />{created}</span>
                        </div>
                    </div>
                    <div className='hidden md:inline'>
                        <Link to="/app"><IoHome className='text-Primary w-6 h-6 mx-auto' /></Link>
                        <button className=" animate__animated animate__shakeY px-6 py-2 mt-2 mx-auto font-medium bg-Primary text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]" onClick={() => redirect(url)}>
                            Apply Now
                        </button>
                    </div>
                </div>
                <div className="animate__animated animate__fadeInUp mb-4">
                    <h2 className="text-xl font-semibold text-Text/90">Job Details</h2>
                    {sector && <p className="text-Text/70">Sector: {sector}</p>}
                    <p className="text-Text/70">Job Category: {jobCategory}</p>
                    <p className="text-Text/70">Experience Level: {experienceLevel}</p>
                    <p className="text-Text/70">Posted on: {created}</p>
                    <p className="text-Text/70">Expires on:<span className='text-[#ff0000]'> {expires} </span></p>
                    <p className="text-Text/70">Salary Type : {salaryType}</p>
                </div>
                <div className="mb-4 animate__animated animate__fadeInUp">
                    <h2 className="text-xl font-semibold text-Text/90">About this role</h2>
                    <div className='text-Text/70' dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
                <div className="mb-4 animate__animated animate__fadeInUp">
                    <h2 className="text-xl font-semibold text-Text/90">Requirements</h2>
                    <div className='text-Text/70' dangerouslySetInnerHTML={{ __html: requirements }}></div>
                </div>
                {responsibilities && (
                    <div className="animate__animated animate__fadeInUp mb-4">
                        <h2 className="text-xl font-semibold text-Text/90">Responsibility</h2>
                        <div className='text-Text/70' dangerouslySetInnerHTML={{ __html: responsibilities }}></div>
                    </div>
                )}
                <div className="flex flex-col md:hidden mt-auto">
                    <Link to="/"><IoHome className='text-Primary w-6 h-6 mx-auto' /></Link>
                    <button className="px-6 py-2 mt-2 mx-auto font-medium bg-Primary text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]" onClick={() => redirect(url)}>
                        Apply Now
                    </button>
                </div>
            </div >
        </>
    )
}

export default JobDetails
