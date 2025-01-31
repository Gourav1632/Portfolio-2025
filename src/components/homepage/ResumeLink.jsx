import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from 'framer-motion';

function ResumeLink() {
  return (
    <a href="https://drive.google.com/file/d/1k4FeTOcHCcrShEVivJZMOil2moYbJe29/view?usp=sharing" target='_blank' >
      <motion.button initial={{opacity:0,y:"-10px"}} animate={{opacity:1,y:"0px"}}  transition={{duration:.3}} whileHover={{scale:1.02}} className=" bg-[#39FF14] cursor-pointer  aspect-square  h-[140px] md:h-[200px] lg:h-full rounded-4xl lg:rounded-[40px] relative flex items-center justify-center">
        <BsArrowUpRight  className="text-[25px] lg:text-[30px] 2xl:text-[40px] absolute top-4 lg:top-4 right-4 lg:right-4"  />
        <span className='text-[20px] lg:text-2xl 2xl:text-3xl italic font-fira'>Resume</span>
      </motion.button>
    </a>
  );
}

export default ResumeLink;
