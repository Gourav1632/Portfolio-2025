import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import projects from '../../json/projects/projects';

function ProjectFilter({ onClose, onApply, selectedCategories, selectedTechnologies }) {
  const categories = [...new Set(projects.flatMap(p => p.category))];
  const technologies = [...new Set(projects.flatMap(p => p.tech))];

  const [currentSelectedCategories, setCurrentSelectedCategories] = useState([]);
  const [currentSelectedTechnologies, setCurrentSelectedTechnologies] = useState([]);

  
  const filterRef = useRef(null);

  useEffect(() => {
    setCurrentSelectedCategories(selectedCategories);
    setCurrentSelectedTechnologies(selectedTechnologies);
  }, [selectedCategories, selectedTechnologies]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const toggleCategory = (category) => {
    setCurrentSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const toggleTechnology = (tech) => {
    setCurrentSelectedTechnologies((prev) =>
      prev.includes(tech)
        ? prev.filter((item) => item !== tech)
        : [...prev, tech]
    );
  };

  const resetAll = () => {
    setCurrentSelectedCategories([]);
    setCurrentSelectedTechnologies([]);
  };

  return (
    <motion.div
      initial={{ y: window.innerWidth < 768 ? '100%' : 0, x: window.innerWidth >= 768 ? '-100%' : 0 }}
      animate={{ y: 0, x: 0 }}
      exit={{ y: window.innerWidth < 768 ? '100%' : 0, x: window.innerWidth >= 768 ? '-100%' : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bg-[rgba(18,18,18,0.8)] backdrop-blur-md bottom-0 left-0 w-full md:w-1/3 h-[60vh] md:h-full border-t border-[#333] z-[9999] rounded-t-2xl md:rounded-l-2xl shadow-2xl pb-16"
    >
      <div ref={filterRef} className="h-full flex flex-col">
        {/* Header */}
        <div className="flex px-6 justify-between items-center mb-4 pt-4">
          <button onClick={onClose} className='text-[#ffc0cb] hover:text-white '>Cancel</button>
          <h3 className="text-white text-lg font-semibold">Filter</h3>
          <button onClick={resetAll} className='text-[#ffc0cb] hover:text-white '>Reset All</button>
        </div>

        {/* Filters */}
        <div className="flex-1 px-6 overflow-y-auto">
          {/* Category */}
          <div className="text-white mb-2">Category</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((name, id) => {
              const isSelected = currentSelectedCategories.includes(name);
              return (
                <button
                  key={id}
                  onClick={() => toggleCategory(name)}
                  className={`font-fira rounded-full px-4 py-2 text-sm transition ${
                    isSelected
                      ? 'text-white bg-gradient-to-r from-[#a32132] to-[#b8001f]'
                      : 'text-[#ffc0cb] bg-[#B8001F]/30'
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>

          {/* Technologies */}
          <div className="text-white mb-2">Technologies</div>
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((name, id) => {
              const isSelected = currentSelectedTechnologies.includes(name);
              return (
                <button
                  key={id}
                  onClick={() => toggleTechnology(name)}
                  className={`font-fira rounded-full px-4 py-2 text-sm transition ${
                    isSelected
                      ? 'text-white bg-gradient-to-r from-[#a32132] to-[#b8001f]'
                      : 'text-[#ffc0cb] bg-[#B8001F]/30'
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-[10000] w-full px-6">
          <button
            onClick={() => {
              onApply({
                categories: currentSelectedCategories,
                technologies: currentSelectedTechnologies,
              });
              onClose();
            }}
            className="w-full bg-gradient-to-r from-[#a32132] to-[#b8001f] text-white font-fira px-6 py-3 rounded-full transition"
          >
            Apply
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectFilter;
