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

  const menuStyle = {
    border: `1px solid ${color}`,
    borderLeft: "none",
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
      </motion.div>
      {isOpen && (
        <div className="menu" style={menuStyle}>
          <Link to="/" onClick={toggleMenu} className="menu__item">
            Home
          </Link>
          <Link to="/circle" onClick={toggleMenu} className="menu__item">
            Opacity Example
          </Link>
          <Link to="/square" onClick={toggleMenu} className="menu__item">
            Tranformation Example
          </Link>
        </div>
      )}
    </>
  );
};

export default Hamburger;
