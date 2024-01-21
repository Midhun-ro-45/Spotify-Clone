import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./contentboxsongs.css"
import { getSongsByHeadingId } from "../../api/getSongs";
import SongCart from "../SongCart/SongCart";

function ContentBoxSongs() {

    const location = useLocation();
    const contenBoxId = location.state.contentBoxId;

    const [playlistId, setPlaylistId] = useState()

    const [playlist, setPlaylist] = useState()

    const [currentlyPlaying, setCurrentlyPlaying] = useState(null)

    const handleCurrentlyPlaying = (id) => {
        setCurrentlyPlaying(currentlyPlaying === id ? null : id)
    }



    useEffect(() => {

        getSongsByHeadingId(contenBoxId).then((songs) => setPlaylist(songs.items))
    }, [contenBoxId])


    return (
        <div className="container">
            {playlist?.slice(0, 28).map((data, index) => (
                <SongCart
                    key={index}
                    heading={data.track.name}
                    description={data.track.artists[0].name.length > 35 ? data.track.artists[0].name.substring(0, 35) + "..." : data.track.artists[0].name}
                    imagesrc={data.track.album.images[0].url}
                    id={data.track.id}
                    isCurrentlyPlaying={currentlyPlaying === data.track.id}
                    onTogglePlay={handleCurrentlyPlaying}
                />
            ))}

        </div>
    )

}

export default ContentBoxSongs