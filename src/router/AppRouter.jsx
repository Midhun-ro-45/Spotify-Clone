import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Row from '../components/row/Row'
import SongCollection from '../components/songCollection/SongCollection'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/all' element={<Row />} />
                <Route path='/songscollection' element={<SongCollection />} />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter