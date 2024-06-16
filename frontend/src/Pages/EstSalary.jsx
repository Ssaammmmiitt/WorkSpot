import React, { useEffect, useState } from 'react';
import PageHeader from '../Components/Header/PageHeader';
import salariesData from '../../Public/salaries.json';
import 'animate.css';
import { Link } from 'react-router-dom';

const Salary = () => {
    const [searchText, setSearchText] = useState("");
    const [salary, setSalary] = useState(salariesData);
    const [filteredSalaries, setFilteredSalaries] = useState(salariesData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        try {
            // Simulate an API call
            setTimeout(() => {
                setSalary(salariesData);
                setFilteredSalaries(salariesData);
                setLoading(false);
            }, 1000);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }, []);

    const handleSearch = () => {
        const filter = salary.filter(
            (job) =>
                job.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredSalaries(filter);
    };

    const handleReset = () => {
        setSearchText("");
        setFilteredSalaries(salary);
    };

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <PageHeader />
            <div className='mt-5'>
                <div className='search-box p-2 text-center mb-2'>
                    <input 
                        type='text' 
                        name='search' 
                        id='search' 
                        value={searchText}
                        className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' 
                        onChange={(e) => setSearchText(e.target.value)} 
                    />
                    <button onClick={handleSearch} className='bg-Primary text-white font-semibold px-8 py-2 rounded-sm mb-4'>Search</button>
                    <button onClick={handleReset} className='bg-Secondary text-white font-semibold px-8 py-2 rounded-sm mb-4 ml-4'>Reset</button>
                </div>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : filteredSalaries.length > 0 ? (
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center animate__animated animate__slideInLeft'>
                    {filteredSalaries.map((data) => (
                        data.salary !== " Salary 0.00 per month" && (
                            <div key={data.id} className='shadow px-4 py-8'>
                                <h4 className='font-semibold text-xl'>{data.title}</h4>
                                <p className='my-2 font-medium text-[#00006f] text-lg'>{data.salary}</p>
                                <div className='flex flex-row gap-4'>
                                    <p className='underline'> Currency:</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-currency-rupee-nepalese">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 5h-11h3a4 4 0 1 1 0 8h-3l6 6" />
                                        <path d="M21 17l-4.586 -4.414a2 2 0 0 0 -2.828 2.828l.707 .707" />
                                    </svg>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            ) : (
                <div>No results found</div>
            )}
        </div>
    );
};

export default Salary;
