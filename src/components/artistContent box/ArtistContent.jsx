import { useState, useEffect } from "react";
import "./artistcontent.css";
import { getArtistbyId, getIdOfArtist } from "../../api/getSongs";



function ArtistContent({ artistcontent }) {
    const [artistDetails, setArtistDetails] = useState(null);


    useEffect(() => {
        if (artistcontent) {
            getIdOfArtist(artistcontent).then((id) => {
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



    return (
        <div className='content-box'>
            <div className='image'>
                {/* Conditional rendering of the image */}
                {imageUrl ? (
                    <img src={imageUrl} alt="Artist" />
                ) : (
                    <img src="default-image-url-here" alt="Default Artist Image" />
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
