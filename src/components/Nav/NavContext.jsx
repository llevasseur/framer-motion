import { createContext, useState } from "react";
import { useCycle } from "framer-motion";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <NavContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </NavContext.Provider>
  );
};
