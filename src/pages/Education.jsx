import {motion} from "framer-motion"

function Education() {
  return (
    <div className="education w-full  border border-[#3d3d3d] rounded-[48px] p-8 mt-20 ">
        <div className='education-heading font-fira font-semibold text-xl mb-4 '>My Education</div>
        <div className="education-container text-[#a6a6a6]">
            <div className="education-card flex justify-between items-center">
                <div className="education-details">
                    <motion.div
                      initial={{opacity:0,y:"50px"}} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{duration:.3}} 
                      viewport={{ once: true }} 
                      className="organisation font-semibold text-xl xl:text-2xl text-white"
                    >
                      Indian Institue Of Information Technology Kota
                    </motion.div>
                    <motion.div 
                      initial={{opacity:0,y:"50px"}} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{duration:.3}} 
                      viewport={{ once: true }} 
                      className="degree font-semibold xl:text-xl text-white"
                    >
                      Bachelor Of Technology
                      </motion.div>
                    <motion.div 
                      initial={{opacity:0,y:"50px"}} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{duration:.3}} 
                      viewport={{ once: true }} 
                      className="branch italic xl:text-xl"
                    >
                      Computer Science & Engineering
                    </motion.div>
                    <motion.div 
                      initial={{opacity:0,y:"50px"}} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{duration:.3}} 
                      viewport={{ once: true }} 
                      className="year italic text-[#a6a6a6]"
                    >
                      2023-27
                    </motion.div>
                </div>
                <motion.div 
                    initial={{opacity:0,y:"50px"}} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{duration:.3}} 
                    viewport={{ once: true }} 
                    className="logo w-30 aspect-square"
                > 
                  <img className='rounded-full' src="/kota.png" alt="iiitkota" />
                </motion.div>
            </div>
        </div>
        </div>
  )
}

export default Education
