import React from 'react'
import WorkCard from '../components/workpage/WorkCard'

function Work() {
  return (
    <section id='work' className='relative  py-10 bg-[#121212] overflow-hidden'>
            <div className="title text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl px-8 md:px-20 lg:px-30 xl:px-40 2xl:px-80  text-white font-semibold font-fira  text-right">
              Work
          </div>
          <hr className=' border-[#3d3d3d] border-[1px] mt-4' />
            <WorkCard starting="Jan 2025"  ending="Present" description="Responsible for designing and developing UI/UX for the institute's web projects. Collaborating with team members to improve user experience and accessibility." organisation="IIIT Kota" job="Web Team | UI/UX Designer" />
    </section>
  )
}

export default Work