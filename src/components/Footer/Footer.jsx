import "./Footer.scss";
import { motion } from "framer-motion";

import Logo from "../Logo/Logo";

const box = {
  rest: { scale: 1, opacity: "100%" },
  hover: { scale: 1.1 },
};

const Footer = ({ color, type }) => {
  const style = {
    color: color,
    borderTop: `0.5px dotted ${color}`,
    borderBottom: "none",
    borderRight: "none",
    borderLeft: "none",
  };

  return (
    <motion.div
      variants={box}
      initial="rest"
      whileHover="hover"
      className="footer"
      style={style}
    >
      <footer className="footer__box">
        <Logo color={style.color} />
        <code>Framer-Motion 101: {type}</code>
      </footer>
    </motion.div>
  );
};

export default Footer;
