import React from 'react';
import { FaDollarSign, FaHeart, FaLocationPin, FaMapLocation, FaShare } from 'react-icons/fa6';
import { FaShoppingBag, FaTh } from "react-icons/fa";

import { Link, useLoaderData } from 'react-router-dom';

const JobDetail = () => {
    const job=useLoaderData();
    const {_id,company_logo,status,salaryRange,location,responsibilities,jobType,title,company,description,applicationDeadline,category,requirements,hr_email,hr_name}=job;
    const formatted = new Date(applicationDeadline).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric"
})
    return (
        <div className='my-10 flex flex-col md:flex-row *:space-y-12 gap-10'>
            {/* left side  */}
            <div className='p-2 w-full md:w-3/4'>
                <div className='flex gap-5 items-center'>
                    <img src={company_logo} alt="" />
                    <div>
                        <h3 className='text-3xl font-bold'>{title}</h3>
                        <p className='font-semibold text-gray-600'>{company}</p>
                        
                    </div>
                </div>
                <div className='space-y-6'>
                    <h2 className='text-xl text-gray-500 font-semibold'>Job Description</h2>
                    <p className='p-4 border border-gray-300 rounded-xl'>{description}</p>
                </div>
                <div className='space-y-6'>
                    <h2 className='text-xl text-gray-500 font-semibold'>Responsibilities</h2>
                    <div className='p-4 border border-gray-300 rounded-xl'>
                        <ul className='list-disc p-4'>
                            {responsibilities.map((r,idx)=><li key={idx}>{r}</li>)}
                        </ul>
                    </div>
                </div>
                <div className='space-y-6'>
                    <h2 className='text-xl text-gray-500 font-semibold'>Requirements (Skills)</h2>
                    <div className='p-4 space-x-3 border border-gray-300 rounded-xl'>
                        {requirements.map((skill,idx)=><span key={idx} className='btn font-semibold hover:text-blue-300'>{skill}</span>)}
                    </div>
                </div>
                
            </div>
            {/* right side  */}
            <div className='p-2 w-full md:w-1/4'>
                {/* apply button section  */}
                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <h4 className='font-bold text-xl'>Submit Application</h4>
                        <span className='badge bg-orange-300 font-bold text-orange-700'>{status}</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Link to={`/jobApply/${_id}`} className='btn flex-1 bg-[#ef7654] text-white'>Apply</Link><span className='btn'><FaShare></FaShare></span><span className='btn'><FaHeart></FaHeart></span>
                    </div>
                </div>
                {/* job info section  */}
                <div className='space-y-6'>
                    <h2 className='text-xl text-gray-500 font-semibold'>Job Information and benefit</h2>
                    <div className='rounded-xl grid grid-cols-1 lg:grid-cols-2 p-4 border border-gray-300 gap-2'>
                        <div className='flex border border-gray-300 p-2 rounded-xl items-center gap-4'><FaTh />{category}</div>
                        <div className='flex border border-gray-300 p-2 rounded-xl items-center gap-4'><FaShoppingBag />{jobType}</div>
                        <div className='flex border border-gray-300 p-2 rounded-xl items-center gap-4'><FaLocationPin />{location}</div>
                        <div className='flex border border-gray-300 p-2 rounded-xl items-center gap-4'><FaDollarSign></FaDollarSign>{(salaryRange.min)/1000}k-{(salaryRange.max)/1000}k {salaryRange.currency}</div>
                    </div>
                </div>
                {/* deadline section  */}
                <div className='space-y-6'>
                    <h2 className='text-xl text-gray-500 font-semibold'>Deadline</h2>
                    <div className='rounded-xl p-4 border border-red-300 gap-2'>
                       <span className='badge text-lg text-orange-600 py-2 px-3'>Apply before {formatted}</span> 
                    </div>
                    
                </div>
                {/* company section  */}
                <div className='space-y-6'>
                    <h2 className='text-xl text-gray-500 font-semibold'>About Company</h2>
                    <div className='rounded-xl p-4 border border-gray-300 gap-2'>
                       <p><strong>HR Name :</strong> {hr_name}</p> 
                       <p><strong>HR email :</strong> <a href={`mailto:${hr_email}`}>{hr_email}</a></p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default JobDetail;