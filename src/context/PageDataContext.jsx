import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageDataContext = createContext();

export const PageDataProvider = ({ children }) => {
  const location = useLocation();
  const [pageData, setPageData] = useState({
    color: "#1300ff",
    type: "Opacity",
  });

  useEffect(() => {
    const getPageData = () => {
      switch (location.pathname) {
        case "/square":
          return { color: "#fe0222", type: "Transformations" }; //$red
        case "/pill":
          return { color: "#00ccff", type: "Spring Hover" }; //$lightblue
        case "/drag":
          return { color: "#900af6", type: "Drag" }; //$purple
        case "/":
        case "/circle":
          return { color: "#1300ff", type: "Opacity" }; //$blue
        default:
          return { color: "#000000", type: "Not Found" }; //$black
      }
    };
    setPageData(getPageData());
  }, [location]);

  return (
    <PageDataContext.Provider value={pageData}>
      {children}
    </PageDataContext.Provider>
  );
};

export const usePageData = () => useContext(PageDataContext);
