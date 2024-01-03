import ArtistContent from "../artistContent box/ArtistContent"
import "./rightBarContent.css"

function RightBarContent() {
    return (
        <div className='rightBarContent-container'>
            <ArtistContent artistcontent={"G.V.Praksh Kumar"} />
            <ArtistContent artistcontent={"Anirudh Ravichandher"} />
            <ArtistContent artistcontent={'Yuvan Shankar Raja'} />
            <ArtistContent artistcontent={"D.Imman"} />
            <ArtistContent artistcontent={"Illaya Raja"} />
            <ArtistContent artistcontent={"A.R.Rahman"} />
        </div>
    )
}

export default RightBarContent