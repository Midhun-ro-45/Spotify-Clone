import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from "./reducer"
import { Datalayer } from './Datalayer';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import ArtistContent from './components/artistContent box/ArtistContent';
import AppRouter from './router/AppRouter';
import HomeContainer from './components/homecontainer/HomeContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Datalayer initialState={initialState} reducer={reducer}>
    <App />
    <HomeContainer />
  </Datalayer>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
