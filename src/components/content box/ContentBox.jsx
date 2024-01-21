import { useEffect, useState } from "react";
import "./contentbox.css";
import { getIdOfSongs, getSongsByHeadingId } from "../../api/getSongs";
import { useNavigate } from "react-router-dom";
import ContentBoxSongs from "../contentBoxSongs/ContentBoxSongs";

function ContentBox({ description, maincontent }) {
    const [contentBoxdetails, setContentBoxdetails] = useState(null);
    const [contentBoxId, setContentBoxId] = useState(null)
    const navigator = useNavigate()

    useEffect(() => {
        if (maincontent) {
            getIdOfSongs(maincontent).then(songId => {
                if (songId) {
                    setContentBoxId(songId)
                    getSongsByHeadingId(songId).then(songs => {
                        setContentBoxdetails(songs);
                        console.log(songs)
                    });
                }
            });
        }
    }, [maincontent]);

    // Conditional rendering for the image
    let imageUrl = "";
    if (contentBoxdetails && contentBoxdetails.items && contentBoxdetails.items.length > 0) {
        const { items } = contentBoxdetails;
        if (items[1]?.track?.album?.images && items[1].track.album.images.length > 0) {
            imageUrl = items[1].track.album.images[1].url;
        }
    }

    // let imageUrl = contentBoxdetails.items[0].track.album.images[0].url

    const handleClick = () => {
        console.log('hiiiiiiiiiiii');
        // console.log("contentbox details:", contentBoxId);

        // if (typeof ContentBoxSongs.consumeDataInSongs === 'function') {
        //     ContentBoxSongs.consumeDataInSongs(contentBoxId);
        // } else {
        //     console.error('consumeDataInSongs is not a function in ContentBoxSongs');
        // }

        navigator("contentboxSongs", { state: { contentBoxId: contentBoxId } });

    }

    return (
        <div className='content-box' onClick={handleClick}>
            <div className='image'>
                {/* Conditional rendering of the image */}
                {imageUrl ? (
                    <img src={imageUrl} alt="Content" />
                ) : (
                    // <img src="default-image-url-here" alt="Default Image" />
                    <></>
                )}
            </div>
            <div className='content'>
                <h4>{maincontent}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ContentBox;
