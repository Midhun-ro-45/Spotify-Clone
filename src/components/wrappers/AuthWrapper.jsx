import { Navigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
const AuthWrapper = ({ children }) => {
  const user = useUserContext();
  console.log(user);

  return user ? <>{children}</> : <Navigate to={"/login"} />;
};

export default AuthWrapper;
