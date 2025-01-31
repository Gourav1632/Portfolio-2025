import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Education from './Education';

function About() {
  // const ref = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start end', 'end start'],
  // });
  // const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  // const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section id="about" className="relative font-[Open_Sans] bg-[#121212] text-white py-20 px-8 md:px-20 lg:px-40 xl:px-60 2xl:px-80 flex flex-col items-center justify-center">
      <div className="about-me w-full mb-10">
        <motion.div
          initial={{ opacity: 0, x: '-30px' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
         className="heading font-fira font-semibold text-xl">.../About me...</motion.div> 
      </div>
      <div className=" flex flex-col lg:flex-row gap-10 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: '-30px' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl lg:text-3xl  flex-[70] text-[#a6a6a6]"
        >
          Hi! I'm Gourav, a <span className='italic text-white'>full-stack developer</span> with a strong curiosity for new technologies, always exploring, innovating, and staying updated with the latest advancements.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: '30px' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl lg:text-3xl flex-[30] "
        >
            "The only way to do great work is to love what you do." — <span className='text-[#a6a6a6] italic font-bold'>Steve Jobs</span>
        </motion.div>
      </div>

      <Education />
    </section>
  );
}

export default About;
