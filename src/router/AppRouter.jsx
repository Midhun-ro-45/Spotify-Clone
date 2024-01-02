import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Row from '../components/SongCart/row/Row'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/all' element={<Row />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter