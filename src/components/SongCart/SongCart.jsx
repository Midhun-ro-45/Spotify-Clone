import "./songcart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function SongCart({ heading, description, imagesrc, id, isCurrentlyPlaying, onTogglePlay }) {

  // const [isPlay, setisPlay] = useState(false)


  return (
    <div className='cart'>
      <div className="image-container">
        <img src={imagesrc} />
        <div className="play-button" onClick={() => onTogglePlay(id)} >

          {isCurrentlyPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}

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