import React from 'react'
import { motion } from 'framer-motion'

function SkillCard({title, body,isWhite,width}) {
  return (
    <motion.div
    initial={{opacity:0,y:"50px"}} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{duration:.3}}
    whileHover={{scale:1.02}} 
    viewport={{ once: true }} 
    className={`skill ${width} ${isWhite ? 'bg-white text-black' : 'bg-[#121212] text-white border border-[#3d3d3d] '} lg:h-full rounded-[48px] h-auto font-[Open_Sans] p-8`}>
        <div className="title text-xl mb-2 text-[#a6a6a6]">
            {title}
        </div>
        <div className="body font-fira leading-8 ">{body}</div>
    </motion.div>
  )
}

export default SkillCard
