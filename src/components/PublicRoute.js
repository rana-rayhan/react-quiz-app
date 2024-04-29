import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const PublicRoute = ({ element: Element, ...rest }) => {
  const { currentUser } = useAuthContext();

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return <Element {...rest} />;
};

export default PublicRoute;
