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
      Authorization: `Bearer BQDG5iSfoP2yglM1OF8mWxe158vPbDsfcEUHAwjQ2WRyNLSyJ3lfZ-9tcWYlnTgCYRVRYxl0_HCkRK5yfaZ4xXGk23RNgManUwwNW3C6SEAW1gHVtjUDWuHq3cjVV355NvN6RXJOXVeliM97RiCikprV3x4Re2udvYAP2JiUR0WKBhJ890PIiVgh1I4Jh0iwYQ_bpufZDi91ClSzXLp_&token_type=Bearer&expires_in=3600`,
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
