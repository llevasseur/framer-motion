import "./Nav.scss";
import { motion, useCycle } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useDimensions } from "../../hooks/useDimension";
import Hamburger from "../Hamburger/Hamburger";
import Menu from "../Menu/Menu";

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

// TODO make responsive

const Nav = ({ color, type }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  console.log(window.innerWidth);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 ? true : false
  );

  const boxStyle = {
    border: `1px dotted ${color}`,
    borderRadius: "5px",
  };

  const sidebar = {
    open: {
      top: 0,
      left: 0,
      width: isTablet ? 300 : 300,
      height: "100vh",
      borderRadius: "0%",
      transition: {
        type: "spring",
        stiffness: 50,
        restDelta: 0,
        duration: 0.3,
      },
    },
    closed: {
      top: 10,
      left: 10,
      width: isTablet ? 50 : 40,
      height: isTablet ? 50 : 40,
      borderRadius: "50%",
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
    const debouncedHandleResize = debounce(handleResize, 30);

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
      ref={containerRef}
      className="nav"
    >
      <motion.div
        key={`${isTablet}`}
        className="nav__background"
        variants={sidebar}
        animate={isOpen ? sidebar.open : sidebar.closed}
      />
      <Menu />
      <Hamburger isTablet={isTablet} toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Nav;
