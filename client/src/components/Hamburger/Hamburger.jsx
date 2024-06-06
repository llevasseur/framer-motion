import "./Hamburger.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const hamburger = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};

const Hamburger = ({ color, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    border: `1px dotted ${color}`,
    borderRadius: "5px",
  };

  const lineStyle = {
    backgroundColor: color,
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <motion.div
        className="hamburger"
        variants={hamburger}
        onClick={toggleMenu}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
        style={style}
      >
        <div
          className={`hamburger__icon ${isOpen ? "hamburger__icon--open" : ""}`}
        >
          <div className="hamburger__icon__line" style={lineStyle}></div>
          <div className="hamburger__icon__line" style={lineStyle}></div>
          <div className="hamburger__icon__line" style={lineStyle}></div>
        </div>
        {isOpen && (
          <div className="menu">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        )}
      </motion.div>
    </nav>
  );
};

export default Hamburger;
