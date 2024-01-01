import "./songcart.css"

function SongCart({ heading, description, imagesrc }) {
  return (
    <div className='cart'>
      <div className="image-container">
        <img src={imagesrc} />
        <div className="play-button"></div>
      </div>

      <div className="song-discription">
        <h4>{heading}</h4>
        <p>{description}</p>
      </div>

    </div>
  )
}

export default SongCart