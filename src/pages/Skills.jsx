import React from 'react'
import SkillCard from '../components/skillpage/SkillCard'
import { motion } from 'framer-motion'

function Skills() {
  return (
    <section id='skills' className='relative px-8 md:px-20 lg:px-30 xl:px-40 2xl:px-80 py-20 bg-[#121212] '>
      {/* Mobile Tablet Layout */}
      <div  className="skills flex flex-col gap-4  lg:hidden">
      <div className="title text-4xl text-white font-semibold font-fira  text-right">
            Skills
          </div>
        <SkillCard width="w-full" isWhite={true} title="Front-end" body="React / NextJs / Tailwind CSS / Three.js / Framer-motion / Redux Toolkit / HTML / CSS / Javascipt" />
        <div className="container flex w-full gap-4 items-center">
          <div className="skill w-full">
            <SkillCard width="w-full" isWhite={false} title="UI / UX" body="Figma / Canva" />
          </div>
              <motion.div
              initial={{opacity:0,y:"50px"}} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{duration:.3}} 
              viewport={{ once: true }} >

          <div className="code font-fira whitespace-nowrap  font-semibold text-white text-4xl">{"< / >"}</div>
              </motion.div>
        </div>
        <SkillCard width="w-full" isWhite={false} title="Back-end" body="Node / Express / PostgreSQL / MongoDB / Redis" />
        <div className="container flex w-full gap-4 items-center">
              <motion.div
              initial={{opacity:0,y:"50px"}} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{duration:.3}} 
              viewport={{ once: true }} >
                
          <div className="code whitespace-nowrap font-fira  font-semibold text-white text-4xl">{"{../}"}</div>
              </motion.div>
          <div className="skill w-full">
            <SkillCard width="w-full" isWhite={false  } title="Programming" body="C / C++ / Javascipt / Python" />
          </div>
        </div>
        <SkillCard width="w-full" isWhite={true} title="Other Interests" body="Game Development / Unreal Engine / AI/ML" />

      </div>

      {/* Desktop Layout */}
        <div className="skills lg:flex hidden flex-col w-full gap-4 z-50">
          <div className="title text-6xl xl:text-7xl 2xl:text-8xl text-white font-semibold font-fira  text-right">
            Skills
          </div>
          <div className="container flex gap-3">
            <div className="web-development w-full flex gap-4 ">
              <SkillCard width="w-full" isWhite={true} title="Front-end" body="React / NextJs / Tailwind CSS / Three.js / Framer-motion / Redux Toolkit / HTML / CSS / Javascipt" />
            <div className="container flex w-full items-center">
                <SkillCard width="w-full" isWhite={false} title="UI / UX" body="Figma / Canva" />
              <div className="skill">
              </div>
                  <motion.div
                  initial={{opacity:0,y:"50px"}} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{duration:.3}} 
                  viewport={{ once: true }} >

              <div className="code font-fira whitespace-nowrap px-10 font-semibold text-white text-2xl  2xl:text-4xl">{"< / >"}</div>
                  </motion.div>
            </div>
          </div>

          </div>

          <div className="container flex gap-3">
            <div className="w-full flex justify-between items-center">
                  <motion.div
                  initial={{opacity:0,y:"50px"}} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{duration:.3}} 
                  viewport={{ once: true }} >

              <div className="code whitespace-nowrap font-fira px-10  font-semibold text-white text-2xl 2xl:text-4xl">
                {"{../}"}
              </div>
                  </motion.div>
                <SkillCard width="w-full" isWhite={ false} title="Back-end" body="Node / Express / PostgreSQL / MongoDB / Redis" />
            </div>
            <div className="skill w-full">
            <SkillCard width="w-full" isWhite={false} title="Programming" body="C / C++ / Javascipt / Python" />
            </div>

          </div>

            <SkillCard width="w-full" isWhite={true} title="Other Interests" body="Game Development / Unreal Engine / AI/ML" />
        </div>
    </section>
  )
}

export default Skills
