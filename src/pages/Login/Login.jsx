import React, { useContext } from "react";
import Lottie from "lottie-react";
import login from "../../assets/login.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {loginUser}=useContext(AuthContext);
  const location=useLocation();
  const from=location.state || '/';
  console.log(location.state)
  const navigate=useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email,password)
    .then((result)=>{
      alert('User successfully logged in.');
      navigate(from);
    })
    .catch((err)=>{
      console.log(err)
    })
    
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="card w-full md:w-1/2 shrink-0">
          <h1 className="text-5xl font-bold mb-6">Login now!</h1>
          <div className="text-start">
            <form
              className="*:w-full *:flex *:flex-col space-y-6"
              onSubmit={handleSignIn}
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral text-black border-0 bg-[#87eafb] mt-4">Login</button>
            </form>
            <SocialLogin from={from}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
