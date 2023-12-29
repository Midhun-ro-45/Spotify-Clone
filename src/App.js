import { useEffect, useState } from 'react';
import './App.css';
import Login from './auth/Login';
import { getAccessToken } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { getArtistbyId, getIdOfArtist, getIdOfSongs, getSongsByHeadingId, getSongsOfArtist } from './api/getSongs';

function App() {

  const [token, setToken] = useState(null);




  useEffect(() => {
    const spotify = new SpotifyWebApi()
    const hash = getAccessToken();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token);

      // spotify.getMe().then(user => console.log({ user }))

      getIdOfArtist('Yuvan Shankar Raja').then(ArtistId => {
        if (ArtistId) {
          getArtistbyId(ArtistId).then(id => console.log(id))
        }
      })

      getSongsOfArtist('4zCH9qm4R2DADamUHMCa6O').then(artistSongs => console.log(artistSongs))

      getIdOfSongs('For fans of A.R Rahman').then(songId => {
        if (songId) {
          getSongsByHeadingId(songId).then(songs => console.log(songs))
        }
      })


      // console.log({ token });
    }
  }, [])

  return (
    <div className="App">
      <h1>welcome</h1>
      {
        token ? <h1>i am logged in</h1> : <Login />
      }

    </div>
  );
}

export default App;
