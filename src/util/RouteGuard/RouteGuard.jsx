import { Navigate, useParams } from "react-router-dom";
import validTypes from "../../data/validTypes.json";
import DisplayPage from "../../pages/DisplayPage/DisplayPage";

const RouteGuard = () => {
  const { type } = useParams();

  if (!validTypes.includes(type)) {
    return <Navigate to="/not-found" />;
  }
  return <DisplayPage type={type} />;
};

export default RouteGuard;
