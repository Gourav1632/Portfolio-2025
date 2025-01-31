import React from 'react'
import ProjectCard from '../components/projectpage/ProjectCard'
import { motion } from 'framer-motion'
import projects from '../json/projects/projects'
function Projects() {
  return (
    <section id='projects' className='relative font-[Open_Sans] py-20 px-8 md:px-20 lg:px-40 xl:px-60 2xl:px-80 flex flex-col items-center justify-center bg-[#121212] text-white'>
      
        <div className="w-full mb-10">
        <motion.div
            initial={{ opacity: 0, x: '-30px' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="heading font-fira font-semibold text-xl text-white">.../Projects...</motion.div> 
        </div>
          <div className="projects flex flex-col gap-30">
                {
                    projects.map((project,index) =>(
                        <ProjectCard leftAlign={index % 2 != 0} key={index} title={project.title} img={project.img} description={project.description} github={project.github} link={project.link} tech={project.tech} />
                    ))
                }
          </div>
    </section>
  )
}

export default Projects