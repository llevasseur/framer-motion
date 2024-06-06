import "./HomePage.scss";
import { useState, useEffect } from "react";

import Circle from "../../components/Circle/Circle";
import Square from "../../components/Square/Square";

const HomePage = ({ type }) => {
  const [app, setApp] = useState(<Circle />);

  useEffect(() => {
    const applyType = () => {
      switch (type) {
        case "square":
          setApp(<Square />);
          break;

        case "circle":
        default:
          setApp(<Circle />);
          break;
      }
    };
    applyType();
  }, []);

  return (
    <>
      <div className="app-container">{app}</div>
    </>
  );
};

export default HomePage;
