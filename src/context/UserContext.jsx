import { createContext, useContext, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getAccessToken } from "../spotify";
// import { useNavigate } from "react-router-dom";


const userContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const [data, setData] = useState([{ username: "midhun", password: "4321" }])

  // const navigator = useNavigate()

  const loginAuth = (userData) => {

    const userExists = data.some(user => user.username === userData.username && user.password === userData.password);
    userExists ? console.log("yes") : console.log("no");
    return userExists;

  }

  const signupAuth = (userData) => {
    const userExists = data.some(user => user.username === userData.username && user.password === userData.password)
    if (userExists) {
      alert("User already exists")
    }
    else {
      data.push(userData)
      // navigator("/parentpage")
    }
  }

  useEffect(() => {
    const spotify = new SpotifyWebApi();
    const hash = getAccessToken();
    // window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      // Store the access token securely in localStorage
      localStorage.setItem("access_token", _token);
      setToken(_token);
      spotify.setAccessToken(_token);
    }

    console.log(token);

  }, []);

  return (
    <userContext.Provider value={{ token, loginAuth, signupAuth }}>{children}</userContext.Provider>
  );
};
export default UserContextProvider;

export const useUserContext = () => useContext(userContext);
