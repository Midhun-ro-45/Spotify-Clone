export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "http://localhost:3000";

const clientId = process.env.REACT_APP_CLIENTID;

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",

];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}
&scope=${scopes.join(" ")}&response_type=token&show_dialog=true`;

export const getAccessToken = () => {
    return window.location.hash             //returns the current url from # 
        .substring(1)                       //extracts rest of the string other then #
        .split("&")
        .reduce((initial, item) => {
            const parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        }, {})

}
