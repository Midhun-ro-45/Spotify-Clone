
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

//To get id of particualr artis :
export const getIdOfArtist = async (name) => {
    try {
        const result = await spotify.searchArtists(name);
        const id = result.artists.items[0].id
        return id
    } catch (error) {
        console.error('Error in fetching artist Id', error)
    }
}

//to get artist by passing id
export const getArtistbyId = async (id) => {
    try {
        const result = await spotify.getArtist(id);
        return result; // Return the artist data
    } catch (error) {
        console.error('Error fetching artist:', error);
        throw error; // Throw the error if any
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
export const getIdOfSongs = async (heading) => {
    try {
        const result = await spotify.searchPlaylists(heading)
        const id = result.playlists.items[0].id
        return id
    } catch (error) {
        console.error('error fetching heading id', error)
    }
}


// to get songs of heading
export const getSongsByHeadingId = async (id) => {
    try {
        const result = await spotify.getPlaylistTracks(id)
        return result
    } catch (error) {
        console.error('error fetching songs', error)
    }
}
// const MAX_RETRIES = 5;
// const RETRY_DELAY = 1000; // 1 second

// export const getSongsByHeadingId = async (id, retries = 0) => {
//     try {
//         const result = await spotify.getPlaylistTracks(id);
//         return result;
//     } catch (error) {
//         if (error.response && error.response.status === 429 && retries < MAX_RETRIES) {
//             console.warn('Rate limit exceeded. Retrying...');
//             await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * Math.pow(2, retries)));
//             return getSongsByHeadingId(id, retries + 1);
//         }
//         console.error('Error fetching songs:', error);
//         throw error; // propagate the error
//     }
// };
