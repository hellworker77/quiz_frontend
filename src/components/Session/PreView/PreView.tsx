import React, {useEffect} from 'react';
import preViewStyles from './PreView.module.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import LoginContainer from "./Login/LoginContainer";
import RegisterContainer from "./Register/RegisterContainer";
import logo from '../../../images/logo.png'

const PreView = (props: any) => {
    let navigate = useNavigate();
    useEffect(() => {
        navigate("/user/login")
    },[])
    return (
        <div className={preViewStyles.box}>
            <img src={logo} alt={"logo"}></img>
            <p>Welcome!</p>
            <Routes>
                <Route path={"/login"} element={<LoginContainer />}/>
                <Route path={"/register"} element={<RegisterContainer />}/>
            </Routes>
        </div>
    );
};

export default PreView; 