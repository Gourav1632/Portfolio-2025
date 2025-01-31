import React from 'react'
import SocialLink from '../components/homepage/SocialLink'
import { motion } from 'framer-motion'
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { BsArrowDownRight } from "react-icons/bs";
import SkillCard from '../components/skillpage/SkillCard';
import HoverButton from '../components/contactpage/HoverButton';

function Contact() {
  return (
    <section id='contact' className='contact relative font-[Open_Sans] py-20 px-8 md:px-20 lg:px-40 xl:px-60 2xl:px-80 flex flex-col items-center justify-center bg-[#121212] text-white'>
        <div className="about-me w-full mb-10">
        <motion.div
          initial={{ opacity: 0, x: '-30px' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
         className="heading font-fira font-semibold text-xl">.../Contacts...</motion.div> 
      </div>
      <div className="content flex flex-col gap-8 lg:flex-row">
        <div className="hello text-2xl">
            <SkillCard title="Let's Connect."  width="w-full" body="Got an idea or just want to chat? Drop a message and let’s talk!" isWhite={true}/>
            </div>
        <div className="links">
                  <motion.div
                  initial={{opacity:0,y:"50px"}} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{duration:.3}} 
                  viewport={{ once: true }} > 
        <div className="flex flex-wrap gap-2">
            <HoverButton name={"gouravpanchal1632@gmail.com"} Icon={MdEmail} link={"mailto:gouravpanchal1632@gmail.com"}/>
            <HoverButton name={"+91 94672 66486"} Icon={FaPhoneAlt} />
            <HoverButton name={"LinkedIn"} Icon={FaLinkedinIn} link={"https://www.linkedin.com/in/gourav-kumar-4230b7286/"}/>
            <HoverButton name={"Github"} Icon={PiGithubLogoFill} link={"https://github.com/Gourav1632"}/>
        </div>
                  </motion.div> 
        </div>

      </div>
    </section>
  )
}

export default Contact