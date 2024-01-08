import "./homepage.css"
import Row from "../row/Row"
import { useState } from "react"
import { getIdOfSongs, getSongsByHeadingId } from "../../api/getSongs"
import RightBarContent from "../rightBarContent/RightBarContent"
import Navbar from "../navbar/Navbar"
import ContentBox from "../content box/ContentBox"
import HomeContainer from "../homecontainer/HomeContainer"
import SongHeadingContainer from "../songHeadingContainer/SongHeadingContainer"
import MusicPlayer from "../musicplayer/MusicPlayer"

function HomePage() {
    const [songs, setSongs] = useState(null)

    getIdOfSongs('tamil trending').then(songId => {
        if (songId) {
            getSongsByHeadingId(songId).then(songs => setSongs(songs.items))
        }
    })

    return (
        <div className='homepage-container'>
            <div className="left-bar">
                <HomeContainer />
                <SongHeadingContainer />
            </div>
            <div className="right-bar">
                <Navbar />

                <div className="rightBarArea">
                    <RightBarContent />
                    <Row title={'2023 tamil trending'} songs={songs} />
                    <MusicPlayer />
                </div>

            </div>
        </div>
    )
}

export default HomePage