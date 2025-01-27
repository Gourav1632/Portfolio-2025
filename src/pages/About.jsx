import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Education from './Education';

function About() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section id="about" className="relative font-[Open_Sans] py-20 px-8 md:px-20 lg:px-40 xl:px-60 2xl:px-80 flex flex-col items-center justify-center">
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
          className="text-2xl lg:text-3xl  flex-[70] text-justify"
        >
          Having a strong curiosity for new technologies drives me to explore and innovate, constantly learning about the latest advancements.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: '30px' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-lg lg:text-xl flex-[30] text-[#3d3d3d]"
        >
            I also love to read books, watch web series, draw and sketch.
        </motion.div>
      </div>

      <Education />
    </section>
  );
}

export default About;
