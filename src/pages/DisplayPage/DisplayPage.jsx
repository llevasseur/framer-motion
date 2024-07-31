import "./DisplayPage.scss";
import { useState, useEffect } from "react";

import Circle from "../../components/Circle/Circle";
import Square from "../../components/Square/Square";
import Pill from "../../components/Pill/Pill";
import Drag from "../../components/Drag/Drag";

const BACKGROUNDS = {
  DEFAULT: "linear-gradient(180deg, #ffffff 0%, #e3e2e2 100%)",
  DRAG: "linear-gradient(180deg, #9c1aff 0%, rgb(119, 0, 255) 100%)",
};

const DisplayPage = ({ type, height }) => {
  const [app, setApp] = useState(null);
  const [background, setBackground] = useState(BACKGROUNDS.DEFAULT);

  useEffect(() => {
    const applyType = () => {
      switch (type) {
        case "square":
          setBackground(BACKGROUNDS.DEFAULT);
          return <Square />;
        case "pill":
          setBackground(BACKGROUNDS.DEFAULT);
          return <Pill />;
        case "drag":
          setBackground(BACKGROUNDS.DRAG);
          return <Drag />;
        case "circle":
        default:
          setBackground(BACKGROUNDS.DEFAULT);
          return <Circle />;
      }
    };
    setApp(applyType());
  }, [type]);

  return (
    <div
      className="background"
      style={{ background: background, height: `${height * 100}vh` }}
    >
      {app}
    </div>
  );
};

export default DisplayPage;
