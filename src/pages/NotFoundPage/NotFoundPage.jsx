import "./NotFoundPage.scss";

import { motion } from "framer-motion";

const notFoundBox = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1.1 },
};

const BACKGROUND = {
  DEFAULT: "linear-gradient(180deg, #ffffff 0%, #e3e2e2 100%)",
};

const NotFoundPage = ({ height }) => {
  return (
    <motion.div
      className="background"
      style={{ background: BACKGROUND.DEFAULT, height: `${height * 100}vh` }}
    >
      <motion.div
        className="not-found"
        variants={notFoundBox}
        initial="initial"
        animate="animate"
      >
        <code className="not-found__code">404</code>
        <code className="not-found__title">Not Found</code>
      </motion.div>
    </motion.div>
  );
};

export default NotFoundPage;
