import { useState } from "react"
import "./search.css"
import { getIdOfSongs, getSongsByHeadingId } from "../../api/getSongs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import SongCart from "../SongCart/SongCart"

function Search() {
    const [inputValue, setInputValue] = useState("")
    const [searchResult, setSearchResult] = useState([])

    const handleChange = (event) => {
        setInputValue(event.target.value)
        // console.log(inputValue);
    }

    getIdOfSongs(inputValue).then(songId => {
        if (songId) {
            getSongsByHeadingId(songId).then(songs => setSearchResult(songs.items))
        }
    })


    const [currentlyPlaying, setCurrentlyPlaying] = useState(null)

    const handleCurrentlyPlaying = (id) => {
        setCurrentlyPlaying(currentlyPlaying === id ? null : id)
    }


    return (
        <div className="search-container">

            <div className="input-container">
                <input type="text" onChange={handleChange} value={inputValue} placeholder="what do you want to listen?" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

            <div className="search-result">
                {searchResult?.slice(0, 30).map((data, index) => (
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

export default Search