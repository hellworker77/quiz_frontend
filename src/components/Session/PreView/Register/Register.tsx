import React from 'react';
import {RegisterProps} from "../../../../types/Implementation/Props/RegisterProps";
import uiStyles from '../UI.module.css'
import loginStyles from "../Login/Login.module.css";
import {Link} from "react-router-dom";

const Register = (props: RegisterProps) => {
    let loginRef: React.RefObject<HTMLInputElement> = React.createRef()
    let emailRef: React.RefObject<HTMLInputElement> = React.createRef()
    let passwordRef: React.RefObject<HTMLInputElement> = React.createRef()
    let repeatPasswordRef: React.RefObject<HTMLInputElement> = React.createRef()
    return (
        <div className={loginStyles.wrapper}>
            <div className={uiStyles.text}>Register</div>
            <input className={uiStyles.input} placeholder={"Enter login"} value={props.login} ref={loginRef} onChange={
                ()=> invokeCallback(loginRef, props.changeLogin)
            }></input>
            <input type={"email"} className={uiStyles.input} placeholder={"Enter email"} value={props.email} ref={emailRef} onChange={
                ()=> invokeCallback(emailRef, props.changeEmail)
            }></input>
            <input type={"password"} className={uiStyles.input} placeholder={"Enter password"} value={props.password} ref={passwordRef} onChange={
                ()=> invokeCallback(passwordRef, props.changePassword)
            }></input>
            <input type={"password"} className={uiStyles.input} placeholder={"Repeat password"} value={props.repeatPassword} ref={repeatPasswordRef} onChange={
                ()=> invokeCallback(repeatPasswordRef, props.changeRepeatPassword)
            }></input>
            <button className={uiStyles.button}>Регистрация</button>
            <Link to={"/user/login"} className={uiStyles.link}>I have an account</Link>
        </div>
    );
};

let invokeCallback = (refObject : React.RefObject<HTMLInputElement>,callBack: (newValue: string)=>void ) : void => {
    callBack(refObject.current?.value ?? "");
}

export default Register;