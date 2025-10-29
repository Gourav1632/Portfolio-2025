import React from "react";
import { AiOutlineClose } from "react-icons/ai";


const Popup = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-8">
      <div className="bg-[#1e1e1e] rounded-3xl shadow-lg max-w-md w-full relative text-[#a6a6a6]  border border-[#3d3d3d] p-8 ">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 transition"
        >
        <AiOutlineClose size={20} />
        </button>

        {/* Popup content */}
        <div className="mt-2 text-lg font-fira">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
