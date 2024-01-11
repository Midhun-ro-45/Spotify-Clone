import { useState, useEffect } from "react";
import "./artistcontent.css";
import { getArtistbyId, getIdOfArtist } from "../../api/getSongs";
import { useNavigate } from "react-router-dom";
import ArtistSongList from "../artistSongList/ArtistSongList";



function ArtistContent({ artistcontent }) {
    const [artistDetails, setArtistDetails] = useState(null);
    const [artistID, setArtistID] = useState(null);

    const navigate = useNavigate()


    useEffect(() => {
        if (artistcontent) {
            getIdOfArtist(artistcontent).then((id) => {
                setArtistID(id)
                if (id) {
                    getArtistbyId(id).then((artistDetails) => {
                        // Set the artist details to the state
                        setArtistDetails(artistDetails);
                    })
                }
            })
        }
    }, [artistcontent]);

    // Conditional rendering of the image
    let imageUrl = "";
    if (artistDetails && artistDetails.images && artistDetails.images.length > 0) {
        imageUrl = artistDetails.images[0].url;
    }

    // const handleClick = () => {
    //     { artistID && <ArtistSongList id={artistID} /> }
    //     navigate("/artistSongs");

    // }
    // const handleClick = () => {
    //     if (artistID) {
    //         navigate("/artistSongs", { state: { id: artistID } });
    //     }
    // };


    return (
        <div className='content-box' >
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
