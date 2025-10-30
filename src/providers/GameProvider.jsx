import { useState } from "react";
import { GameContext } from "../contexts/GameContext";

export const GameProvider = ({ children }) => {
  const [foundLockedDrawer, setFoundLockedDrawer] = useState(false);
  const [foundGlasses, setFoundGlasses] = useState(false);

  return (
    <GameContext.Provider
      value={{
        foundLockedDrawer,
        setFoundLockedDrawer,
        foundGlasses,
        setFoundGlasses,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
