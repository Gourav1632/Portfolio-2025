import { useContext, useState } from 'react';
import ProjectCard from '../components/projectpage/ProjectCard';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectFilter from '../components/projectpage/ProjectFilter';
import { FiSliders } from "react-icons/fi";
import projects from '../data/projects/projects';
import Popup from '../components/homepage/Popup';
import LockPuzzle from '../components/projectpage/LockPuzzle'; 
import { GameContext } from '../contexts/GameContext';

function Projects() {
  const {foundLockedDrawer,setFoundLockedDrawer, foundGlasses, setFoundGlasses} = useContext(GameContext);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false); 

  const toggleFilter = () => setIsFilterOpen(prev => !prev);

  const handleApplyFilters = ({ categories, technologies }) => {
    const filtered = projects.filter(project => {
      const matchesCategory = categories.length > 0 && categories.some(cat => project.category.includes(cat));
      const matchesTech = technologies.length > 0 && technologies.some(tech => project.tech.includes(tech));
      return matchesCategory || matchesTech || (categories.length === 0 && technologies.length === 0);
    });
  
    setFilteredProjects(filtered);
    setSelectedCategories(categories);
    setSelectedTechnologies(technologies);
  };

  return (
    <section id='projects' className='relative px-8 md:px-20 lg:px-30 xl:px-40 2xl:px-80 py-20 bg-[#121212]'>

      {/* Top bar */}
      <div className='flex items-center justify-between mb-4'>
        <button onClick={toggleFilter} className="text-white hover:text-[#b8001f] transition-colors duration-300">
          <FiSliders size={24} />
        </button>
        <div className="title text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl p text-white font-semibold font-fira text-right">
          Projects
        </div>
      </div>

      {/* Projects list */}
      <div className="projects flex flex-col gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ type: 'spring', stiffness: 100, damping: 25 }}
            >
              <ProjectCard 
                leftAlign={index % 2 !== 0} 
                title={project.title} 
                img={project.img} 
                description={project.description} 
                github={project.github} 
                link={project.link} 
                tech={project.tech} 
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {!foundGlasses && (
      <motion.div
        onClick={() => {
          setShowDrawer(true)
          if (!foundLockedDrawer) setFoundLockedDrawer(true);
        }
        }
        whileHover={{ y: -3, scale: 1.02 }}
        className="absolute bottom-0 right-4 cursor-pointer group"
      >
        <img
          src="drawer.png"
          alt="drawer"
          className="w-[100px] lg:w-[160px] object-cover group-hover:brightness-110 transition"
        />
      </motion.div>
      )
      }


      {/* Popup with Lock Puzzle */}
      <Popup show={showDrawer} onClose={() => setShowDrawer(false)}>
        <div className='w-full flex justify-center items-center'>
          <LockPuzzle 
          onUnlock={() => {
            if(!foundGlasses)setFoundGlasses(true)
            }} />
        </div>
      </Popup>

      {/* Filter panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <ProjectFilter
            onClose={toggleFilter}
            onApply={handleApplyFilters}
            selectedCategories={selectedCategories}
            selectedTechnologies={selectedTechnologies}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
