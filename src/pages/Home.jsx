import React from 'react';
import EastIcon from '@mui/icons-material/East';
import SocialLink from '../components/homepage/SocialLink';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ResumeLink from '../components/homepage/ResumeLink';
import Profile from '../components/homepage/Profile';
import ProjectsLink from '../components/homepage/ProjectsLink';
import zIndex from '@mui/material/styles/zIndex';

function Home() {
  return (
    <section className="bg-[#121212] h-screen pt-8 px-8 md:px-20 lg:px-28 font-[Open_Sans] flex flex-col items-center justify-center">
      <div className="circle absolute overflow-clip top-0 right-0 ">
        <div className="relative -top-[120px] -right-[90px] w-[300px] aspect-square rounded-full border-[#3d3d3d] border-2"></div>
      </div>

      <span className='text-white text-4xl  absolute left-4 top-4 font-handwriting'>Gourav kumar</span>
      {/* Mobile layout */}
      <div className="container text-white flex flex-col gap-6 lg:hidden z-10">
        <div className="heading text-4xl md:text-5xl font-fira font-semibold flex flex-col w-full">
          <div className="hello text-left">Hello I'm</div>
          <div className="gourav text-right">Gourav Kumar</div>
        </div>
        <div className="paragraph  text-[16px] font-[Open_Sans] text-[#a6a6a6]">
              Driven by a passion for turning ideas into{' '}
              <span className="italic font-semibold text-white">creative design</span> &{' '}
              <span className="italic font-semibold text-white">efficient code</span>{' '}.
            </div>
        <div className="contact-button flex items-center gap-3">
          <div className="lets-talk font-[Open_Sans] bg-white text-black italic rounded-3xl h-12 w-48 flex items-center justify-center text-lg cursor-pointer">
            Contact
          </div>
          <div className="arrow-icon bg-white rounded-full w-12 h-12 flex items-center justify-center">
            <EastIcon fontSize="small" className="text-black" />
          </div>
        </div>
        <div className="social-links mt-5 flex gap-3">
          <SocialLink name="LinkedIn" Icon={LinkedInIcon} />
          <SocialLink name="Github" Icon={GitHubIcon} />
        </div>
          <div className="resume-profile flex gap-6">
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
            <div className="heading whitespace-nowrap  leading-none  text-7xl xl:text-8xl 2xl:text-9xl font-fira font-semibold flex flex-col">
                <div className="hello text-left">Hello I'm</div>
            </div>
            <div className="contact-button  min-w-16 w-[300px] xl:w-[400px] 2xl:w-[500px] flex items-center gap-3 pb-3">
              <div className="lets-talk  font-[Open_Sans] bg-white text-black italic rounded-full h-10 xl:h-15 w-full flex items-center justify-center text-[16px] cursor-pointer">
                  Contact
              </div>
            <div className="arrow-icon bg-white rounded-full aspect-square h-10 xl:h-15 flex items-center justify-center">
                <EastIcon fontSize="small" className="text-black" />
            </div>
            </div>
        </div>
        <div className="bottom-heading flex items-center justify-between gap-2">
            <div className="paragraph  text-[16px] xl:text-[24px] font-[Open_Sans] text-[#a6a6a6]">
              Driven by a passion for turning ideas into{' '}
              <span className="italic font-semibold text-white">creative design</span> &{' '}
              <span className="italic font-semibold text-white">efficient code</span>{' '}.
            </div>
            <div className="heading leading-none text-7xl xl:text-8xl 2xl:text-9xl font-fira font-semibold flex flex-col w-full">
                    <div className="gourav text-right whitespace-nowrap">Gourav Kumar</div>
            </div>
        </div>
        <div className="social-project-resume-profile flex justify-between items-end lg:h-[240px] xl:h-[320px] 2xl:h-[400px] gap-5">
            <div className="social-project flex flex-col h-full justify-between gap-5 xl:w-[400px]">
                <div className="social-links flex justify-between gap-8">
                    <div className="linkedIn flex-[1]">
                        <SocialLink name="LinkedIn" Icon={LinkedInIcon} />
                    </div>
                    <div className="github flex-[1]">
                        <SocialLink name="Github" Icon={GitHubIcon} />
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
