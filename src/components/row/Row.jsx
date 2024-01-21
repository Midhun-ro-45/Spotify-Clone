import SongCart from "../SongCart/SongCart"
import "./row.css"
import { useEffect, useState } from "react"
import { getIdOfSongs, getSongsByHeadingId } from "../../api/getSongs"

function Row({ title }) {

    const [currentlyPlaying, setCurrentlyPlaying] = useState(null)

    const handleCurrentlyPlaying = (id) => {
        setCurrentlyPlaying(currentlyPlaying === id ? null : id)
    }

    const [endIndex, setEndIndex] = useState(4)
    const [showAll, setShowAll] = useState("show all")

    const [songs, setSongs] = useState(null);
    // const { token } = useUserContext();

    useEffect(() => {

        getIdOfSongs(title).then((songId) => {
            if (songId) {
                getSongsByHeadingId(songId).then((songs) => setSongs(songs?.items));
            }
        });
    }, [title])



    return (
        <div className='row'>

            <div className="row-heading-container">
                <h1>{title}</h1>
                <button onClick={() => (endIndex === 4) ? (setEndIndex(20), setShowAll("Minimize")) : (setEndIndex(4), setShowAll("Show all"))}>{showAll}</button>

            </div>

            <div className="row-song-container">
                {songs?.slice(0, endIndex).map((data, index) => (
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

        </div>
    )
}

export default Row