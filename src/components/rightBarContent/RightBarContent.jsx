import { BrowserRouter as Router } from "react-router-dom"
import ArtistContent from "../artistContent box/ArtistContent"
import "./rightBarContent.css"

function RightBarContent() {
    return (
        <div className='rightBarContent-container'>
            <Router>
                <ArtistContent artistcontent={"G.V.Praksh Kumar"} />
                <ArtistContent artistcontent={"Anirudh Ravichandher"} />
                <ArtistContent artistcontent={'Yuvan Shankar Raja'} />
                <ArtistContent artistcontent={"D.Imman"} />
                <ArtistContent artistcontent={"Illaya Raja"} />
                <ArtistContent artistcontent={"A.R.Rahman"} />
            </Router>
        </div>
    )
}

export default RightBarContent