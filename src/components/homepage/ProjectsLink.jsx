import React from 'react'
import { motion } from 'framer-motion';

function ProjectsLink() {
    return (
        <a      
        href="#projects">
          <motion.button initial={{opacity:0,y:"-10px"}} animate={{opacity:1,y:"0px"}}  transition={{duration:.3}} whileHover={{scale:1.02}} className="bg-[#3d3d3d] cursor-pointer w-full lg:w-full h-[140px] md:h-[200px] lg:h-full rounded-4xl relative flex items-center justify-center">
            <span className='italic text-[16px] lg:text-[20px] 2xl:text-2xl font-fira  '>View Projects</span> 
          </motion.button>
        </a>
      );
}

export default ProjectsLink
