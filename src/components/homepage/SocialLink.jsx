import { motion } from 'framer-motion';

function SocialLink({ alt, link, Icon }) {
  return (
    <a
      href={link}
      className="relative inline-block h-[44px] lg:h-[40px] xl:h-[48px] group"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Tooltip */}
      <div
        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                   bg-[#2a2a2a] text-gray-200 text-xs px-2 py-1 rounded-md opacity-0
                   group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 z-10"
      >
        {alt || "No title"}
      </div>

      <motion.button
        initial={{ opacity: 0, y: "-10px" }}
        animate={{ opacity: 1, y: "0px" }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        className="text-[#a7a7a7] button border-[#3d3d3d] cursor-pointer border-3 rounded-2xl p-3 aspect-square flex justify-center items-center"
      >
        <Icon size={24} />
      </motion.button>
    </a>
  );
}

export default SocialLink;
