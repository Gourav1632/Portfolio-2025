import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import SocialLink from '../components/homepage/SocialLink';
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import ResumeLink from '../components/homepage/ResumeLink';
import Profile from '../components/homepage/Profile';
import ProjectsLink from '../components/homepage/ProjectsLink';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section id='home' className="bg-[#121212]  min-h-screen p-8 px-8 md:px-10 md:px-20 lg:px-28 font-[Open_Sans] flex flex-col items-center justify-center">
      <div className="circle absolute overflow-clip top-0 right-0 ">
        <div className="relative -top-[120px] -right-[90px] w-[300px] aspect-square rounded-full border-[#3d3d3d] border-2"></div>
      </div>

      <motion.span initial={{opacity:0,y:"-10px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.5}} className='text-white text-4xl  absolute left-4 top-4 font-handwriting'>Gourav kumar</motion.span>
      {/* Mobile layout */}
      <div className="container text-white flex flex-col gap-6 lg:hidden z-10">
        <div className="heading text-4xl md:text-5xl font-fira font-semibold flex flex-col w-full">
          <motion.div initial={{opacity:0,y:"-10px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.5}} className="hello text-left">Hello I'm</motion.div>
          <motion.div initial={{opacity:0,y:"-10px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.5}} className="gourav text-right">Gourav Kumar</motion.div>
        </div>
        <motion.div initial={{opacity:0,y:"-10px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.5}} className="paragraph  text-[16px] font-[Open_Sans] text-[#a6a6a6]">
              Driven by a passion for turning ideas into{' '}
              <span className="italic font-semibold text-white">creative design</span> &{' '}
              <span className="italic font-semibold text-white">efficient code</span>{' '}.
            </motion.div>
        <motion.div initial={{opacity:0,y:"-10px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.5}} className="contact-button flex items-center gap-3">
          <div className="lets-talk font-fira  bg-white text-black italic rounded-3xl h-12 w-48 flex items-center justify-center text-lg">
            Say Hello
          </div>
          <a href="#contact">
          <div className="arrow-icon cursor-pointer bg-white rounded-full w-12 h-12 flex items-center justify-center">
            <BsArrowRight size={25} className="text-black flex " />
          </div>
            </a>
        </motion.div>
        <div className="social-links mt-5 flex gap-3">
          <SocialLink name="LinkedIn" Icon={FaLinkedinIn} link={"https://www.linkedin.com/in/gourav-kumar-4230b7286/"} />
          <SocialLink name="Github" Icon={PiGithubLogoFill} link={"https://github.com/Gourav1632"} />
        </div>
          <div className="resume-profile h- flex gap-6">
            <ResumeLink />
            <Profile />
          </div>
          <div className="project-link">
            <ProjectsLink />
          </div>
      </div>

      {/* Desktop layout */}

      <div className="container text-white flex-col gap-6 hidden lg:flex z-10">
        <div className="top-heading flex items-end justify-between">
            <div className="heading whitespace-nowrap  leading-none  text-7xl xl:text-8xl  2xl:text-9xl font-fira font-semibold flex flex-col">
            <motion.div initial={{opacity:0,y:"-10px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.5}} className="hello text-left">Hello I'm</motion.div>

            </div>
            <motion.div initial={{opacity:0,y:"-10px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.5}} className="contact-button  min-w-16 w-[300px] xl:w-[400px] 2xl:w-[500px] flex items-center  gap-3  pb-3">
              <div className="lets-talk  font-fira bg-white text-black italic rounded-full h-10 xl:h-12 2xl:h-15 w-full flex items-center justify-center text-[16px]">
                  Say Hello
              </div>
            <a href="#contact">
            <div className="arrow-icon hover:bg-[#39ff14] bg-white rounded-full aspect-square h-10 xl:h-15 flex items-center justify-center cursor-pointer">
              <BsArrowRight size={25} className="text-black flex " />
            </div>
              </a>
            </motion.div>
        </div>
        <div className="bottom-heading flex items-center justify-between gap-2">
            <motion.div initial={{opacity:0,y:"-10px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.5}}  className="paragraph  text-[16px] xl:text-[24px] font-[Open_Sans] text-[#a6a6a6]">
              Driven by a passion for turning ideas into{' '}
              <span className="italic font-semibold text-white">creative design</span> &{' '}
              <span className="italic font-semibold text-white">efficient code</span>{' '}.
            </motion.div>
            <div className="heading leading-none text-7xl xl:text-8xl  2xl:text-9xl font-fira font-semibold flex flex-col w-full">
                              <motion.div initial={{opacity:0,y:"-10px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.5}} className="gourav text-right">Gourav Kumar</motion.div>

            </div>
        </div>
        <div className="social-project-resume-profile flex justify-between items-end lg:h-[240px] 2xl:h-[400px] gap-5">
            <div className="social-project flex flex-col h-full justify-between gap-5 xl:w-[400px]">
                <div className="social-links flex justify-between gap-8">
                    <div className="linkedIn flex-[1]">
                    <SocialLink name="LinkedIn" Icon={FaLinkedinIn} link={"https://www.linkedin.com/in/gourav-kumar-4230b7286/"} />
                    </div>
                    <div className="github flex-[1]">
                    <SocialLink name="Github" Icon={PiGithubLogoFill} link={"https://github.com/Gourav1632"} />
                    </div>
                </div>
                <div className="project-link h-full">
                    <ProjectsLink />
                </div>
            </div>
            <div className="resume  h-full">
                <ResumeLink />
            </div>
            <div className="profile flex-auto h-full">
                <Profile />
            </div>
        </div>
      </div>

    </section>
  );
}

export default Home;
