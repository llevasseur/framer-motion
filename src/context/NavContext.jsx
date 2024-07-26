import { createContext, useContext } from "react";
import { useCycle } from "framer-motion";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <NavContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
