import { getAccessToken, loginUrl } from "../spotify"
import "./login.css"

function Login() {

    // console.log(getAccessToken());
    return (
        <a href={loginUrl}>login</a>

    )
}

export default Login