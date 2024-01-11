import { useContext, useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import SpotifyIcon from "../../components/spotify icon/SpotifyIcon";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import UserContextProvider from "../../context/UserContext";
import { useUserContext } from '../../context/UserContext'
import { loginUrl } from "../../spotify";

function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const { loginAuth } = useUserContext()
  const navigator = useNavigate()

  const initialState = {
    username: '',
    password: '',
  }

  const [inputValue, setInputValue] = useState(initialState)

  const handleUsername = (event) => {
    setInputValue({ ...inputValue, username: event.target.value });
    // console.log(inputValue);
  };
  const handlePassword = (event) => {
    setInputValue({ ...inputValue, password: event.target.value });
    // console.log(inputValue);
  };

  const handleLogin = () => {
    console.log(loginUrl)
    const userExists = loginAuth(inputValue)
    if (userExists) {
      // navigator("https://accounts.spotify.com/authorize?client_id=d926ef258aa14599b2fb84249ce0e8aa&redirect_uri=http://localhost:3000/parentpage&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true");
      navigateToSpotifyAuthorization()
    }
    else {
      alert("Invalid User name or Password")
    }

  }
  const navigateToSpotifyAuthorization = () => {
    // Navigate to the Spotify authorization URL using an absolute path.
    window.location.href = "https://accounts.spotify.com/authorize?client_id=d926ef258aa14599b2fb84249ce0e8aa&redirect_uri=http://localhost:3000/parentpage&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true";
  }
  return (
    <div className="main-container-login">
      <SpotifyIcon />

      <div className="sup-container-login">
        <div className="sub-container">
          <h1 className="heading-one">Login to spotify</h1>
          <div className="butt-group">

            <Button onClick={navigateToSpotifyAuthorization} content={"continue with Google"} />

            {/* <Button content={"continue with Facebook"} />
            <Button content={"continue with Apple"} />
            <Button content={"continue with phonenumber"} /> */}
            <div className="sep-one"></div>
            <Input
              type={"text"}
              value={inputValue.username}
              label={"Email or Username"}
              placeholder={"Email or Username"}
              onChange={handleUsername}
            />
            <Input
              type={"password"}
              value={inputValue.password}
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
                onClick={handleLogin}
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
