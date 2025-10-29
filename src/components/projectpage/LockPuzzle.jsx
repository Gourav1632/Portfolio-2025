import React, { useState } from "react";
import { motion } from "framer-motion";

const LockPuzzle = ({ correctCode = "1632", onUnlock }) => {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctCode) {
      setUnlocked(true);
      localStorage.setItem("glassesFound", "true");
      onUnlock && onUnlock();
    } else {
      setInput("");
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="relative w-[320px] p-6 rounded-sm text-center overflow-hidden border-8 border-[#010100]"
    >
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-[#c7956a]" />

      {/* Drawer interior (locked) */}
      {!unlocked && (
        <div className="relative z-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,4}$/.test(value)) {
                  setInput(value);
                }
              }}
              maxLength={4}
              inputMode="numeric"
              pattern="\d*"
              className="text-center text-lg p-2 rounded-md bg-[#2a1a10]/70 text-amber-100 border-6 border-[#010100] focus:outline-none"
              placeholder="Enter code"
            />

            <button
              type="submit"
              className="bg-[#aa5d24] hover:bg-[#8b5b37] text-amber-100 py-2 rounded-sm transition-all duration-200 border-6 border-[#010100]"
            >
              Unlock
            </button>
          </form>
        </div>
      )}

      {/* Found message (unlocked) */}
      {unlocked && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative z-10 text-center text-amber-100 flex flex-col items-center justify-center"
        >
          <p className="text-3xl mb-3 font-pixel">Found!</p>
          <motion.img
            src="glasses.png" // 👈 Replace with your actual image path
            alt="Glasses Found"
            className="w-28 h-28 object-contain mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          />
        </motion.div>
      )}

      {/* Ambient glow */}
      <motion.div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default LockPuzzle;
