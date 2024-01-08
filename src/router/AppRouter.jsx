import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongCollection from "../components/songCollection/SongCollection";
import ArtistSongList from "../components/artistSongList/ArtistSongList";
import Search from "../components/search/Search";
import AuthWrapper from "../components/wrappers/AuthWrapper";
import ParentPage from "../pages/ParentPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthWrapper>
              <ParentPage />
            </AuthWrapper>
          }
        >
          <Route index element={<h1>element</h1>} />
          <Route path="search" element={<Search />} />
          <Route path="songscollection" element={<SongCollection />} />
          <Route path="artistSongs" element={<ArtistSongList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
