import SongCart from "../SongCart"
import "./row.css"

function Row({ title, songs }) {
    // const { heading, imagesrc, description, key } = song;
    return (
        <div className='row'>

            <h1>{title}</h1>

            <div className="row-song-container">
                {songs?.slice(0, 4).map((data, index) => (
                    <SongCart
                        key={index}
                        heading={data.track.name}
                        description={data.track.artists[0].name.length > 35 ? data.track.artists[0].name.substring(0, 35) + "..." : data.track.artists[0].name}
                        imagesrc={data.track.album.images[0].url}
                    />
                ))}
            </div>

        </div>
    )
}

export default Row