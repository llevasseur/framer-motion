import "./Nav.scss";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavContext } from "../../context/NavContext";
import Hamburger from "../Hamburger/Hamburger";
import Menu from "../Menu/Menu";
import CircleIcon from "../../assets/images/circle.png";
import SquareIcon from "../../assets/images/square.png";
import PillIcon from "../../assets/images/pill.png";
import DragIcon from "../../assets/images/drag.png";

import { debounce } from "../../util/debounce.js";

const pagesData = [
  { url: "/circle", name: "Opacity", icon: CircleIcon, color: "blue" },
  { url: "/square", name: "Transformations", icon: SquareIcon, color: "red" },
  { url: "/pill", name: "Spring Hover", icon: PillIcon, color: "#00ccff" },
  { url: "/drag", name: "Drag", icon: DragIcon, color: "#900af6" },
];

const Nav = ({ color }) => {
  const { isOpen, toggleOpen } = useNavContext();
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 ? true : false
  );

  const controls = useAnimation();
  const [hover, setHover] = useState(1.1);

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
        delay: 0.4,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const handleToggleOpen = () => {
    toggleOpen();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768);
    };
    const debouncedHandleResize = debounce(handleResize, 10);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  useEffect(() => {
    let timer;
    if (!isOpen) {
      controls.start({ scale: 1 });
      timer = setTimeout(() => {
        setHover(1.1);
      }, 700);
    } else {
      controls.start({ scale: 1 });
      setHover(1);
    }

    // Clean up the timer when the component is unmounted or when isOpen changes
    return () => clearTimeout(timer);
  }, [isOpen, controls]);

  const handleHoverStart = () => {
    if (!isOpen) {
      controls.start((i) => ({
        scale: [1, 1.3, 1],
        transition: { duration: 0.5, delay: i * 0.1 },
      }));
    }
  };
  const handleHoverEnd = () => {
    controls.start({ scale: 1 });
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={isTablet}
      className="nav"
    >
      <motion.div
        key={`${isTablet}`}
        style={boxStyle}
        className="nav__background"
        variants={sidebar}
        initial="closed"
        whileHover={isOpen ? "" : { scale: hover }}
        whileTap={isOpen ? "" : { scale: 0.95 }}
        animate={isOpen ? sidebar.open : sidebar.closed}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <Menu pages={pagesData} color={color} isOpen={isOpen} />
        <Hamburger
          color={color}
          toggle={handleToggleOpen}
          isTablet={isTablet}
          hoverScale={hover}
          controls={controls}
        />
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
