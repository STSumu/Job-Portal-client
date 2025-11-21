import React from 'react';
import img1 from '../../assets/banner1.jpg'
import img2 from '../../assets/banner2.jpg'
import { easeIn, easeOut, motion } from "motion/react"

const Banner = () => {
    return (
        <div className="hero min-h-48">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1 overflow-auto'>
      <motion.img
      animate={{y:[25,75,25]}}
      transition={{duration:5,repeat:Infinity,ease:easeOut}}
      src={img1}
      className="w-80 border-l-4 border-b-4 border-[#ef7654] rounded-t-3xl rounded-br-3xl shadow-2xl"
    />
      <motion.img
      animate={{x:[100,150,100]}}
      transition={{duration:5,repeat:Infinity,ease:easeOut}}
      src={img2}
      className="w-80 border-l-4 border-b-4 border-[#ef7654] rounded-t-3xl rounded-br-3xl shadow-2xl"
    />
    </div>
    <div className='flex-1 text-start'>
      <motion.h1
      animate={{x:100}}
            transition={{duration:5,repeat:Infinity}} 
       className="text-5xl font-bold">Latest <motion.span
      animate={{ color: ['#ef7654', '#c84320','#87eafb'] }}
  transition={{ duration: 5, repeat: Infinity }}
      >Jobs</motion.span> for you!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;