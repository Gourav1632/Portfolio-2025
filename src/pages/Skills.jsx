import React from 'react'
import SkillCard from '../components/skillpage/SkillCard'

function Skills() {
  return (
    <section style={{zIndex: -1}} id='skills' className='relative px-8 md:px-20 lg:px-40 xl:px-60 2xl:px-80 py-20 bg-[#121212] '>
      <div style={{zIndex : -1}} className="circle absolute overflow-clip top-0 right-0">
        <div className="relative -top-[120px] -right-[90px] w-[300px] aspect-square rounded-full border-[#3d3d3d] border-2"></div>
      </div>
      <div style={{zIndex : -1}} className="circle absolute overflow-clip bottom-40 left-0">
        <div className="relative  -left-[120px] w-[300px] aspect-square rounded-full border-[#3d3d3d] border-2"></div>
      </div>
      {/* Mobile Tablet Layout */}
      <div className="skills flex flex-col gap-4 z-50 lg:hidden">
        <SkillCard width="w-full" isWhite={true} title="Front-end" body="React / NextJs / Tailwind CSS / Three.js / Framer-motion / Redux Toolkit / HTML / CSS / Javascipt" />
        <div className="container flex w-full gap-10 items-center">
          <div className="skill w-full">
            <SkillCard width="w-full" isWhite={false} title="UI / UX" body="Figma / Canva" />
          </div>
          <div className="code font-fira whitespace-nowrap pr-10 font-semibold text-white text-4xl">{"< / >"}</div>
        </div>
        <SkillCard width="w-full" isWhite={false} title="Back-end" body="Node / Express / PostgreSQL / MySQL / MongoDB / Firebase / Redis / Supabase" />
        <div className="container flex w-full gap-10 items-center">
          <div className="code whitespace-nowrap font-fira pl-4 font-semibold text-white text-4xl">{"{ }"}</div>
          <div className="skill w-full">
            <SkillCard width="w-full" isWhite={true} title="Programming" body="C / C++ / Javascipt / Python" />
          </div>
        </div>
        <SkillCard width="w-full" isWhite={false} title="Other Interests" body="Game Development / Unreal Engine" />
      </div>

      {/* Desktop Layout */}
      <div className="skills lg:flex flex-col hidd en gap-4 z-50">
        <div className="web-development flex gap-4 ">
          <SkillCard width="w-[500px]" isWhite={true} title="Front-end" body="React / NextJs / Tailwind CSS / Three.js / Framer-motion / Redux Toolkit / HTML / CSS / Javascipt" />
          <SkillCard width="w-[500px]" isWhite={false} title="Back-end" body="Node / Express / PostgreSQL / MySQL / MongoDB / Firebase / Redis / Supabase" />

        </div>
        <div className="container flex w-full gap-10 items-center">
          <div className="skill w-full">
            <SkillCard width="w-50" isWhite={false} title="UI / UX" body="Figma / Canva" />
          </div>
          <div className="code font-fira whitespace-nowrap pr-10 font-semibold text-white text-4xl">{"< / >"}</div>
        </div>
        <div className="container flex w-full gap-10 items-center">
          <div className="code whitespace-nowrap font-fira pl-4 font-semibold text-white text-4xl">{"{ }"}</div>
          <div className="skill w-full">
            <SkillCard isWhite={true} title="Programming" body="C / C++ / Javascipt / Python" />
          </div>
        </div>
        <SkillCard isWhite={false} title="Other Interests" body="Game Development / Unreal Engine" />
      </div>
    </section>
  )
}

export default Skills
