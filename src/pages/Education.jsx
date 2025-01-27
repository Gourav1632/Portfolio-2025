import React from 'react';
import {motion} from "framer-motion"

function Education() {
  return (
    <div className="education w-full">
        <div className='education-heading font-fira font-semibold text-xl mt-20 mb-10'>.../My Education...</div>
        <div className="education-container">
            <div className="education-card flex gap-4 items-center">
                <motion.div 
                    initial={{opacity:0,y:"50px"}} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{duration:.3}} 
                    viewport={{ once: true }} 
                    className="logo w-30 aspect-square"
                > 
                  <img src="/kota.png" alt="iiitkota" />
                </motion.div>
                <div className="education-details">
                    <motion.div
                      initial={{opacity:0,y:"50px"}} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{duration:.3}} 
                      viewport={{ once: true }} 
                      className="organisation font-semibold text-xl xl:text-2xl"
                    >
                      Indian Institue Of Information Technology Kota
                    </motion.div>
                    <motion.div 
                      initial={{opacity:0,y:"50px"}} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{duration:.3}} 
                      viewport={{ once: true }} 
                      className="degree font-semibold xl:text-xl"
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
            </div>
        </div>
        </div>
  )
}

export default Education
