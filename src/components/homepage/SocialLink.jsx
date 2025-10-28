import React from 'react';
import { motion } from 'framer-motion';

function SocialLink({ link, Icon }) {
  return (
    <a href={link} className='h-[44px] lg:h-[40px] xl:h-[48px]' target="_blank">
      <motion.button initial={{opacity:0,y:"-10px"}} animate={{opacity:1,y:"0px"}}  transition={{duration:.3}} whileHover={{scale:1.05}}  className="text-[#a7a7a7] button border-[#3d3d3d] cursor-pointer border-3 rounded-2xl p-3 aspect-square flex justify-center items-center ">
        <Icon size={24}  />
        {/* <span className='text-[#a6a6a6]'>{name}</span> */}
      </motion.button>
    </a>

  );
}

export default SocialLink;
