import React, { useEffect ,useState} from 'react'

const MyJobs = () => {
    const email= "abcd@gmail.com";
    const [jobs,setJobs]=useState([]);
    const[searchText,setSearchText]=useState("");
    const[isLoading,setIsLoading]=useState(true);

    // useEffect(()=>{
    //     setIsLoading(true);
    //     fetch()
    // },[])
    const handleSearch=() =>{
        const filter = jobs.filter((job)=> job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        console.log(filter);
    }
    console.log(searchText);
  return (
    <div>
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <div className='my-jobs-container'>
                <h1 className='text-center p-4'>All My Jobs</h1>
                <div className='search-box p-2 text-center mb-2'>
                    <input type='text' name='search' id='search' className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className='bg-Primary text-white font-semibold px-8 py-2 rounded-sm mb-4' onClick={handleSearch}>Search</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default MyJobs