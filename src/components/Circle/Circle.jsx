import "./Circle.scss";
import { motion } from "framer-motion";

const circleBox = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const Circle = () => {
  return (
    <motion.div>
      <motion.div
        className="circle"
        variants={circleBox}
        initial="initial"
        animate="animate"
      />
    </motion.div>
  );
};

export default Circle;
