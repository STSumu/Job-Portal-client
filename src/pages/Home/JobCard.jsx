import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { TfiBag } from "react-icons/tfi";
import { FaDollarSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
   const {_id,company_logo,company,location,salaryRange,title,jobType,description,requirements}=job;
    return (
        <div className='card shadow-xl'>
           <div className='card-body space-y-4'>
            <div className='flex gap-4'>
              <img className='w-10' src={company_logo} alt="" />
              <div>
                <h4 className='text-xl'>{company}</h4>
                <p className='flex items-center'><IoLocationOutline className='inline' /> {location}</p>
                
              </div>
            </div> 
            <div>
              <h3 className='text-2xl font-bold'>{title}</h3>
              <div className='flex gap-6'>
                <p className='font-semibold'><TfiBag className='inline' /> {jobType}</p>
                </div>
            </div>
            <div>
               <p>
                {description}
               </p>
            </div>
            <div className='flex flex-wrap gap-2'>
                {requirements.map((skill,idx)=><p key={idx} className='btn'>{skill}</p>)}
            </div>
           </div>
           <div className='card-action px-6 pb-6 gap-4 flex flex-col justify-between'>
              <p className='flex gap-2 ml-2 items-center'>Salary: <FaDollarSign></FaDollarSign>{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
              <Link to={`/jobs/${_id}`} className="btn">See Details</Link>
           </div>
        </div>
    );
};

export default JobCard;