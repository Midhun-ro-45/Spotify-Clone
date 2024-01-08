import { getSongsOfArtist } from "../../api/getSongs";
import "./artistsonglist.css";

function ArtistSongList({ location }) {
  // Destructure the id from the location state
  const { id } = location.state;

  // Fetch songs if id exists
  if (id) {
    getSongsOfArtist(id).then((songs) => {
      console.log(songs); // Log the fetched songs
    });
  }

  return (
    <div className="artistsonglist">
      <h1>hiiiiiiii</h1>
    </div>
  );
}

export default ArtistSongList;
