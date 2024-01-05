import { getSongsOfArtist } from "../../api/getSongs"
import "./artistsonglist.css"

function ArtistSongList(id) {

    if (id) {
        getSongsOfArtist(id).then((songs) => console.log(songs))
    }
    return (
        <div className="artistsonglist">
            <h1>hiiiiiiii</h1>
        </div>
    )
}

export default ArtistSongList