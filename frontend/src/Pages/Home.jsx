// import React from 'react'
// import Banner from '../Components/SearchDiv/Banner'
// import {useState,useEffect} from 'react';
// import Jobs from './Jobs';
// import Card from '../Components/Card/Card';
// import Sidebar from '../Components/Sidebar/Sidebar';
// import NewsLetter from '../Components/NewsLetter/NewsLetter';


// const Home = () => {
//     const [selectedCategory,setSelectedCategory] =useState(null);
//     const [jobs,setJobs]= useState([]);
//     const [isLoading,setIsLoading]=useState(true);
//     const [currentPage,setCurrentPage]=useState(1);
//     const itemsPerPage = 6;

//      useEffect(()=>{
//         setIsLoading(true);
//          fetch("/jobs.json").then( res => res.json()).then(data => {
//             setJobs(data);
//             setIsLoading(false);
//         })
//     },[])

//     const [query, setQuery] = useState('');
//     const handleInputChange=(event) =>{
//         setQuery(event.target.value);
//     }

//     // filter job by title
//     const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    
//     //---radio filtering----
//     const handleChange = (event) => {
//         setSelectedCategory(event.target.value);
//     };

//     //----button filtering----
//     const handleClick = (event) => {
//         setSelectedCategory(event.target.value);
//     };
    
//     //calculate the index range
//     const calculatePageRange =() => {
//         const startIndex = (currentPage-1)*itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;
//         return {startIndex, endIndex};
//     };

//     //function for the next page
//     const nextPage = () => {
//         if(currentPage<Math.ceil(filteredItems.length / itemsPerPage )){
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     //function for previous page
//     const prevPage =() => {
//         if(currentPage >1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     //main function
//     const filteredData=(jobs,selected,query)=>{
        
//         let filteredJobs=jobs;
        
//         // filtering input items;
//         if(query)
//             {
//                 filteredJobs=filteredItems;
//             }
        

//         // filtering category items
//         if(selected) {
//                 filteredJobs=filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) => (
//                     jobLocation.toLowerCase() === selected.toLowerCase() ||
//                     parseInt(maxPrice) <= parseInt(selected) || 
//                     postingDate.toLowerCase() >= selected.toLowerCase() || 
//                     experienceLevel.toLowerCase() === selected.toLowerCase() ||
//                     salaryType.toLowerCase() === selected.toLowerCase() ||
//                     employmentType.toLowerCase() === selected.toLowerCase()
//                 ));
//                 console.log(filteredJobs);
//             }
//             //slice the data based on current page
//         const {startIndex, endIndex} = calculatePageRange();
//         filteredJobs = filteredJobs.slice(startIndex,endIndex);
//         return filteredJobs.map((data,i)=> <Card key={i} data={data}/>)
//     }

//     const result= filteredData(jobs , selectedCategory , query);


//   return (
//     <div>
//         <Banner query={query} handleInputChange={handleInputChange}/>
//     {/* main conetent*/}
//         <div className='bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>

//         {/* left side */}
//             <div className='bg-white p-4 rounded'>
//             <Sidebar handleChange={handleChange} handleClick={handleClick} />
//             </div>

//         {/* job cards */}
//             <div className='col-span-2 bg-white p-4 rounded'> 
//                 {
//                   isLoading ? (<p className='font-medium'> Loading.... </p>) : result.length >0 ? (<Jobs result={result}/>) : <>
//                 <h3 className='font-bold text-lg mb-2'>{result.length} Jobs</h3>
//                 <p>No data found!</p>
//                 </>
//                 }

//                 {/* pagination here */}
//                 {
//                     result.length > 0 ? (
//                         <div className='flex justify-center mt-4 space-x-8'>
//                         <button onClick={prevPage} disabled={currentPage == 1} className='hover:underline'>Previous</button>
//                         <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
//                         <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage )} className='hover:underline'>Next</button>
//                         </div>) : ""
//                 }
//             </div>
        
//         {/* right side */}
//             <div className='bg-white p-4 rounded'><NewsLetter/></div>
//         </div>
//     </div>
//   )
// }

// export default Home


    // useEffect(() => {
    //     async function fetchData() {
    // setIsLoading(true);
    // await fetch("/jobs.json")
    //     .then(res => {
    //         if (!res.ok) {
    //             throw new Error(`HTTP error! status: ${res.status}`);
    //         }
    //         return res.json();
    //     })
    //     .then(data => {
    //         setJobs(data);
    //         setIsLoading(false);
    //         setFetchError(null);
    //     })
    //     .catch(async error => {
    // console.error("Error fetching jobs:", error);
    // try {
    //     const errorText = await error.response.text();
    //     console.error("Response text:", errorText);
    // } catch (err) {
    //     console.error("Failed to read response text:", err);
    // }
    // setFetchError("Failed to load jobs.");
    // setIsLoading(false);
    //      });}
    //     fetchData();
    // }, []);

    // useEffect(() => 
    //     {
    //         fetch("/jobs.json").then(res => res.json()).then(data => {
    //             setJobs(data);
    //             setIsLoading(false);
    //         })
    //     },[])
    

// import React, { useState, useEffect } from 'react';
// import Banner from '../Components/SearchDiv/Banner';
// import Jobs from './Jobs';
// import Card from '../Components/Card/Card';
// import Sidebar from '../Components/Sidebar/Sidebar';
// import NewsLetter from '../Components/NewsLetter/NewsLetter';

// const Home = () => {
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [jobs, setJobs] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [fetchError, setFetchError] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 10;
//     const [query, setQuery] = useState('');

//     useEffect(() => {   
//         const fetchJobs = async () => {
//             try {
//                 const response = await fetch("/jobs.json");
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch jobs");
//                 }
//                 const data = await response.json();  
//                 setJobs(data);        
//             } catch (error) {
//                 setFetchError(error.message);
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//         fetchJobs();
//     }, []);

//     const handleInputChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleChange = (event) => {
//         setSelectedCategory(event.target.value);
//     };

//     const handleClick = (event) => {
//         setSelectedCategory(event.target.value);
//     };

//     const calculatePageRange = () => {
//         const startIndex = (currentPage - 1) * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;
//         return { startIndex, endIndex };
//     };

//     const nextPage = () => {
//         if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const prevPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const filteredItems = jobs.filter((job) => {
//         const matchesQuery = job.jobTitle.toLowerCase().includes(query.toLowerCase());
//         const matchesCategory = selectedCategory 
//             ? job.jobLocation.toLowerCase() === selectedCategory.toLowerCase() ||
//               parseInt(job.maxPrice) <= parseInt(selectedCategory) ||
//               job.experienceLevel.toLowerCase() === selectedCategory.toLowerCase() ||
//               job.salaryType.toLowerCase() === selectedCategory.toLowerCase() ||
//               job.employmentType.toLowerCase() === selectedCategory.toLowerCase()
//             : true;
//         return matchesQuery && matchesCategory;
//     });

//     const { startIndex, endIndex } = calculatePageRange();
//     const paginatedItems = filteredItems.slice(startIndex, endIndex);

//     const result = paginatedItems.map((data, i) => <Card key={i} data={data} />);

//     return (
//         <div>
//             <Banner query={query} handleInputChange={handleInputChange} />
//             <div className='bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
//                 <div className='bg-white p-4 rounded'>
//                     <Sidebar handleChange={handleChange} handleClick={handleClick} />
//                 </div>
//                 <div className='col-span-2 bg-white p-4 rounded'>
//                     {isLoading ? (
//                         <p className='font-medium'>Loading....</p>
//                     ) : fetchError ? (
//                         <p className='font-medium text-red-500'>{fetchError}</p>
//                     ) : result.length > 0 ? (
//                         <Jobs result={result} />
//                     ) : (
//                         <>
//                             <h3 className='font-bold text-lg mb-2'>{result.length} Jobs</h3>
//                             <p>No data found!</p>
//                         </>
//                     )}
//                     {result.length > 0 && (
//                         <div className='flex justify-center mt-4 space-x-8'>
//                             <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>
//                             <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
//                             <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
//                         </div>
//                     )}
//                 </div>
//                 <div className='bg-white p-4 rounded'>
//                     <NewsLetter />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;



import React, { useState, useEffect } from 'react';
import Banner from '../Components/SearchDiv/Banner';
import Jobs from './Jobs';
import Card from '../Components/Card/Card';
import Sidebar from '../Components/Sidebar/Sidebar';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
// import JobPostingData from '../Components/Sidebar/JobPostingData'; // Adjust the path if necessary

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [query, setQuery] = useState('');
    const [dateFilter, setDateFilter] = useState('');

    useEffect(() => {   
        const fetchJobs = async () => {
            try {
                const response = await fetch("/jobListings.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch jobs");
                }
                const data = await response.json();  
                setJobs(data);        
            } catch (error) {
                setFetchError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleDateFilterChange = (event) => {
        setDateFilter(event.target.value);
    };

    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return { startIndex, endIndex };
    };

    const nextPage = () => {
        if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // const filteredItems = jobs.filter((job) => {
    //     const matchesQuery = job.jobTitle.toLowerCase().includes(query.toLowerCase());
    //     const matchesCategory = selectedCategory 
    //         ? job.Location.toLowerCase() === selectedCategory.toLowerCase() ||
    //           parseInt(job.maxPrice) <= parseInt(selectedCategory) ||
    //           job.experienceLevel.toLowerCase() === selectedCategory.toLowerCase() ||
    //           job.salaryType.toLowerCase() === selectedCategory.toLowerCase() ||
    //           job.employmentType.toLowerCase() === selectedCategory.toLowerCase()
    //         : true;

    //     // const matchesDateFilter = dateFilter ? new Date(job.postingDate) >= new Date(dateFilter) : true;

    //     return matchesQuery && matchesCategory ;
    // });

    const filteredItems = jobs.filter((job) => {
        const matchesQuery = job.jobTitle?.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = selectedCategory 
            ? job.Location?.toLowerCase() === selectedCategory.toLowerCase() ||
              parseInt(job.maxPrice) <= parseInt(selectedCategory) ||
              job.experienceLevel?.toLowerCase() === selectedCategory.toLowerCase() ||
              job.salaryType?.toLowerCase() === selectedCategory.toLowerCase() ||
              job.employmentType?.toLowerCase() === selectedCategory.toLowerCase()
            : true;
    
        return matchesQuery && matchesCategory;
    });
    

    const { startIndex, endIndex } = calculatePageRange();
    const paginatedItems = filteredItems.slice(startIndex, endIndex);

    const result = paginatedItems.map((data, i) => <Card key={i} data={data} />);

    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange} />
            <div className='bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
                <div className='bg-white p-4 rounded'>
                    <Sidebar handleChange={handleChange} handleClick={handleClick} />
                    {/* <JobPostingData handleChange={handleDateFilterChange} /> */}
                </div>
                <div className='col-span-2 bg-white p-4 rounded'>
                    {isLoading ? (
                        <p className='font-medium'>Loading....</p>
                    ) : fetchError ? (
                        <p className='font-medium text-red-500'>{fetchError}</p>
                    ) : result.length > 0 ? (
                        <Jobs result={result} filteredItems={filteredItems} />
                    ) : (
                        <>
                            <h3 className='font-bold text-lg mb-2'>{result.length} Jobs</h3>
                            <p>No data found!</p>
                        </>
                    )}
                    {result.length > 0 && (
                        <div className='flex justify-center mt-4 space-x-8'>
                            <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>
                            <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                            <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
                        </div>
                    )}
                </div>
                <div className='bg-white p-4 rounded'>
                    <NewsLetter />
                </div>
            </div>
        </div>
    );
}

export default Home;
