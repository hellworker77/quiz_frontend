import React from 'react';
import './App.css';
import MainContainer from "./components/Main/MainContainer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { AppProps } from './types/Implementation/Props/AppProps';
import AboutContainer from "./components/About/AboutContainer";
import SessionContainer from "./components/Session/SessionContainer";
import DetailTestAnswerContainer from "./components/DetailTest/DetailTestAnswerContainer";
import Snowfall from 'react-snowfall'
import DetailTestResultContainer from "./components/DetailTest/DetailTestResultContainer";

let App = (props: AppProps) => {
    return (
        <div className="App" style={{backgroundImage: `url("${props.background}")`}}>
            <div style={{ height: "100%", width: "100vw", background: 'transparent', position: 'absolute' ,pointerEvents: "none" }}>
                <Snowfall />
            </div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<MainContainer/>}/>
                    <Route path="/about" element={<AboutContainer/>}/>
                    <Route path="/user/*" element={<SessionContainer />}/>
                    <Route path="/test/:id" element={<DetailTestAnswerContainer />}/>
                    <Route path="/user/testResult/:id" element={<DetailTestResultContainer />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
