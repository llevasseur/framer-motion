import "./Pod.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Pod = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  console.log(scale, scrollYProgress);
  return (
    <div className="pod-wrapper">
      <motion.div className="pod" style={{ scale }}>
        <motion.div className="pod__item" style={{ scaleY: scrollYProgress }} />
      </motion.div>
    </div>
  );
};

export default Pod;
