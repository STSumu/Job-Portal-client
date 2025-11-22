import React, { useContext } from 'react';
import googleLogo from '../../assets/google.png'
import fbLogo from '../../assets/fb.png'
import AuthContext from '../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const SocialLogin = ({from}) => {
    const navigate=useNavigate();
    const {googleLogin,fbLogin}=useContext(AuthContext);
    const handleGoogleLogin=()=>{
          googleLogin()
          .then((result)=>{
            console.log(result);
            navigate(from);
          })
          .catch((err)=>{
            console.log(err.message);
          })
    }
    const handleFbLogin=()=>{
          fbLogin()
          .then((result)=>{
            console.log(result);
            navigate(from);
          })
          .catch((err)=>{
            console.log(err.message);
          })
    }
    return (
        <div className='flex flex-col gap-4'>
            <div className="divider">OR</div>
            <button className='btn w-full' onClick={handleGoogleLogin}><img src={googleLogo} className='w-8' alt="" />Google</button>
            <button className='btn w-full mt-2' onClick={handleFbLogin}><img src={fbLogo} className='w-8' alt="" />Facebook</button>
        </div>
    );
};

export default SocialLogin;