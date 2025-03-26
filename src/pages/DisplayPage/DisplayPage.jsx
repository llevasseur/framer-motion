import "./DisplayPage.scss";
import { useState, useEffect } from "react";

import Circle from "../../components/Circle/Circle";
import Square from "../../components/Square/Square";
import Pill from "../../components/Pill/Pill";
import Drag from "../../components/Drag/Drag";
import Pod from "../../components/Pod/Pod";

const STYLE = {
  DEFAULT: {
    background: "linear-gradient(180deg, #ffffff 0%, #e3e2e2 100%)",
  },
  DRAG: {
    background: "linear-gradient(180deg, #9c1aff 0%, rgb(119, 0, 255) 100%)",
  },
  POD: {
    background: "linear-gradient(180deg, #40f, #05f)",
    height: "300vh",
  },
};

const DisplayPage = ({ type, height }) => {
  const [app, setApp] = useState(null);
  const [style, setStyle] = useState(STYLE.DEFAULT);

  useEffect(() => {
    const applyType = () => {
      switch (type) {
        case "square":
          setStyle(STYLE.DEFAULT);
          return <Square />;
        case "pill":
          setStyle(STYLE.DEFAULT);
          return <Pill />;
        case "drag":
          setStyle(STYLE.DRAG);
          return <Drag />;
        case "pod":
          setStyle(STYLE.POD);
          return <Pod />;
        case "circle":
        default:
          setStyle(STYLE.DEFAULT);
          return <Circle />;
      }
    };
    setApp(applyType());
  }, [type]);

  return (
    <div
      className="background"
      style={{ height: `${height * 100}vh`, ...style }}
    >
      {app}
    </div>
  );
};

export default DisplayPage;
