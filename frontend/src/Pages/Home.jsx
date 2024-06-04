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

import React from 'react'
import Banner from '../Components/SearchDiv/Banner'
import { useState, useEffect } from 'react';
import Jobs from './Jobs';
import Card from '../Components/Card/Card';
import Sidebar from '../Components/Sidebar/Sidebar';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [query, setQuery] = useState('');
    const [fetchError, setFetchError] = useState(null);

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

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const res = await fetch("./jobs.json"); // 1. Use async/await
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setJobs(data); // 5. State management
                setFetchError(null);
            } catch (error) {
                console.error("Error fetching jobs:", error); // 2. Error handling
                try {
                    const errorText = await error.response.text();
                    console.error("Response text:", errorText); // 6. Enhanced error logging
                } catch (err) {
                    console.error("Failed to read response text:", err);
                }
                setFetchError("Failed to load jobs."); // 5. State management
            } finally {
                setIsLoading(false); // 3. Use of finally block
            }
        }

        fetchData(); // 4. useEffect with dependency array
    }, []);


    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    // filter job by title
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().includes(query.toLowerCase()));

    //---radio filtering----
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    //----button filtering----
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    //calculate the index range
    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return { startIndex, endIndex };
    };

    //function for the next page
    const nextPage = () => {
        if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    //function for previous page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    //main function
    const filteredData = (jobs, selected, query) => {
        let filteredJobs = jobs;

        // filtering input items;
        if (query) {
            filteredJobs = filteredItems;
        }

        // filtering category items
        if (selected) {
            filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => (
                jobLocation.toLowerCase() === selected.toLowerCase() ||
                parseInt(maxPrice) <= parseInt(selected) ||
                // postingDate.toLowerCase() >= selected.toLowerCase() ||
                experienceLevel.toLowerCase() === selected.toLowerCase() ||
                salaryType.toLowerCase() === selected.toLowerCase() ||
                employmentType.toLowerCase() === selected.toLowerCase()
            ));
            console.log(filteredJobs);
        }
        //slice the data based on current page
        const { startIndex, endIndex } = calculatePageRange();
        filteredJobs = filteredJobs.slice(startIndex, endIndex);
        return filteredJobs.map((data, i) => <Card key={i} data={data} />);
    }

    const result = filteredData(jobs, selectedCategory, query);

    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange} />
            {/* main content */}
            <div className='bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
                {/* left side */}
                <div className='bg-white p-4 rounded'>
                    <Sidebar handleChange={handleChange} handleClick={handleClick} />
                </div>
                {/* job cards */}
                <div className='col-span-2 bg-white p-4 rounded'>
                    {isLoading ? (
                        <p className='font-medium'>Loading....</p>
                    ) : fetchError ? (
                        <p className='font-medium text-red-500'>{fetchError}</p>
                    ) : result.length > 0 ? (
                        <Jobs result={result} />
                    ) : (
                        <>
                            <h3 className='font-bold text-lg mb-2'>{result.length} Jobs</h3>
                            <p>No data found!</p>
                        </>
                    )}
                    {/* pagination here */}
                    {result.length > 0 && (
                        <div className='flex justify-center mt-4 space-x-8'>
                            <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>
                            <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                            <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
                        </div>
                    )}
                </div>
                {/* right side */}
                <div className='bg-white p-4 rounded'><NewsLetter />
                </div>
            </div>
        </div>
    );
}

export default Home;
