import "./Pill.scss";
import { motion } from "framer-motion";
const pillBox = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const Pill = () => {
  return (
    <motion.div className="background">
      <motion.div
        className="pill"
        variants={pillBox}
        initial="initial"
        animate="animate"
        whileHover="hover"
      ></motion.div>
    </motion.div>
  );
};

export default Pill;
