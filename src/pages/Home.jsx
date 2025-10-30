import  { useContext, useEffect, useState } from "react";
import SocialLink from "../components/homepage/SocialLink";
import { FaLinkedinIn } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import dialogues from "../data/game/dialogues";
import { GameContext } from "../contexts/GameContext";
import Popup from "../components/homepage/Popup";

function Home() {
  const { foundLockedDrawer, foundGlasses, setFoundLockedDrawer } = useContext(GameContext);

  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const [avatarImage, setAvatarImage] = useState("/avatar/happy.png");
  const [activeDialogues, setActiveDialogues] = useState(dialogues.base);

  useEffect(() => {
    let updatedDialogues = dialogues.base;
    let newAvatar = "/avatar/happy.png";

    if (foundGlasses && foundLockedDrawer) {
      updatedDialogues = dialogues.afterGlasses;
      newAvatar = dialogueIndex === 0 ? "/avatar/surprised.png" : "/avatar/happy_glasses.png";
    } else if (foundLockedDrawer) {
      updatedDialogues = dialogues.afterDrawer;
      newAvatar = dialogueIndex === 0 ? "/avatar/surprised.png" : "/avatar/smirk.png";
    } else if (foundGlasses){
      updatedDialogues = dialogues.normal;
      newAvatar = "/avatar/happy_glasses.png";
    }
    
    setActiveDialogues(updatedDialogues);
    setAvatarImage(newAvatar);
  }, [foundLockedDrawer, foundGlasses, dialogueIndex]);

  const currentDialogues = activeDialogues[dialogueIndex];

  const handleChoiceClick = () => {
    const nextIndex = dialogueIndex + 1;
    if (nextIndex < activeDialogues.length) {
      setDialogueIndex(nextIndex);
    } else if (foundGlasses && foundLockedDrawer) {
      setFoundLockedDrawer(false);
    }
    setShowChoices(false);
    setTimeout(() => setShowChoices(true), 500);
  };

  useEffect(() => {
    setDialogueIndex(0);
  }, [foundLockedDrawer, foundGlasses]);

  return (
    <section
      id="home"
      className="bg-[#121212] min-h-screen flex items-center justify-center font-[Open_Sans] text-gray-300 relative"
    >
      {/* 📝 Floating Note */}
      {!foundGlasses && (
        <motion.div
          onClick={() => setShowHint(true)}
          whileHover={{ scale: 1.05 }}
          className="absolute top-16 right-16 bg-yellow-300 text-black font-pixel p-3 rounded-lg shadow-lg cursor-pointer rotate-3"
        >
          📝 Note
        </motion.div>
      )}

      <Popup show={showHint} onClose={() => setShowHint(false)}>
        <div className="space-y-3">
          <p className="text-gray-300 leading-relaxed">
            Ugh, where did they go? It’s all a blur...  
            I was so deep in the <span className="italic text-white font-bold">flow state</span>, you know?  
            Just completely lost, turning caffeine into code.  
            I remember glancing at all my <span className="italic text-white font-bold">creations</span> —  
            admiring the handiwork, tweaking every pixel.  
            I must’ve set them down somewhere in that <span className="italic text-white font-bold">digital workshop</span>...  
            or maybe they wandered off themselves.
          </p>
        </div>
      </Popup>

      {/* Main content */}
      <div className="py-10 flex flex-col items-center justify-center text-center relative">
        {/* Avatar + Message Box */}
        <div className="relative flex max-w-[600px] items-center justify-center">
          {/* Avatar */}
          <div className="relative flex-2 ">
            <img
              src={avatarImage}
              alt="avatar"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Dialogue Box */}
          <div className="relative h-[150px] flex-3 translate-y-10 -translate-x-5 lg:-translate-x-10 rounded-xl shadow-lg flex flex-col">
            <div className="text-lg md:text-2xl lg:text-3xl font-pixel text-left text-gray-400">
              <Typewriter
                options={{
                  strings: [currentDialogues.message],
                  cursor: "",
                  delay: 50,
                  deleteSpeed: 10000000000,
                  autoStart: true,
                  loop: false,
                }}
              />
            </div>

            {showChoices && (
              <div className="flex flex-col">
                {currentDialogues.choices.map((choice, i) => (
                  <button
                    key={i}
                    onClick={() => handleChoiceClick(choice)}
                    className="text-gray-300 text-md md:text-xl lg:text-2xl px-3 py-1 text-left font-pixel transition-all duration-200"
                  >
                    ▶ {choice}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Separator */}
        <div className="w-full flex items-center gap-6 py-4">
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Tagline */}
        <div className="text-2xl md:text-3xl font-light space-y-2">
          <p>Turning ideas into reality</p>
          <p>
            through{" "}
            <span className="font-fira font-bold">Code</span> &{" "}
            <span className="font-fira font-bold">Creativity</span>
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center items-center gap-8 mt-10 text-gray-400">
          <SocialLink alt="Resume" link="https://gourav1632.github.io/Profile/Resume.pdf" Icon={PiReadCvLogoFill} />
          <SocialLink alt="Github" link="https://github.com/Gourav1632" Icon={IoLogoGithub} />
          <SocialLink alt="LinkedIn" link="https://www.linkedin.com/in/gourav-kumar-4230b7286/" Icon={FaLinkedinIn} />
        </div>
      </div>
    </section>
  );
}

export default Home;
