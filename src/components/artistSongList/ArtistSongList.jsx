import "./artistsonglist.css";
import { getSongsOfArtist } from "../../api/getSongs";
import { useLocation } from "react-router-dom";
import SongCart from "../SongCart/SongCart";
import { useEffect, useState } from "react";

function ArtistSongList() {
  const location = useLocation();
  const artistID = location.state.artistID;
  // Log the artistID
  console.log("Artist ID:", artistID);

  const [artistSongs, setArtistSongs] = useState();
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)

  const handleCurrentlyPlaying = (id) => {
    setCurrentlyPlaying(currentlyPlaying === id ? null : id)
  }


  useEffect(() => {
    getSongsOfArtist(artistID).then((result) => setArtistSongs(result.tracks))
  }, [artistID])


  return (
    <div className="artistsonglist">
      {artistSongs?.map((data, index) => (
        <SongCart
          key={index}
          heading={data.name}
          // description={data.track.artists[0].name.length > 35 ? data.track.artists[0].name.substring(0, 35) + "..." : data.track.artists[0].name}
          imagesrc={data.album.images[0].url}
          id={data.id}
          isCurrentlyPlaying={currentlyPlaying === data.id}
          onTogglePlay={handleCurrentlyPlaying}
        />
      ))}
    </div>
  );
}

export default ArtistSongList;
