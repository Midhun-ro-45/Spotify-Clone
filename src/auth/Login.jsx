import ParentPage from "../pages/ParentPage";
import { getAccessToken, loginUrl } from "../spotify";
import "./login.css";
import { useUserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  return (
    <>
      <Link to={loginUrl}>click me</Link>
    </>
  );
}

export default Login;
