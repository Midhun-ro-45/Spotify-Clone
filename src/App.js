import { useEffect, useState } from 'react';
import './App.css';
import Login from './auth/Login';
import { getAccessToken } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { getArtistbyId, getIdOfArtist, getIdOfSongs, getSongsByHeadingId, getSongsOfArtist } from './api/getSongs';
import SongCart from './components/SongCart/SongCart';
// import SongCart from './components/SongCart/SongCart';
import Row from './components/SongCart/row/Row';

function App() {

  const [token, setToken] = useState(null);
  const [songs, setSongs] = useState(null)



  useEffect(() => {
    const spotify = new SpotifyWebApi()
    const hash = getAccessToken();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => console.log({ user }))

      getIdOfArtist('Yuvan Shankar Raja').then(ArtistId => {
        if (ArtistId) {
          getArtistbyId(ArtistId).then(artist => console.log(artist))
          getSongsOfArtist(ArtistId).then(songs => console.log(songs))
        }
      })

      getIdOfSongs('bollywood hot hits').then(songId => {
        if (songId) {
          getSongsByHeadingId(songId).then(songs => console.log(songs))
        }
      })

      getIdOfSongs('tamil 2023 trending').then(songId => {
        if (songId) {
          getSongsByHeadingId(songId).then(songs => setSongs(songs.items))
        }
      })

      // console.log({ token });

    }
  }, [])

  return (
    <div className="App">
      <h1>welcome</h1>
      {
        token ? <div>  <Row title={"tamil trending 2023"} songs={songs} /> </div> : <Login />
      }

    </div>
  );
}

export default App;
