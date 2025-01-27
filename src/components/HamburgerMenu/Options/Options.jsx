import React from 'react';
import { motion } from 'framer-motion';
import { red } from '@mui/material/colors';

function Options({ opened, setOpen }) {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      x: 0,
      opacity: 1,
    },
    closed: {
      x: 100,
      opacity: 0,
    },
  };

  const options = ["home", "about", "skills", "projects", "contact"];

  return (
    <motion.div
      variants={variants}
      initial={opened ? "open" : "closed"}
      animate={opened ? "open" : "closed"}
      className='flex flex-col justify-center h-full p-16 gap-8 font-[Open_Sans] text-3xl'
    >
      <motion.div variants={itemVariants} className='text-white text-xl' >
        NAVIGATION
      </motion.div>
      <motion.hr variants={itemVariants} className=' border-1 border-white w-full' />
      {options.map((option) => (
        <motion.a
          onClick={() => setOpen((prev) => !prev)}
          variants={itemVariants}
          whileHover={{ scale: 1.1, x: "10px", originX: 0 }}
          key={option}
          href={`#${option}`}
          style={{transition: 'all .01s ease'}}
          className='text-white uppercase font-semibold text-4xl no-underline cursor-pointer'
        >
          {option}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Options;
