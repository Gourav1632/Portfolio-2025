import React, { createContext, useState } from "react";

export const GameContext = createContext();

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
