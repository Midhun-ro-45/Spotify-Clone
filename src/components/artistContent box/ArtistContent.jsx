import { useState, useEffect } from "react";
import "./artistcontent.css";
import { getArtistbyId, getArtistIdByName } from "../../api/getSongs";
import { useNavigate } from "react-router-dom";
import ArtistSongList from "../artistSongList/ArtistSongList";



function ArtistContent({ artistcontent }) {
    const [artistSongs, setArtistSongs] = useState(null);
    const [artistID, setArtistID] = useState(null);

    const navigator = useNavigate()


    useEffect(() => {
        if (artistcontent) {
            getArtistIdByName(artistcontent).then((id) => {
                setArtistID(id)
                if (id) {
                    getArtistbyId(id).then((value) => {
                        // Set the artist details to the state
                        setArtistSongs(value);
                        console.log(value);
                    })
                }
            })
        }
    }, [artistcontent]);

    // Conditional rendering of the image
    let imageUrl = "";
    if (artistSongs && artistSongs.images && artistSongs.images.length > 0) {
        imageUrl = artistSongs.images[0].url;
    }

    const handleClick = () => {
        navigator("artistsongs", { state: { artistID: artistID } });
    };



    return (
        <div className='content-box' onClick={handleClick}>
            <div className='image'>
                {/* Conditional rendering of the image */}
                {imageUrl ? (
                    <img src={imageUrl} alt="Artist" />
                ) : (
                    <img />
                )}
            </div>
            <div className='content'>
                <h4>{artistcontent}</h4>
                <p>Artist</p>
            </div>
        </div>
    );
}

export default ArtistContent;
