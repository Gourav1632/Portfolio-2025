import React from 'react'
import Tech from './Tech'
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";
import { PiGithubLogoFill } from "react-icons/pi";
import { motion } from 'framer-motion';

function ProjectCard({title,description,img, link,github,tech , leftAlign}) {
  return (
      <div className={` ${leftAlign? 'lg:flex-row' : 'lg:flex-row-reverse'} project flex flex-col  gap-4 lg:gap-20`}>
         {/* image container */}
        <motion.div
        initial={{opacity:0,y:"50px"}} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{duration:.3}} 
        viewport={{ once: true }} >
         <div className="image">    
                <div className="project-img rounded-4xl overflow-clip">
                    <img src={img} alt="" />
                </div>

         </div>
            </motion.div>

        {/* content container  */}
        <div className="content flex flex-col gap-4 lg:w-[800px]">
        <motion.div
        initial={{opacity:0,y:"50px"}} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{duration:.3}} 
        viewport={{ once: true }} > 
            <div className="title  text-white font-[Open_Sans] text-[16px] lg:text-xl">{title}</div>
        </motion.div>
            <motion.div
        initial={{opacity:0,y:"50px"}} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{duration:.3}} 
        viewport={{ once: true }} > 
            <div className="tech-stack flex flex-wrap gap-2">
                {
                    tech.map((name,id)=>(
                        <Tech key={id} name={name} />
                    ))
                }
            </div>
                </motion.div>
            <motion.div
        initial={{opacity:0,y:"50px"}} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{duration:.3}} 
        viewport={{ once: true }} > 
            <div className="description text-[12px] lg:text-[14px] text-[#a6a6a6] italic">{description}</div>
        </motion.div>
            {/* links */}
            <motion.div
        initial={{opacity:0,y:"50px"}} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{duration:.3}} 
        viewport={{ once: true }} > 
            <div className="links flex gap-10">
                <div className=" relative github-link flex items-center">
                    <div className="github-icon border-[#a6a6a6] border-1 rounded-full aspect-square w-10 flex justify-center items-center"><PiGithubLogoFill size={16} className='text-white' /></div>
                    <motion.div transition={{duration:.3}} whileHover={{scale:1.05}} className="cursor-pointer hover:bg-[#b8001f] absolute redirect-icon  bg-white rounded-full aspect-square w-10 flex justify-center items-center left-7 text-black hover:text-white"><a  target='_blank' href={github }><BsArrowUpRight size={16} className=''/></a></motion.div>
                </div>
                <div className=" relative github-link flex items-center">
                    <div className="github-icon border-[#a6a6a6] border-1 rounded-full aspect-square w-10 flex justify-center items-center"><IoIosLink size={16} className='text-white' /></div>
                    <motion.div transition={{duration:.3}} whileHover={{scale:1.05}} className="cursor-pointer hover:bg-[#b8001f] absolute redirect-icon bg-white rounded-full aspect-square w-10 flex justify-center items-center left-7 text-black hover:text-white"><a  target='_blank' href={link}><BsArrowUpRight size={16} className=''/></a></motion.div>
                </div>
            </div>
        </motion.div>

        </div>
    </div>
  )
}

export default ProjectCard