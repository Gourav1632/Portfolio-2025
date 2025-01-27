import React from 'react';
import { motion } from 'framer-motion';

function ToggleButton({ opened, setOpen }) {
  return (
    <motion.button
      onClick={() => setOpen((prev) => !prev)}
      className={` toggle-button z-50 fixed top-4 right-4 overflow-hidden  ${opened? 'bg-[#39ff14] ' : 'bg-[#121212]'} w-[80px] aspect-square rounded-full  cursor-pointer`}
      whileHover= "hover"
    >
      <motion.div
        animate={opened ? 'open' : 'closed'}
        className='sticks-container relative  flex flex-col justify-center items-center'
      >
        <motion.span
          className='select-none top-stick absolute border-1 border-white bottom-[3px]  w-6 rounded-full bg-white'
          variants={{
            open: { rotate: '-45deg', top : '50%' }, // the 
            closed: {},
          }}
        />
        <motion.span
          className='select-none top-stick absolute border-1 border-white top-[3px]  w-6 rounded-full bg-white'
          variants={{
            open: { rotate: '45deg', top : '50%' }, // the 
            closed: {},
          }}
        />
      </motion.div>

      <motion.div
        style={{zIndex:-1}}
        className='select-none toggle-button-overlay absolute bg-[#39ff14] rounded-full h-[90px] aspect-square'
        initial={{ y: '100%',x:'-5px' }}
        variants ={{hover: { y: '-49%' }}}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
      </motion.div>
    </motion.button>
  );
}

export default ToggleButton;
