import "./Menu.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuItem from "../MenuItem/MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const itemIds = [0, 1, 2, 3];

const Menu = ({ pages, color, isOpen }) => {
  const [display, setDisplay] = useState(
    isOpen ? { display: "flex" } : { display: "none" }
  );

  useEffect(() => {
    if (isOpen) {
      setDisplay({ display: "flex" });
    }
  }, [isOpen]);

  const handleAnimationComplete = (definition) => {
    if (!isOpen && definition === "closed") {
      setDisplay({ display: "none" });
    }
  };
  return (
    <motion.ul
      variants={variants}
      className="menu-ul"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      onAnimationComplete={handleAnimationComplete}
      style={display}
    >
      {itemIds.map((i) => (
        <MenuItem
          page={pages[i]}
          key={i}
          color={color}
          className="menu-ul__item"
        />
      ))}
    </motion.ul>
  );
};

export default Menu;
