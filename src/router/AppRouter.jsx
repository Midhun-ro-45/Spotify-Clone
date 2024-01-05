import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Row from '../components/row/Row'
import SongCollection from '../components/songCollection/SongCollection'
import ArtistSongList from '../components/artistSongList/ArtistSongList'
import Search from '../components/search/Search'

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/all' element={<Row />} />
                <Route path='/songscollection' element={<SongCollection />} />
                <Route path='/artistSongs' element={<ArtistSongList />} />
                <Route path='/search' element={<Search />} />
            </Routes>
        </Router>
    )
}

export default AppRouter