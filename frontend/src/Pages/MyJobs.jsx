// import React, { useEffect ,useState} from 'react'
// import jobsdata from '../../Public/jobListings.json';
// import { Link } from 'react-router-dom';

// const MyJobs = () => {
//     const email= "abcd@gmail.com";
//     const [jobs,setJobs]=useState(jobsdata);
//     const[searchText,setSearchText]=useState("");
//     const[isLoading,setIsLoading]=useState(true);

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setIsLoading(true);
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 try {
//                     const data = JSON.parse(e.target.result);
//                     setJobs(data);
//                 } catch (error) {
//                     setFetchError("Failed to parse JSON");
//                     console.error("Failed to parse JSON:", error.message);
//                 } finally {
//                     setIsLoading(false);
//                 }
//             };
//             reader.onerror = () => {
//                 setFetchError("Failed to read file");
//                 console.error("Failed to read file");
//                 setIsLoading(false);
//             };
//             reader.readAsText(file);
//         }
//     };

//     // useEffect(()=>{
//     //     setIsLoading(true);
//     //     fetch()
//     // },[])
//     const handleSearch=() =>{
//         const filter = jobs.filter((job)=> job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
//         setJobs(filter);
//         setIsLoading(false);
//     }
//     console.log(searchText);

//     const handleDelete = (id) => {
//         console.log(id);
//     }
//   return (
//     <div>
//         <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
//             <h1 className='text-left font-semibold text-2xl align-baseline'>Welcome,Username</h1>
//             <div className='my-jobs-container'>
//                 <h1 className='text-center p-4'>All My Jobs</h1>
//                 <div className='search-box p-2 text-center mb-2'>
//                     <input type='text' name='search' id='search' className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' onChange={(e)=>setSearchText(e.target.value)} />
//                     <button className='bg-Primary text-white font-semibold px-8 py-2 rounded-sm mb-4' onClick={handleSearch}>Search</button>
//                 </div>
//             </div>

//             {/*table*/}
//             <section className="py-1 bg-blueGray-50">
// <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
//   <div className="relative flex flex-col min-w-0 break-words bg-[#eefffe] w-full mb-6 shadow-lg rounded ">
//     <div className="rounded-t mb-0 px-4 py-3 border-0">
//       <div className="flex flex-wrap items-center">
//         <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//           <h3 className="font-semibold text-base text-blueGray-700">Applied Jobs</h3>
//         </div>
//         <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//          <Link to=""> <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Apply for jobs</button></Link>
//         </div>
//       </div>
//     </div>

//     <div className="block w-full overflow-x-auto">
//       <table className="items-center bg-transparent w-full border-collapse ">
//         <thead>
//           <tr>
//           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                         Job Id
//                         </th>
//             <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                         Job Name
//                         </th>
//           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                         Company Name    
//                         </th>
//            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                         Salary
//                         </th>
//         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                     Applied On:
//         </th>
//           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                         Delete
//                         </th>
//           </tr>
//         </thead>

//         <tbody>
//             {
//                 jobs.map((job,index)=>(<tr>

//                     <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
//                       {index +1}
//                     </th>
//                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
//                       {job.jobTitle}
//                     </td>
//                     <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                         {job.companyName}   
//                     </td>
//                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                       <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
//                         Rs{job.minPrice}-{job.maxPrice};
//                     </td>
//                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                       <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
//                       Date
//                     </td>
//                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                     <button onClick={()=> handleDelete(job.id)} className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Delete</button>
//                     </td>
//                   </tr>
//                 ))

//         }

//         </tbody>

//       </table>
//     </div>
//   </div>
// </div>
// <footer className="relative pt-8 pb-6 mt-16">
//   <div className="container mx-auto px-4">
//   </div>
// </footer>
// </section>
//         </div>
//     </div>
//   )
// }

// export default MyJobs


import React, { useState } from 'react';
import jobsdata from '../../Public/jobListings.json';
import { Link } from 'react-router-dom';
import db_firebase from '../firebase/firebase.config';
import { FieldValue, collection, doc, getDocs, arrayRemove } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';

const MyJobs = () => {
    const [user, setUser] = useState(getAuth().currentUser);
    const auth = getAuth();
    const [userJobs, setUserJobs] = useState([]);
    const [jobs, setJobs] = useState(jobsdata);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    // useEffect left unchanged as per your request.
    // useEffect(()=>{
    //     setIsLoading(true);
    //     fetch()
    // },[])
    console.log(jobs);

    useEffect(() => {
        const getJobs = async () => {
            const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
                if (user) {
                    console.log(db_firebase);
                    const userDoc = await getDocs(collection(db_firebase.db_firebase, `users`));
                    console.log(userDoc);
                    let data = userDoc.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                    data = data.filter((doc) => doc.id === user.uid);
                    data = data[0];
                    setUserJobs(data);
                    setJobs(data);
                } else {
                    setUser(null);
                }
            });
            return unsubscribe;
        };
        getJobs();
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFetchError(null);
        if (file) {
            setIsLoading(true);
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    setJobs(data);
                } catch (error) {
                    setFetchError("Failed to parse JSON");
                    console.error("Failed to parse JSON:", error.message);
                } finally {
                    setIsLoading(false);
                }
            };
            reader.onerror = () => {
                setFetchError("Failed to read file");
                console.error("Failed to read file");
                setIsLoading(false);
            };
            reader.readAsText(file);
        }
    };

    // Filtering jobs based on search text
    const handleSearch = () => {
        setJobs(jobsdata.filter((job) =>
            job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
        ));
    };

    // Reset search to show all jobs
    const resetSearch = () => {
        setSearchText("");
        setJobs();
    };

    // Handle job deletion
    const handleDelete = async (id) => {
        const userUID = auth.currentUser.uid;
        const querySnapshot = doc(collection(db_firebase.db_firebase, "users"), userUID);
        await updateDoc(querySnapshot, {
            job_id: arrayRemove(`${id}`)
        }); // Reference to the user's document
        setJobs(jobs.filter(job => job.id !== id));
    };
    return (
        <div>
            <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
                <h1 className='text-left font-semibold text-2xl align-baseline'>Welcome, Username</h1>
                <div className='my-jobs-container'>
                    <h1 className='text-center p-4'>All My Jobs</h1>
                    <div className='search-box p-2 text-center mb-2'>
                        <input
                            type='text'
                            name='search'
                            id='search'
                            className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full'
                            onChange={(e) => setSearchText(e.target.value)}
                            value={searchText}
                        />
                        <button
                            className='bg-Primary text-white font-semibold px-8 py-2 rounded-sm mb-4'
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                        <button
                            className='bg-gray-500 text-white font-semibold px-8 py-2 rounded-sm mb-4'
                            onClick={resetSearch}
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Loading and Error Display */}
                {isLoading && <p>Loading...</p>}
                {fetchError && <p className="text-red-500">{fetchError}</p>}

                {/* Table */}
                <section className="py-1 bg-blueGray-50">
                    <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
                        <div className="relative flex flex-col min-w-0 break-words bg-[#eefffe] w-full mb-6 shadow-lg rounded ">
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                        <h3 className="font-semibold text-base text-blueGray-700">Applied Jobs</h3>
                                    </div>
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                        <Link to="/app">
                                            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Apply for jobs</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="block w-full overflow-x-auto">
                                <table className="items-center bg-transparent w-full border-collapse ">
                                    <thead>
                                        <tr>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Job Id</th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Job Name</th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Company Name</th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Salary</th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Applied On:</th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Delete</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            [console.log(jobs),
                                            jobs.map((job, index) => (
                                                <tr key={job.id}>
                                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">{index + 1}</th>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">{job.jobTitle}</td>
                                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{job.companyName}</td>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Rs {job.minPrice} - {job.maxPrice}</td>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{new Date(job.appliedDate).toLocaleDateString()}</td>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <button onClick={() => handleDelete(job.id)} className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Delete</button>
                                                    </td>
                                                </tr>
                                            ))]
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <footer className="relative pt-8 pb-6 mt-16">
                        <div className="container mx-auto px-4"></div>
                    </footer>
                </section>
            </div>
        </div>
    );
}

export default MyJobs;
