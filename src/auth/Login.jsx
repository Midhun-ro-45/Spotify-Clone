import ParentPage from "../pages/ParentPage";
import { getAccessToken, loginUrl } from "../spotify"
import "./login.css"
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()

    const user = useUserContext();
    { user ? navigate("/parentpage") : navigate("/login") }
    return (
        <>

            <a href={loginUrl}>login</a>


        </>
    )
}

export default Login