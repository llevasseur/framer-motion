import "./HomePage.scss";
import { useState, useEffect } from "react";

import Circle from "../../components/Circle/Circle";
import Square from "../../components/Square/Square";
import Pill from "../../components/Pill/Pill";
import Drag from "../../components/Drag/Drag";

const HomePage = ({ type }) => {
  const [app, setApp] = useState(<Circle />);

  useEffect(() => {
    const applyType = () => {
      switch (type) {
        case "square":
          setApp(<Square />);
          break;

        case "pill":
          setApp(<Pill />);
          break;

        case "drag":
          setApp(<Drag />);
          break;

        case "circle":
        default:
          setApp(<Circle />);
          break;
      }
    };
    applyType();
  }, [type]);

  return (
    <>
      <div className="app-container">{app}</div>
    </>
  );
};

export default HomePage;
