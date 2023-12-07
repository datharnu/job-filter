/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react'
import jobs from '../data.json';
import { useState } from 'react';
import remove from '../../public/images/icon-remove.svg'


export default function Jobtitle() {
    const [search, setSearch] = useState([]);
    const [jobList, setJobList] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);






    const handleClick = (value) => {
        const newList = jobList.filter((job) => {
            const { tools, languages, role, level } = job;

            if (role === value || tools.includes(value) || languages.includes(value) || level === value) {
                return true;
            }

            return false;
        });




        setFilteredJobs(newList);
        addFiltered(value)
        // Do something with the filtered list (newList)

        console.log(newList);

    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle search submission if needed
        console.log('Search submitted:', search);
    };


    const addFiltered = (data) => {
        if (!search.includes(data)) {
            setSearch([...search, data]);
        }
    };


    const removeFilter = (filter) => {
        setSearch(search.filter((f) => f !== filter));
    };




    const clearSearch = () => {
        setSearch([]);
        setFilteredJobs(jobList); // Reset the filtered list
    };
    useEffect(() => {
        setJobList(jobs);
        setFilteredJobs(jobs); // Initialize the filtered list with all jobs
    }, []);

    return (


        <section className=' lg:mx-28'>

            {search.length > 0 &&
                <div className='mx-10 bg-white px-10 py-3 relative bottom-5 shadow-lg shadow-green '>
                    <form onSubmit={handleSubmit} className='flex justify-between text-md '>

                        <span className='font-bold text-green rounded-md bg-background flex '>
                            {search.map((filter, index) => (
                                <>
                                    <div key={index} className='mr-2 p-2'>
                                        {filter}

                                    </div>
                                    <div className='bg-green rounded-r-md p-2 hover:bg-black cursor-pointer'>
                                        <img src={remove} className='relative top-1 ' onClick={() => removeFilter(filter)} />
                                    </div></>
                            ))}
                        </span>
                        <button type="submit" className=' text-green font-bold hover:underline ' onClick={clearSearch}>Clear</button>

                    </form>
                </div>
            }

            <div className='mx-auto  shadow-lg  flex flex-col gap-14  p-8 '>
                {filteredJobs.map((job) => {
                    const { id,
                        company,
                        position,
                        postedAt,
                        contract,
                        location,
                        logo,
                        role,
                        level,
                        languages,
                        tools,
                        featured,
                        new: latest } = job
                    // eslint-disable-next-line react/jsx-key
                    return <article key={id} className='px-5 py-8 bg-white border-l-green border-l-8 rounded-md  shadow-md shadow-green lg:flex gap-3'>

                        <div className='sm:relative top-[-58px]'>
                            <img src={logo} className='sm:w-14 ' />
                        </div>

                        <div className='sm:space-y-3 lg:space-y-2 lg:text-sm py-3'>
                            <div className='flex gap-5  mt-[-15px] '>
                                <h2 className='text-green font-bold'>{company}</h2>
                                <div className='flex gap-3 text-white font-bold'>
                                    {latest ? <h2 className='rounded-full px-2 py-[2px] bg-green'>NEW</h2> : null}
                                    {featured && <h2 className='rounded-full px-2 py-[2px] bg-vDarkcyan'>FEATURED</h2>}

                                </div>
                            </div>

                            <h2 className='font-bold text-vDarkcyan hover:text-green cursor-pointer'>{position}</h2>
                            <div className='space-x-3 text-Darkcyan flex font-semibold'>
                                <p>{postedAt}</p>
                                <span className='h-1 w-1 bg-Darkcyan rounded-full relative top-[10px]'></span>
                                <p>{contract}</p>
                                <span className='h-1 w-1 bg-Darkcyan rounded-full relative top-[10px]'></span>
                                <p>{location}</p>
                            </div>
                            <hr className='border-[1px] border-vDarkcyan lg:hidden' />

                        </div>
                        <div className='ml-auto'>
                            <div className='font-bold text-green my-5 grid sm:grid-cols-3 lg:grid-cols-5 gap-2 text-center text-xs'>
                                <p className='rounded-md p-2 bg-background hover:bg-green hover:text-white cursor-pointer' onClick={() => handleClick(role)}>{role}</p>
                                <p className='rounded-md p-2 bg-background hover:bg-green hover:text-white cursor-pointer' onClick={() => handleClick(level)}>{level}</p>
                                {languages.map((language, index) => (
                                    <p key={index} className='rounded-md p-2 bg-background hover:bg-green hover:text-white cursor-pointer' onClick={() => handleClick(language)}>{language}</p>
                                ))}
                                {tools.map((tool, index) => (
                                    <p key={index} className='rounded-md p-2 bg-background hover:bg-green hover:text-white cursor-pointer' onClick={() => handleClick(tool)}>{tool}</p>
                                ))}
                            </div >
                        </div>
                    </article>
                })}
            </div>
        </section >
    )
}



