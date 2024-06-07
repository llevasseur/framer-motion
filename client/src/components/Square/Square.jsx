import "./Square.scss";
import { useState } from "react";
import { motion } from "framer-motion";

import Input from "../../components/Input/Input";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const Square = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  return (
    <motion.div
      className="square"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <div>
        <motion.div
          className="square__box"
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        />
      </div>
      <div className="inputs">
        <Input color={"red"} value={x} set={setX}>
          x
        </Input>
        <Input color={"red"} value={y} set={setY}>
          y
        </Input>
        <Input
          color={"red"}
          value={rotate}
          set={setRotate}
          min={-180}
          max={180}
        >
          rotate
        </Input>
      </div>
    </motion.div>
  );
};

export default Square;
