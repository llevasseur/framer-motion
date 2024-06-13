import "./Nav.scss";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { NavContext } from "./NavContext";
import Hamburger from "../Hamburger/Hamburger";
import Menu from "../Menu/Menu";
import CircleIcon from "../../assets/images/circle.png";
import SquareIcon from "../../assets/images/square.png";
import PillIcon from "../../assets/images/pill.png";

const debounce = (fn, ms) => {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn();
    }, ms);
  };
};

const pagesData = [
  { url: "/circle", name: "Opacity", icon: CircleIcon, color: "blue" },
  { url: "/square", name: "Transformations", icon: SquareIcon, color: "red" },
  { url: "/pill", name: "Spring Hover", icon: PillIcon, color: "#00ccff" },
];

const Nav = ({ color, type, pages }) => {
  const { isOpen, toggleOpen } = useContext(NavContext);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 ? true : false
  );

  const boxStyle = {
    border: `1px dotted ${color}`,
  };

  const sidebar = {
    open: {
      top: -1,
      left: -1,
      width: isTablet ? 340 : 300,
      height: `100vh`,
      borderRadius: "0%",
      transition: {
        type: "spring",
        stiffness: 50,
        restDelta: 2,
        duration: 0.01,
      },
    },
    closed: {
      top: 10,
      left: 10,
      width: isTablet ? 48 : 32,
      height: isTablet ? 48 : 32,
      borderRadius: "5px",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768);
    };
    const debouncedHandleResize = debounce(handleResize, 10);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={isTablet}
      className="nav"
    >
      <motion.div
        key={`${isTablet}`}
        className="nav__background"
        variants={sidebar}
        animate={isOpen ? sidebar.open : sidebar.closed}
        style={boxStyle}
      />
      <Menu pages={pagesData} color={color} />
      <Hamburger
        color={color}
        toggle={() => toggleOpen()}
        isTablet={isTablet}
      />
    </motion.nav>
  );
};

export default Nav;
