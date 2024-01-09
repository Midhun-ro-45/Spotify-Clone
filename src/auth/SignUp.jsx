import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { Link } from "react-router-dom";
import SpotifyIcon from "../components/SpotifyIcon/SpotifyIcon";
import "./signUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="total-signup-container">
      <SpotifyIcon />
      <div className="signup-container">
        <h1>Sign up to start listening</h1>
        <Input
          type={"email"}
          value={email}
          onChange={handleChange}
          label={"Email address"}
          placeholder={"name@domain.com"}
        />
        <Link>Use phone number instead.</Link>
        <Link>
          <Button
            content={"Next"}
            backgroundColor="#1fdf64"
            color={"white"}
            fontSize={"18px"}
          />
        </Link>
        <div className="sep-signup-one">
          <span className="or">or</span>
        </div>
        <Button
          content={"continue with Google"}
          color={"white"}
          backgroundColor={"black"}
          fontSize={"15px"}
        />
        <Button
          content={"continue with Facebook"}
          color={"white"}
          backgroundColor={"black"}
          fontSize={"15px"}
        />
        <div className="sep-signup-two"></div>
        <div className="login-link">
          Already have an account?<Link to={"/login"}>Log in here.</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
