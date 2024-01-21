import { Outlet } from "react-router-dom";
import HomeContainer from "../../components/homecontainer/HomeContainer";
import Navbar from "../../components/navbar/Navbar";
import MusicPlayer from "../../components/musicplayer/MusicPlayer";
import SongHeadingContainer from "../../components/songHeadingContainer/SongHeadingContainer";
import HomePage from "../../components/homepage/HomePage";
import "./parentpage.css";
import RightBarContent from "../../components/rightBarContent/RightBarContent";
import Row from "../../components/row/Row";
import Search from "../../components/search/Search";
import { Route } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useEffect, useState } from "react";
import { getSongsByHeadingId, getPlaylistData } from "../../api/getSongs";
import axios from "axios";
import { getArtistIdByName, getUserDetails } from "../../api/getSongs";


const ParentPage = () => {


  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken);

    const headers = {
      Authorization: `Bearer BQABVdy9Bzjgv_DXPmoasIlXFbBTeOa8Ou8Izxowr2ZzlMCO7-kT5jDErxNJ8K4M3Lt3Qp8Y8E_-t0vDTpcpLXDbHQbY3jpstRm_l6Ylrxb3dV4CIb_yujGDKCLpUDIQub1M9b7-cCPNGvLyep3k7pyQ9RGM2dAov2xQIVJJXnN9L7YUlGGtz-WsFWpyMl8VboBNFHZ_C47aNqgfWUV2&token_type=Bearer&expires_in=3600`,
      "Content-Type": "application/json",
    };



    getUserDetails()



    // id of artist





    getArtistIdByName();




    const refreshToken = localStorage.getItem("refresh_token");

    // Function to refresh the access token
    const refreshAccessToken = async () => {
      // Implement the logic to refresh the token using the refresh token
    };


  }, [])



  return (
    <div className="parentpage-container">
      <div className="left-bar">
        <HomeContainer />
        <SongHeadingContainer />
      </div>
      <div className="right-bar">
        <Navbar />
        <div className="rightBarArea">
          {/* <RightBarContent />
          <Row /> */}
          <Outlet />
        </div>
      </div>
      <MusicPlayer />

    </div>
  );
};

export default ParentPage;
