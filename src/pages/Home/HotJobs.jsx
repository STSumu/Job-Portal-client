import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then((res)=>res.json())
        .then((data)=>{
            setJobs(data);
        })
    },[])
    return (
        <div className='my-10'>
            <span className="text-rotate text-7xl duration-6000">
  <span className="justify-items-center">
  <span>Latest</span>
  <span className="font-bold italic px-2">Jobs</span>
  </span>
</span>
<p className='pt-3 mb-8 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem doloremque, atque quibusdam eius autem explicabo harum modi debitis natus nisi culpa odit reprehenderit a dolores, quasi sapiente dignissimos quos.</p>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            {
                jobs.map((job)=><JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
        </div>
    );
};

export default HotJobs;