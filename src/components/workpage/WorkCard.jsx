import React,{useState} from 'react'
import { motion } from 'framer-motion'

function WorkCard({organisation, job, starting, ending,description}) {
    const [open,setOpen] = useState(false)
  return (
        <motion.div
        initial={{opacity:0,y:"50px"}} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{duration:.3}} 
        viewport={{ once: true }}
         >
  <div  className={`${open ? 'bg-white text-[#121212] ' : 'text-[#d3d3d3]'} hover:bg-white hover:text-[#121212] cursor-pointer flex flex-col  gap-4 pt-4`}>
    <div onClick={()=> setOpen(!open)} className=' px-8 md:px-20 lg:px-20 xl:px-40 2xl:px-80 font-[Open_Sans] flex   items-center  text-2xl  gap-15 lg:gap-30'>
        <div className="duration min-w-1/6 text-[#a6a6a6] text-[12px] lg:text-xl  flex flex-col lg:flex-row">
            <div className="starting">{starting} -&nbsp;</div>
            <div className="ending"> {ending}</div>
        </div>
        <div className="work w-full flex flex-col lg:flex-row gap-2 lg:gap-50">
            <div className="organisation text-[14px] lg:text-2xl">{organisation}</div>
            <div className="job font-fira text-[14px] lg:text-2xl">{job}</div>
        </div>
    </div>
    <motion.div
        initial={{height : 0}}
        animate = {open? {height: 'auto' ,visibility : 'visible'} : {height : 0, visibility : 'hidden'}}
        transition={{duration: 0.5}}
        className='text-[#3d3d3d] px-8 md:px-20 lg:px-20 xl:px-40 2xl:px-80 font-fira text-[14px] lg:text-xl overflow-hidden '
    >
        {description}
    </motion.div>
    <hr className='w-full border-[#3d3d3d] border-[1px]' />
  </div>
  </motion.div>
  )
}

export default WorkCard