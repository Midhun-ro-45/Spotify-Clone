
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-js";
import { useUserContext } from "../context/UserContext";

const spotify = new SpotifyWebApi();

const headers = {
    Authorization: `Bearer BQCn8YdnJhSRg_kTbRnAsh5ioQvYqCCn84_XNBVgVdNBGBF8qpQFI32muB7MH-PGgFGPTMq3azEMWSR1TGNUxh4V3RlQejmDhnh09Gv8t1YDsBcCxP8vS30JJRM7h6TOByMq7l7FvS3C2EoVb7iLi9Du7UYfcT6OUoHLCEAOcwFluqRMPhk5ZD4ysgOJQPnNM48p8WgyU5SJvyCg1VwG&token_type=Bearer&expires_in=3600`,
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
export const getSongsOfArtist = async (id) => {
    try {
        const result = await spotify.getArtistTopTracks(id, 'IN');
        return result
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






