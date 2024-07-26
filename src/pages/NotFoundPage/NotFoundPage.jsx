import "./NotFoundPage.scss";

import { motion } from "framer-motion";

const notFoundBox = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1.1 },
};

const NotFoundPage = () => {
  return (
    <motion.div className="background">
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
