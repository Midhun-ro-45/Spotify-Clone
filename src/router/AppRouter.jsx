import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongCollection from "../components/songCollection/SongCollection";
import ArtistSongList from "../components/artistSongList/ArtistSongList";
import Search from "../components/search/Search";
import AuthWrapper from "../components/wrappers/AuthWrapper";
import ParentPage from "../pages/parentpage/ParentPage";
import ArtistContent from "../components/artistContent box/ArtistContent";
import Row from "../components/row/Row";
import RightBarContent from "../components/rightBarContent/RightBarContent";
import Login from "../auth/login/Login";
import LandingPage from "../pages/landingpage/Landingpage";
import SignUp from "../auth/signup/SignUp";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loginform" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/parentpage" element={<ParentPage />} >

          <Route path="search" element={<Search />} />
          <Route path="songscollection" element={<SongCollection />} />
          <Route path="artistsongs" element={<ArtistSongList />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
