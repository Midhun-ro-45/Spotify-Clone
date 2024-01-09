import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongCollection from "../components/songCollection/SongCollection";
import ArtistSongList from "../components/artistSongList/ArtistSongList";
import Search from "../components/search/Search";
import AuthWrapper from "../components/wrappers/AuthWrapper";
import ParentPage from "../pages/ParentPage";
import ArtistContent from "../components/artistContent box/ArtistContent";
import Row from "../components/row/Row";
import RightBarContent from "../components/rightBarContent/RightBarContent";
import Login from "../auth/Login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} >

          <Route index element={<><RightBarContent /><Row /></>} />
          <Route path="search" element={<Search />} />
          <Route path="songscollection" element={<SongCollection />} />
          <Route path="artistsongs" element={<ArtistSongList />} />
          <Route path="/parentpage" element={<ParentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
