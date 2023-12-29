
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

export const getIdOfArtist = async (name) => {
    try {
        const result = await spotify.searchArtists(name);
        const id = result.artists.items[0].id
        return id
    } catch (error) {
        console.error('Error in fetching artist Id', error)
    }
}

export const getArtistbyId = async (id) => {
    try {
        const result = await spotify.getArtist(id);
        return result; // Return the artist data
    } catch (error) {
        console.error('Error fetching artist:', error);
        throw error; // Throw the error if any
    }
}

export const getSongsOfArtist = async (id) => {
    try {
        const result = await spotify.getArtistTopTracks(id, 'IN');
        return result
    }
    catch (error) {
        console.error('Error fetching songs', error)
    }
}

export const getIdOfSongs = async (heading) => {
    try {
        const result = await spotify.searchPlaylists(heading)
        const id = result.playlists.items[0].id
        return id
    } catch (error) {
        console.error('error fetching heading id', error)
    }
}



export const getSongsByHeadingId = async (id) => {
    try {
        const result = await spotify.getPlaylistTracks(id)
        return result
    } catch (error) {
        console.error('error fetching songs', error)
    }
}