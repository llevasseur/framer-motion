import { useNavContext } from "../../context/NavContext";
import "./Hamburger.scss";
import { motion } from "framer-motion";

const Path = (props) => {
  return (
    <motion.path fill="red" strokeWidth="3" strokeLinecap="round" {...props} />
  );
};

const Hamburger = ({ color, toggle, isTablet }) => {
  const { isOpen } = useNavContext();
  const baseScale = isTablet ? 1.5 : 1;

  const containerVariants = {
    hover: {
      scale: 1.1,
      transition: { staggerChildren: 1 },
    },
  };

  const pathVariants = {
    closed: (custom) => ({
      d:
        custom === 1
          ? "M 10 13 L 30 13"
          : custom === 2
          ? "M 10 27 L 30 27"
          : "",
      scale: 1,
      transition: { duration: 0.2 },
    }),
    open: (custom) => ({
      d:
        custom === 1
          ? "M 11 11 L 29 29"
          : custom === 2
          ? "M 11 29 L 29 11"
          : "",
      scale: 1,
      transition: { duration: 0.2 },
    }),
    hover: (custom) => ({
      scale: 1.1,
    }),
  };

  const middlePathVariants = {
    closed: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.1 },
    },
    open: {
      opacity: 0,
      scale: 1,
      transition: { duration: 0.1 },
    },
    hover: {
      scale: 1.1,
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
      animate={{ scale: baseScale }}
      // whileTap={{ scale: baseScale * 0.95 }}
    >
      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        variants={containerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        // whileHover="hover"
      >
        <Path
          custom={1}
          variants={pathVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          stroke={color || "hsl(0, 0%, 18%)"}
        />
        <Path
          d="M 10 20 L 30 20"
          variants={middlePathVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          stroke={color || "hsl(0, 0%, 18%)"}
        />
        <Path
          custom={2}
          variants={pathVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          stroke={color || "hsl(0, 0%, 18%)"}
        />
      </motion.svg>
    </motion.button>
  );
};

export default Hamburger;
