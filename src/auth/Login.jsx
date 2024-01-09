import { useContext, useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import SpotifyIcon from "../components/SpotifyIcon/SpotifyIcon";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import UserContextProvider from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  return (
    <div className="main-container-login">
      <SpotifyIcon />

      <div className="sup-container-login">
        <div className="sub-container">
          <h1 className="heading-one">Login to spotify</h1>
          <div className="butt-group">
            <Link>
              <Button content={"continue with Google"} />
            </Link>
            <Button content={"continue with Facebook"} />
            <Button content={"continue with Apple"} />
            <Button content={"continue with phonenumber"} />
            <div className="sep-one"></div>
            <Input
              type={"text"}
              value={username}
              label={"Email or Username"}
              placeholder={"Email or Username"}
              onChange={handleUsername}
            />
            <Input
              type={"password"}
              value={password}
              label={"Password"}
              placeholder={"Password"}
              onChange={handlePassword}
            />
            <span className="login-butt">
              {/* <Link to={"/"}> */}
              <Button
                content={"Log In"}
                backgroundColor="#1fdf64"
                color={"white"}
                fontSize={"18px"}
              />
              {/* </Link> */}
            </span>
            <div className="forgot-link">
              <Link>Forgot your password?</Link>
            </div>
            <div className="sep-two"></div>
          </div>
          <span className="span-signup">
            Don't have an account?
            <Link to={"/signup"}>Sign up for Spotify</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
