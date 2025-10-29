import React from 'react';
import { motion } from 'framer-motion';

function Profile() {
  return (
    <motion.div 
    initial={{ opacity: 0, x: '30px' }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="h-[200px] md:h-[400px] lg:h-full w-full flex justify-center items-center border-3 rounded-[30px] lg:rounded-[40px] border-white overflow-hidden ">
      <motion.img  transition={{duration:.3}} whileHover={{scale:1.05}}
        className="object-cover object-center w-full h-full"
        src="/profile.jpg"
        alt="Profile"
      />
    </motion.div>

  );
}

export default Profile;
