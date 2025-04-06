import React, { useState, useRef, useLayoutEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function WorkCard({ organisation, job, starting, ending, description }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  

  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open, description]);

  return (
    <motion.div
      onClick={() => setOpen(!open)}
      initial={{ opacity: 0, y: "50px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div
        className={`${
          open ? "bg-white text-[#121212]" : "text-[#d3d3d3]"
        } cursor-pointer flex flex-col gap-4 pt-4`}
      >
        <div className="px-8 md:px-20 lg:px-20 xl:px-40 2xl:px-80 font-[Open_Sans] flex items-center text-2xl gap-15 lg:gap-30">
          <div className="duration min-w-1/6 text-[#a6a6a6] text-[12px] lg:text-xl flex flex-col lg:flex-row">
            <div className="starting whitespace-nowrap">{starting} -&nbsp;</div>
            <div className="ending whitespace-nowrap">{ending}</div>
          </div>
          <div className="work w-full flex flex-col lg:flex-row gap-2 lg:gap-50 justify-between text-right">
            <div className="organisation text-[14px] lg:text-2xl ">
              {organisation}
            </div>
            <div className="job font-fira text-[14px] lg:text-2xl ">
              {job}
            </div>
          </div>
        </div>

        <AnimatePresence>
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: open ? height : 0,
              opacity: open ? 1 : 0,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden px-8 md:px-20 lg:px-20 xl:px-40 2xl:px-80 font-fira text-[14px] lg:text-xl text-[#3d3d3d] text-justify"
            style={{ pointerEvents: open ? 'auto' : 'none' }}
          >
            <div ref={contentRef}>
              {description}
            </div>
          </motion.div>
        </AnimatePresence>

        <hr className="w-full border-[#3d3d3d] border-[1px]" />
      </div>
    </motion.div>
  );
}

export default WorkCard;
