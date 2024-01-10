import "./landingpage.css"
import Row from "../../components/row/Row";
import RightBarContent from "../../components/rightBarContent/RightBarContent";
import Navbar from "../../components/navbar/Navbar";
import ContentBox from "../../components/content box/ContentBox";
import HomeContainer from "../../components/homecontainer/HomeContainer";
import SongHeadingContainer from "../../components/songHeadingContainer/SongHeadingContainer";
import MusicPlayer from "../../components/musicplayer/MusicPlayer";
import { Link } from "react-router-dom";



function LandingPage() {
    return (
        <div className="landingpage-container">

            <div className="login">
                <Link to={"/loginform"}>login</Link>
            </div>

            <div className="left-bar">
                <HomeContainer />
                <SongHeadingContainer />
            </div>
            <div className="right-bar">
                <Navbar />
                <div className="rightBarArea">
                    <RightBarContent />
                    <Row title={"2023 tamil trending"} />
                    <MusicPlayer />
                </div>
            </div>
        </div>
    )
}

export default LandingPage