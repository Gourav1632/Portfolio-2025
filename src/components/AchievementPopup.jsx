import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AchievementPopup = ({ show,img, title = "Achievement Unlocked!", description = "You found the hidden glasses!" }) => {


  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 150 }}     
          animate={{ opacity: 1, x: 0 }}      
          exit={{ opacity: 0, x: 150 }}      
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-[#1b2838] to-[#2a475e] text-white 
                     shadow-lg rounded-sm p-4 flex items-center gap-4 w-[320px] border border-[#66c0f4]
                     overflow-hidden z-[100]"
        >
          <div className="text-[#66c0f4] text-3xl w-[60px] bg-gray-400 border-2 border-black rounded-sm p-2">
            <img src={img} alt="" />
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg">{title}</h4>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementPopup;
