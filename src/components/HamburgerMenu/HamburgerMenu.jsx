import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ToggleButton from './ToggleButton/ToggleButton';
import Options from './Options/Options';

function HamburgerMenu() {
  const menuRef = useRef(null); // Add the ref back here
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(200% at 200% 50%)",
      transition: {
        type: "spring",
        stiffness: 30,
      },
    },
    closed: {
      clipPath: "circle(0% at 200% 50%)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
  };

  // Handle click outside the menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='hamburger-menu' ref={menuRef}>
      <ToggleButton opened={open} setOpen={setOpen} />
      <motion.div
        className="z-40  bg-[rgba(18,18,18,0.8)] backdrop-blur-md  h-screen max-w-screen lg:max-w-[400px] xl:max-w-xl fixed right-0 top-0 w-full"
        variants={variants}
        initial={false}
        animate={open ? "open" : "closed"}
      >
        <Options setOpen={setOpen} opened={open} />
      </motion.div>
    </div>
  );
}

export default HamburgerMenu;
