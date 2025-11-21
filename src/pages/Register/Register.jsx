import React, { useContext } from "react";
import Lottie from "lottie-react";
import register from "../../assets/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";

const Register = () => {
  const {createUser}=useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regex=/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/
    if(!regex.test(password)){
      alert('Password must contain atleast 6 character,1 digit and 1 capital letter')
       return;
    }
    createUser(email,password)
    .then((result)=>{
      alert('User successfully created');
      e.target.reset();
    })
    .catch((err)=>{
      console.log(err)
    })
    
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={register} loop={true} />
        </div>
        <div className="card w-full md:w-1/2 shrink-0">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <div className="text-start">
            <form
              className="*:w-full *:flex *:flex-col space-y-6"
              onSubmit={handleRegister}
            >
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                />
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
