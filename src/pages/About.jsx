import { motion, } from 'framer-motion';
import Education from './Education';
import Profile from '../components/homepage/Profile'

function About() {

  return (
    <section id="about" className="relative font-[Open_Sans] bg-[#121212] text-white px-8 md:px-20 lg:px-40 xl:px-60 2xl:px-80 flex flex-col items-center justify-center">
      
      <div className=" flex flex-col lg:flex-row gap-10 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: '-30px' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl lg:text-3xl  flex-[70] text-[#a6a6a6]  border border-[#3d3d3d] rounded-[48px] p-8"
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
          <Profile />
        </motion.div>
      </div>

      <Education />
    </section>
  );
}

export default About;
