import { Outlet } from "react-router-dom";
import HomeContainer from "../components/homecontainer/HomeContainer";
import Navbar from "../components/navbar/Navbar";
import MusicPlayer from "../components/musicplayer/MusicPlayer";
import SongHeadingContainer from "../components/songHeadingContainer/SongHeadingContainer";
import HomePage from "../components/homepage/HomePage";
import "./parentpage.css"
import RightBarContent from "../components/rightBarContent/RightBarContent";
import Row from "../components/row/Row";
import { useState } from "react";
import { getIdOfSongs, getSongsByHeadingId } from "../api/getSongs";


const ParentPage = () => {
  const [songs, setSongs] = useState(null);

  getIdOfSongs("tamil trending").then((songId) => {
    if (songId) {
      getSongsByHeadingId(songId).then((songs) => setSongs(songs?.items));
    }
  });
  return (
    // <div className="parentpage-conatiner">

    //   <div className="left-bar">
    //     <HomeContainer />
    //     <SongHeadingContainer />
    //   </div>

    //   <div className="right-bar">
    //     <Navbar />

    //     <div className="rightBarArea">
    //       <Outlet />
    //       <MusicPlayer />
    //     </div>

    //   </div>

    // </div>
    // <HomePage />

    <div className="parentpage-container">
      <div className="left-bar">
        <HomeContainer />
        <SongHeadingContainer />
      </div>
      <div className="right-bar">
        <Navbar />
        <div className="rightBarArea">
          {/* <RightBarContent />
          <Row title={"2023 tamil trending"} songs={songs} /> */}
          <Outlet />
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
};

export default ParentPage;
