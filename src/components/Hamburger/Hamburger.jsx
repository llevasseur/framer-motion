import { useNavContext } from "../../context/NavContext";
import "./Hamburger.scss";
import { motion } from "framer-motion";

const Path = (props) => {
  return (
    <motion.path fill="red" strokeWidth="3" strokeLinecap="round" {...props} />
  );
};

const Hamburger = (props) => {
  const { color, toggle, isTablet, hoverScale, controls } = props;
  const { isOpen } = useNavContext();
  const baseScale = isTablet ? 1.5 : 1;

  const bunPathVariants = {
    closed: (custom) => ({
      d:
        custom === 0
          ? "M 10 13 L 30 13"
          : custom === 2
          ? "M 10 27 L 30 27"
          : "",
      scale: 1,
      transition: { duration: 0.2 },
    }),
    open: (custom) => ({
      d:
        custom === 0
          ? "M 11 11 L 29 29"
          : custom === 2
          ? "M 11 29 L 29 11"
          : "",
      scale: 1,
      transition: { duration: 0.2 },
    }),
  };

  const middlePathVariants = {
    closed: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 0,
      scale: 1,
      transition: { duration: 0.2 },
    },
  };

  const burgerStyle = isTablet
    ? {
        top: "8px",
        left: "8px",
        transform: `scale(${baseScale})`,
      }
    : {
        top: "0px",
        left: "0px",
      };

  return (
    <motion.button
      onClick={toggle}
      className="hamburger"
      style={burgerStyle}
      animate={{ scale: baseScale }} // scale between breakpoints
    >
      <motion.svg width="32" height="32" viewBox="0 0 40 40">
        <Path
          custom={0} // custom sets order for control animation
          variants={bunPathVariants}
          initial="closed"
          animate={isOpen ? "open" : hoverScale === 1 ? "closed" : controls}
          stroke={color || "hsl(0, 0%, 18%)"}
        />
        <Path
          custom={1}
          d="M 10 20 L 30 20"
          variants={middlePathVariants}
          initial="closed"
          animate={isOpen ? "open" : hoverScale === 1 ? "closed" : controls}
          stroke={color || "hsl(0, 0%, 18%)"}
        />
        <Path
          custom={2}
          variants={bunPathVariants}
          initial="closed"
          animate={isOpen ? "open" : hoverScale === 1 ? "closed" : controls}
          stroke={color || "hsl(0, 0%, 18%)"}
        />
      </motion.svg>
    </motion.button>
  );
};

export default Hamburger;
