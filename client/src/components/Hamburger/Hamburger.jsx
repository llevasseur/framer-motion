import "./Hamburger.scss";
import { motion } from "framer-motion";

const Path = (props) => {
  return (
    <motion.path fill="red" strokeWidth="3" strokeLinecap="round" {...props} />
  );
};

const Hamburger = ({ color, toggle, isTablet }) => {
  const burgerStyle = isTablet
    ? {
        top: "31.5px",
        left: "29.8px",
        transform: "scale(1.5)",
      }
    : {
        top: "19px",
        left: "18px",
      };
  return (
    <button onClick={toggle} className="hamburger" style={burgerStyle}>
      <svg width="32" height="32" viewBox="0 0 40 40">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          stroke={color || "hsl(0, 0%, 18%)"}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          stroke={color || "hsl(0, 0%, 18%)"}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          stroke={color || "hsl(0, 0%, 18%)"}
        />
      </svg>
    </button>
  );
};

export default Hamburger;
