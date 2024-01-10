import { createContext, useContext, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getAccessToken } from "../spotify";


const userContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const [data, setData] = useState([{ username: "midhun", password: "4321" }])


  const loginAuth = (userData) => {

    const userExists = data.some(user => user.username === userData.username && user.password === userData.password);
    userExists ? console.log("yes") : console.log("no");
    return userExists;

  }
  useEffect(() => {
    const spotify = new SpotifyWebApi();
    const hash = getAccessToken();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }



  }, []);

  return (
    <userContext.Provider value={{ token, loginAuth }}>{children}</userContext.Provider>
  );
};
export default UserContextProvider;

export const useUserContext = () => useContext(userContext);
