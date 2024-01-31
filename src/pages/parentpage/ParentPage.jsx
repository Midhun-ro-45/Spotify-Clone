import { Outlet } from "react-router-dom";
import HomeContainer from "../../components/homecontainer/HomeContainer";
import Navbar from "../../components/navbar/Navbar";
import MusicPlayer from "../../components/musicplayer/MusicPlayer";
import SongHeadingContainer from "../../components/songHeadingContainer/SongHeadingContainer";
import "./parentpage.css";


const ParentPage = () => {

  return (
    <div className="parentpage-container">
      <div className="left-bar">
        <HomeContainer />
        <SongHeadingContainer />
      </div>
      <div className="right-bar">
        <Navbar />
        <div className="rightBarArea">
          <Outlet />
        </div>
      </div>
      <MusicPlayer />

    </div>
  );
};

export default ParentPage;
