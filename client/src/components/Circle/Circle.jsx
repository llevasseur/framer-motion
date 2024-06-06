import "./Circle.scss";
import { motion } from "framer-motion";

const circleBox = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const Circle = () => {
  return (
    <motion.div
      className="circle"
      variants={circleBox}
      initial="initial"
      animate="animate"
    />
  );
};

export default Circle;
