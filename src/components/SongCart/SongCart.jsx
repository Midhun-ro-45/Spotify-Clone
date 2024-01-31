import "./songcart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react"
import { useUserContext } from "../../context/UserContext"


function SongCart({ heading, description, imagesrc, id, uriToPlay, favData }) {

  const { playSong } = useUserContext()
  const { handleCurrentlyPlaying, Playing, addSongToFavorites, removeSongFromFavorites } = useUserContext()
  const { currentlyPlaying } = useUserContext()
  const [heartIcon, setHeartIcon] = useState(true)

  const isInclude = favData && favData?.some((value) => value.track.id === id)

  return (
    <div className='cart'>
      <div className="image-container">
        <img src={imagesrc} />

        {isInclude ? <div className="heart-icon">
          {heartIcon ?
            <div onClick={() => { removeSongFromFavorites(id); setHeartIcon(!heartIcon) }}><FontAwesomeIcon icon={faHeart} style={{ color: "green" }} /></div> :
            <div onClick={() => { addSongToFavorites(id); setHeartIcon(!heartIcon) }}><FontAwesomeIcon icon={farHeart} /></div>
          }
        </div> :
          <div className="heart-icon">
            {heartIcon ?
              <div onClick={() => { addSongToFavorites(id); setHeartIcon(!heartIcon) }}><FontAwesomeIcon icon={farHeart} /></div> :
              <div onClick={() => { removeSongFromFavorites(id); setHeartIcon(!heartIcon) }}><FontAwesomeIcon icon={faHeart} style={{ color: "green" }} /></div>
            }
          </div>
        }

        <div className="play-button" onClick={() => {
          handleCurrentlyPlaying(id);
          playSong(uriToPlay)

        }} >

          {(currentlyPlaying === id && Playing === true) ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}

        </div>
      </div>

      <div className="song-discription">
        <h4>{heading}</h4>
        <p>{description}</p>
      </div>

    </div>
  )
}

export default SongCart