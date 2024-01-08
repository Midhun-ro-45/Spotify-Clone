import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SongCollection from '../components/songCollection/SongCollection'
import ArtistSongList from '../components/artistSongList/ArtistSongList'
import Search from '../components/search/Search'
import HomePage from '../components/homepage/HomePage'

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/songscollection' element={<SongCollection />} />
                <Route path='/artistSongs' element={<ArtistSongList />} />
                <Route path='/search' element={<Search />} />
            </Routes>
        </Router>
    )
}

export default AppRouter