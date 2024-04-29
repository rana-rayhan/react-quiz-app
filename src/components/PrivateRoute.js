import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { currentUser } = useAuthContext();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <Element {...rest} />;
};

export default PrivateRoute;
