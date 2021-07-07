import { Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContexts/index";
import ROUTES from "../../consts/index";

function GuestGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect to={ROUTES.PAGE_DASHBOARD} />;
  }

  return <>{children}</>;
}

export default GuestGuard;
