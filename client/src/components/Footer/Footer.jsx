import "./Footer.scss";
import { motion } from "framer-motion";

import Logo from "../Logo/Logo";

const box = {
  rest: { scale: 1, opacity: "100%" },
  hover: { scale: 1.1 },
  pressed: { scale: 1, rotateY: "90deg", opacity: "15%" },
};

const Footer = () => {
  return (
    <>
      <motion.div
        variants={box}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
        className="footer"
      >
        <footer className="footer__box">
          <Logo />
          <code>Framer-Motion 101</code>
        </footer>
      </motion.div>
    </>
  );
};

export default Footer;
