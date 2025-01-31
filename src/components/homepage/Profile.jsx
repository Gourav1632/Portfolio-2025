import React from 'react';
import { motion } from 'framer-motion';

function Profile() {
  return (
    <motion.div initial={{opacity:0,y:"-10px"}} animate={{opacity:1,y:"0px"}}  transition={{duration:.5}} className="h-[140px] md:h-[200px] lg:h-full w-full flex justify-center items-center border-3 rounded-[30px] lg:rounded-[40px] border-white overflow-hidden ">
      <motion.img  transition={{duration:.3}} whileHover={{scale:1.05}}
        className="object-cover object-center w-full h-full"
        src="/profile.jpg"
        alt="Profile"
      />
    </motion.div>

  );
}

export default Profile;
