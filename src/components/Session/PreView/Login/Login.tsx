import React from 'react';
import {LoginProps} from "../../../../types/Implementation/Props/LoginProps";
import loginStyles from './Login.module.css'
import uiStyles from '../UI.module.css'
import {Link} from "react-router-dom";
import axios from "axios";
import {SessionType} from "../../../../types/Implementation/Models/Users/SessionType";

const Login = (props: LoginProps) => {
    let loginRef: React.RefObject<HTMLInputElement> = React.createRef()
    let passwordRef: React.RefObject<HTMLInputElement> = React.createRef()
    return (
        <div className={loginStyles.wrapper}>
            <div className={uiStyles.text}>Login</div>
            <input className={uiStyles.input} placeholder={"Enter your login"} value={props.login} ref={loginRef} onChange={
                ()=>invokeCallback(loginRef, props.changeLogin)}></input>
            <input type={"password"} className={uiStyles.input}  placeholder={"Enter your password"} value={props.password} ref={passwordRef} onChange={
                ()=>{invokeCallback(passwordRef, props.changePassword)}}></input>
            <button className={uiStyles.button} onClick={() => invokeLogin(props.login, props.password , props.loadToken)}>Войти</button>
            <Link to={"/user/register"} className={uiStyles.link}>I don't have an account</Link>
        </div>
    );
};

let invokeCallback = (refObject : React.RefObject<HTMLInputElement>,callBack: (newValue: string)=>void ) : void => {
    callBack(refObject.current?.value ?? "");
}
let invokeLogin = (login: string, password: string, callback: (token: SessionType) => void) : void => {
    const params = new URLSearchParams();
    params.append('client_id', 'Api');
    params.append('client_secret', 'client_secret');
    params.append('AllowedScopes', 'api');
    params.append('grant_type', 'password');
    params.append('password', password);
    params.append('username', login);


    let promise = new Promise<any>((resolve, reject) =>
        resolve(axios.post<SessionType>("https://localhost:10001/connect/token", params)))
    promise.then(response => callback(response.data))
}

export default Login;