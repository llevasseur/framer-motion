import { Navigate, useParams } from "react-router-dom";
import DisplayPage from "../../pages/DisplayPage/DisplayPage";

const VALID_TYPES = ["circle", "square", "pill", "drag"];

const RouteGuard = ({ height }) => {
  const { type } = useParams();

  if (!VALID_TYPES.includes(type)) {
    return <Navigate to="/not-found" />;
  }
  return <DisplayPage type={type} height={height} />;
};

export default RouteGuard;
