import { useState, useEffect, useContext } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { GameContext } from "./contexts/GameContext";
import AchievementPopup from "./components/AchievementPopup";

function App() {
  const { foundGlasses, setFoundGlasses, foundLockedDrawer } = useContext(GameContext);
  const [showAchievement, setShowAchievement] = useState(false);

  useEffect(() => {
    const hasSolvedPuzzle = localStorage.getItem("glassesFound");
    if (hasSolvedPuzzle === "true") {
      setFoundGlasses(true);
    }
  }, [setFoundGlasses]);

  useEffect(() => {
    if (foundGlasses && foundLockedDrawer) {
        localStorage.setItem("glassesFound", "true");
        setShowAchievement(true);
        const timer = setTimeout(() => setShowAchievement(false), 4000);
        return () => clearTimeout(timer);
      }
  }, [foundGlasses, foundLockedDrawer]);

  return (
    <>
      <HamburgerMenu />
      <Home />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />

      {/* Achievement popup */}
      <AchievementPopup
        show={showAchievement}
        img="glasses.png"
        title="Achievement Unlocked"
        description="You've got an eagle eye!"
      />
    </>
  );
}

export default App;
