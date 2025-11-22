import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const JobApply = () => {
    const {user}=useAuth();
    const navigate=useNavigate();
    const {id}=useParams();
    const handleApply=(e)=>{
        e.preventDefault();
        const github=e.target.git.value;
        const linkedIn=e.target.linkedIn.value;
        const resume=e.target.resume.value;
        const application={
            job_id:id,
            applicantEmail:user.email,
            github,
            linkedIn,
            resume,
        }
        fetch('http://localhost:5000/jobApply',{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(application),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
               Swal.fire({
  icon: "success",
  title: "Your application has been submitted",
  showConfirmButton: false,
  timer: 1500
})
.then(()=>{
    navigate(`/jobs/${id}`)
})
            }
        })
    }
  return (
    <div className="flex flex-col items-center my-20">
      <h2 className="text-2xl font-bold my-5">Apply for the job</h2>
      <form onSubmit={handleApply} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <div className="flex flex-col gap-2">
            <label className="label">Github Profile Link <span className="text-red-700">*</span></label>
        <input required type="url" name="git" className="input" placeholder="Github Link" />
        </div>
        <div className="flex flex-col gap-2">
            <label className="label">LinkedIn Profile Link<span className="text-red-700">*</span></label>
        <input required type="url" name="linkedIn" className="input" placeholder="LinkedIn Link" />
        </div>
        <div className="flex flex-col gap-2">
            <label className="label">Resume Link<span className="text-red-700">*</span></label>
        <input required type="url" name="resume" className="input" placeholder="Resume Link" />
        </div>

        <button className="btn btn-neutral mt-4">Apply</button>
      </form>
    </div>
  );
};

export default JobApply;
