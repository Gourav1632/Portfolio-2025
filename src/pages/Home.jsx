
import React from "react";
import SocialLink from "../components/homepage/SocialLink";
import { FaLinkedinIn } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io";
import Typewriter from 'typewriter-effect';




function Home() {
  return (
    <section
    id="home"
    className="bg-[#121212] min-h-screen flex items-center justify-center font-[Open_Sans] text-gray-300"
    >
      {/* Main content container */}
      <div className="p-10 flex flex-col items-center justify-center text-center relative">
        {/* Avatar + Message Box Wrapper */}
        <div className="relative flex items-center justify-center">
          {/* Avatar */}
          <div className="relative w-[300px] h-[300px]">
            <img
              src="./avatar/happy.png"
              alt="avatar"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Message box (same height as avatar) */}
          <div className="relative h-[150px]  translate-y-10 -translate-x-10 w-[280px]  rounded-xl shadow-lg flex items-center">
            <p className="text-3xl font-pixel text-gray-400 leading-relaxed px-4">
              <Typewriter
                options={{
                  strings: ['zzz...zzz...'],
                  cursor: '',
                  deleteSpeed: 50,
                  autoStart: true,
                  loop: true,
                }}
              />
              
            </p>
          </div>
        </div>

        {/* Full-width separator line */}
        <div className="w-full flex items-center gap-6 py-4 ">
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Tagline */}
        <div className="text-2xl md:text-3xl font-light space-y-2 ">
          <p>Turning ideas into reality</p>
          <p>
            through{" "}
            <span className="font-fira font-bold">Code</span> &{" "}
            <span className="font-fira font-bold">Creativity</span>
              
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center items-center  gap-8 mt-10 text-gray-400 ">
          <SocialLink link={"fawewa"} Icon={PiReadCvLogoFill } />
          <SocialLink link={"fawef"} Icon={IoLogoGithub } />
          <SocialLink link={"fafwe"} Icon={FaLinkedinIn} />

        </div>
      </div>
    </section>
  );
}

export default Home;
