
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-js";
import { useUserContext } from "../context/UserContext";

const spotify = new SpotifyWebApi();

const token = "BQDf2rf6vfquc3zdzMDYBMd7nZeKCJS0_FOsMPHjd8G0EP9DghTXwQXLkjwBG2lAE3_FE2z8g-mx1DI2sCHqQzz8VPVMbF2gPgjSuzZEDs7sEOgpip89NODD82sG2sPj6FvtvPWYl17aXWJLDS6MM7OWHPHTzneqSLhc2udkSZJ4_86JAy3OyaGGt5W_bPHVZGpdU3FM7PptCvjttJ8pPI7VR5Uyhu62u8bLDU1y5MFBBJ21C5iyMKVko92y4tZso1FKx5N1BWE964U&token_type=Bearer&expires_in=3600"
const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
};



//To get user details:

export const getUserDetails = async () => {
    try {
        const response = await axios.get("https://api.spotify.com/v1/me", {
            headers,
        });

        // Log or process the user details
        console.log("User Details:", response.data);

        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        return null;
    }
};

getUserDetails().then(value => console.log(value))




// Define the function to get user playlists
export const getUserPlaylists = async () => {
    try {
        // Make a GET request to Spotify API endpoint for user playlists
        const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
            headers, // Assuming that 'headers' is defined elsewhere in your code and includes necessary authorization headers
        });

        // Log or process the playlists
        console.log("User Playlists:", response.data.items);

        // Return the playlists
        return response.data.items;
    } catch (error) {
        // Handle errors if the request fails
        console.error('Error fetching user playlists:', error);

        // Return null in case of an error
        return null;
    }
};

// Call the function and log the result
getUserPlaylists().then(playlists => console.log(playlists));



//To get id of particualr artist :

export const getArtistIdByName = async (artistName) => {
    try {
        const response = await axios.get('https://api.spotify.com/v1/search', {
            headers,
            params: {
                q: artistName,
                type: 'artist',
            },
        });

        // Extract the Spotify ID of the first artist from the search results
        const artistId = response.data.artists.items[0].id;

        // Log or process the artist ID
        console.log('Artist ID:', artistId);

        return artistId;
    } catch (error) {
        console.error('Error fetching artist ID:', error);
        return null;
    }
};




//to get artist by passing id
export const getArtistbyId = async (artistId) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
            headers,
        });

        // Log or process the artist details
        console.log('Artist Details:', response?.data);

        return response.data;
    } catch (error) {
        console.error('Error fetching artist details:', error);
        return null;
    }
}



//to get songs of a particular artist by passing id
export const getSongsOfArtist = async (artistId) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=IN`, {
            headers,
        })
        return response.data;
    }
    catch (error) {
        console.error('Error fetching songs', error)

    }
}


//to get id of particular heading or playlist
export const getIdOfSongs = async (playlistName) => {
    try {
        const response = await axios.get('https://api.spotify.com/v1/search', {
            headers,
            params: {
                q: playlistName,
                type: 'playlist',
            },
        });

        // Extract the Spotify ID of the first playlist from the search results
        const playlistId = response.data.playlists.items[0].id;

        // Log or process the playlist ID
        console.log('Playlist ID:', playlistId);

        return playlistId;
    } catch (error) {
        console.error('Error fetching playlist ID:', error);
        return null;
    }
}


// to get songs of heading
export const getSongsByHeadingId = async (playlistId) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers,
        });

        // Log or process the playlist details (including songs)
        console.log('Playlist Details:', response.data);

        return response.data;
    } catch (error) {
        console.error('Error fetching playlist details:', error);
        return null;
    }
}






