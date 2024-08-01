import "./Square.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { debounce } from "lodash";

import Input from "../Input/Input";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const initialInputs = {
  x: 0,
  y: 0,
  rotate: 0,
};

const Square = () => {
  const [inputValues, setInputValues] = useState(initialInputs);

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    value = parseInt(value);
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
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
          animate={{ ...inputValues }}
          transition={{ type: "spring" }}
        />
      </div>
      <div className="inputs">
        <Input
          color={"red"}
          name="x"
          value={inputValues.x}
          handleChange={handleInputChange}
        />
        <Input
          color={"red"}
          name="y"
          value={inputValues.y}
          handleChange={handleInputChange}
        />
        <Input
          color={"red"}
          value={inputValues.rotate}
          name="rotate"
          handleChange={handleInputChange}
          min={-180}
          max={180}
        />
      </div>
    </motion.div>
  );
};

export default Square;
