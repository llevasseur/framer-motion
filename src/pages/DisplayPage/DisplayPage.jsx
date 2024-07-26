import "./DisplayPage.scss";
import { useState, useEffect } from "react";

import Circle from "../../components/Circle/Circle";
import Square from "../../components/Square/Square";
import Pill from "../../components/Pill/Pill";
import Drag from "../../components/Drag/Drag";

const DisplayPage = ({ type }) => {
  const [app, setApp] = useState(<></>);
  useEffect(() => {
    const applyType = () => {
      switch (type) {
        case "square":
          return <Square />;
        case "pill":
          return <Pill />;
        case "drag":
          return <Drag />;
        case "circle":
        default:
          return <Circle />;
      }
    };
    setApp(applyType());
  }, [type]);
  return (
    <>
      <div className="app-container">{app}</div>
    </>
  );
};

export default DisplayPage;
