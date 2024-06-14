import "./Drag.scss";
import { motion } from "framer-motion";
import { useRef } from "react";

const dragBox = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const Drag = () => {
  const constraintsRef = useRef(null);
  return (
    <motion.div
      className="drag"
      variants={dragBox}
      initial="initial"
      animate="animate"
    >
      <motion.div className="drag__area" ref={constraintsRef} />
      <motion.div
        className="drag__object"
        drag
        dragConstraints={constraintsRef}
      />
    </motion.div>
  );
};

export default Drag;
