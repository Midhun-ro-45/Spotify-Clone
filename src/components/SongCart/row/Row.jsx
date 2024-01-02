import SongCart from "../SongCart"
import "./row.css"
import { useState } from "react"

function Row({ title, songs }) {

    const [currentlyPlaying, setCurrentlyPlaying] = useState(null)

    const handleCurrentlyPlaying = (id) => {
        setCurrentlyPlaying(currentlyPlaying === id ? null : id)
    }

    const [endIndex, setEndIndex] = useState(4)
    const [showAll, setShowAll] = useState("show all")

    return (
        <div className='row'>

            <div className="row-heading-container">
                <h1>{title}</h1>
                <button onClick={() => (endIndex === 4) ? (setEndIndex(20), setShowAll("minimize")) : (setEndIndex(4), setShowAll("show all"))}>{showAll}</button>

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