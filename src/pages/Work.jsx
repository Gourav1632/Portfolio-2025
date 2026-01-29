import WorkCard from '../components/workpage/WorkCard'
import workExperiences from '../data/work/work'


function Work() {
  return (
    <section id='work' className='relative  py-10 bg-[#121212] overflow-hidden'>

            <div className="title text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl px-8 md:px-20 lg:px-30 xl:px-40 2xl:px-80  text-white font-semibold font-fira  text-right">
              Work
          </div>
          <hr className=' border-[#3d3d3d] border-[1px] mt-4' />
            {workExperiences.map((work, index) => (
                <WorkCard 
                    key={index} 
                    starting={work.starting} 
                    ending={work.ending} 
                    description={work.description} 
                    organisation={work.organisation} 
                    job={work.job} 
                />
            ))}
    </section>
  )
}

export default Work