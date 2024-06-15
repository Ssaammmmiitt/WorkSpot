// import React, { useState, useEffect } from 'react';
// import Banner from '../Components/SearchDiv/Banner';
// import Jobs from './Jobs';
// import Card from '../Components/Card/Card';
// import Sidebar from '../Components/Sidebar/Sidebar';
// import NewsLetter from '../Components/NewsLetter/NewsLetter';
// // import JobPostingData from '../Components/Sidebar/JobPostingData'; // Adjust the path if necessary

// const Home = () => {
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [jobs, setJobs] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [fetchError, setFetchError] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 10;
//     const [query, setQuery] = useState('');
//     const [dateFilter, setDateFilter] = useState('');

    // useEffect(() => {   
    //     const fetchJobs = async () => {
    //         try {
    //             const response = await fetch("/jobListings.json");
    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch jobs");
    //             }
    //             const data = await response.json();  
    //             setJobs(data);        
    //         } catch (error) {
    //             setFetchError(error.message);
    //             console.error(error.message);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };
    //     fetchJobs();
    // }, []);

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const response = await fetch("/jobListings.json");
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch jobs");
//                 }
//                 const data = await response.json();
//                 setJobs(data);
//             } catch (error) {
//                 setFetchError(error.message);
//                 console.error(error.message);
//             } finally {
//                 setIsLoading(false);
//             }
//         };
    
//         const tryFetchJobs = async () => {
//             try {
//                 await fetchJobs();
//             } catch (error) {
//                 console.error("Error calling fetchJobs:", error.message);
//             }
//         };
    
//         tryFetchJobs();
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

//     const handleDateFilterChange = (event) => {
//         setDateFilter(event.target.value);
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
//         const matchesQuery = job.jobTitle?.toLowerCase().includes(query.toLowerCase());
//         const matchesCategory = selectedCategory 
//             ? job.Location?.toLowerCase() === selectedCategory.toLowerCase() ||
//               parseInt(job.maxPrice) <= parseInt(selectedCategory) ||
//               job.experienceLevel?.toLowerCase() === selectedCategory.toLowerCase() ||
//               job.salaryType?.toLowerCase() === selectedCategory.toLowerCase() ||
//               job.employmentType?.toLowerCase() === selectedCategory.toLowerCase()
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
//                     {/* <JobPostingData handleChange={handleDateFilterChange} /> */}
//                 </div>
//                 <div className='col-span-2 bg-white p-4 rounded'>
//                     {isLoading ? (
//                         <p className='font-medium'>Loading....</p>
//                     ) : fetchError ? (
//                         <p className='font-medium text-red-500'>{fetchError}</p>
//                     ) : result.length > 0 ? (
//                         <Jobs result={result} filteredItems={filteredItems} />
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
import jobsdata from '../../Public/jobListings.json';

const Home = () => 
    {
    const [jobs, setJobs] = useState(jobsdata);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [query, setQuery] = useState('');
    const [dateFilter, setDateFilter] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
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

    // useEffect(() => {
    //     const fetchJobListings = async () => {
    //       try {
    //         const response = await fetch('/jobListings.json');
    //         const data = await response.json();
    //         setJobs(data);
    //       } catch (error) {
    //         console.error('Error fetching job listings:', error);
    //       }
    //     };
      
    //     fetchJobListings();
    //   }, []);

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

    const filteredItems = jobs.filter((job) => {
        const matchesQuery = job.jobTitle?.toLowerCase().includes(query.toLowerCase()) || job.companyName?.toLowerCase().includes(query.toLowerCase());
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
                    {/* <input type="file" accept=".json" onChange={handleFileChange} className="mt-4" /> */}
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