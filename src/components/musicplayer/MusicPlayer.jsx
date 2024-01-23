import "./musicplayer.css";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { useState } from "react";

function MusicPlayer() {

    const [token, settoken] = useState("BQBcgMDkVfI9hEqVfbG3NZEiDXb2SFcWU8MeF5a-w5FwRvhB8aoa0YxPeQtt3DuXMUgIs2cmjDcFzE0KnjldgiTmc4N3b6QwdyXXLBKHsZPqkfx83-PJWKQpHVBWSPzRN1PmKJX1NtKV7CYcWMB0nfpypwtaSiZGZ3mI-JLGy4Ym8nPqTmgY7dI8Tf-4omJioX0L7PpKJ--Z&token_type=Bearer&expires_in=3600")




    if (!token) return null
    return (
        <div className="musicplayer">

            <SpotifyWebPlayer token={"BQDf2rf6vfquc3zdzMDYBMd7nZeKCJS0_FOsMPHjd8G0EP9DghTXwQXLkjwBG2lAE3_FE2z8g-mx1DI2sCHqQzz8VPVMbF2gPgjSuzZEDs7sEOgpip89NODD82sG2sPj6FvtvPWYl17aXWJLDS6MM7OWHPHTzneqSLhc2udkSZJ4_86JAy3OyaGGt5W_bPHVZGpdU3FM7PptCvjttJ8pPI7VR5Uyhu62u8bLDU1y5MFBBJ21C5iyMKVko92y4tZso1FKx5N1BWE964U&token_type=Bearer&expires_in=3600"}
                showSaveIcon
            // uris={
            //     "spotify:track:7j7fS14vlwVk0Pfnr0hovC"}
            />
        </div>
    );
}

export default MusicPlayer;