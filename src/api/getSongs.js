
import axios from "axios";


// const token = sessionStorage.getItem("access_token")
// token && console.log(token);
// const headers = {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json",
// };



// //To get user details:

// export const getUserDetails = async () => {
//     try {
//         const response = await axios.get("https://api.spotify.com/v1/me", {
//             headers,
//         });

//         return response.data;
//     } catch (error) {
//         console.error('Error fetching user details:', error);
//         return null;
//     }
// };

// // getUserDetails().then(value => console.log(value))


// //To add favourites
// export const addSongToFavorites = async (songId) => {
//     try {
//         const response = await axios.put(`https://api.spotify.com/v1/me/tracks?ids=${songId}`, null, {
//             headers,
//         });
//         console.log("Song added to favorites:", response.data);
//         // return response.data;

//     } catch (error) {
//         console.error('Error adding song to favorites:', error);
//         return null;
//     }
// };

// // addSongToFavorites(id).then(response => console.log(response));



// //To delete a song from favourites
// export const removeSongFromFavorites = async (songId) => {
//     try {
//         const response = await axios.delete(`https://api.spotify.com/v1/me/tracks?ids=${songId}`, {
//             headers,
//         });
//         console.log("Song removed from favorites:", response.data);
//         // return response.data;

//     } catch (error) {
//         console.error('Error removing song from favorites:', error);
//         return null;
//     }
// };

// // removeSongFromFavorites(trackIdToRemove).then(response => console.log(response));



// // To get favourites
// export const getUserFavoriteSongs = async () => {
//     try {

//         const response = await axios.get("https://api.spotify.com/v1/me/tracks", {
//             headers,
//         });
//         console.log("User Favorite Songs:", response.data.items);
//         return response.data.items;

//     } catch (error) {

//         console.error('Error fetching user favorite songs:', error);
//         return null;
//     }
// };

// getUserFavoriteSongs().then(favoriteSongs => console.log(favoriteSongs));



// //To get id of particualr artist :

// export const getArtistIdByName = async (artistName) => {
//     try {
//         const response = await axios.get('https://api.spotify.com/v1/search', {
//             headers,
//             params: {
//                 q: artistName,
//                 type: 'artist',
//             },
//         });

//         const artistId = response.data.artists.items[0].id;
//         return artistId;

//     } catch (error) {
//         console.error('Error fetching artist ID:', error);
//         return null;
//     }
// };




// //to get artist by passing id
// export const getArtistbyId = async (artistId) => {
//     try {
//         const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
//             headers,
//         });

//         return response.data;

//     } catch (error) {
//         console.error('Error fetching artist details:', error);
//         return null;
//     }
// }



// //to get songs of a particular artist by passing id
// export const getSongsOfArtist = async (artistId) => {
//     try {
//         const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=IN`, {
//             headers,
//         })
//         return response.data;
//     }
//     catch (error) {
//         console.error('Error fetching songs', error)

//     }
// }


// //to get id of particular heading or playlist
// export const getIdOfSongs = async (playlistName) => {
//     try {
//         const response = await axios.get('https://api.spotify.com/v1/search', {
//             headers,
//             params: {
//                 q: playlistName,
//                 type: 'playlist',
//             },
//         });

//         const playlistId = response.data.playlists.items[0].id;

//         return playlistId;
//     } catch (error) {
//         console.error('Error fetching playlist ID:', error);
//         return null;
//     }
// }


// // to get songs of heading
// export const getSongsByHeadingId = async (playlistId) => {
//     try {
//         const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
//             headers,
//         });

//         return response.data;
//     } catch (error) {
//         console.error('Error fetching playlist details:', error);
//         return null;
//     }
// }






