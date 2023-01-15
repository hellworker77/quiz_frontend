import React, {useEffect} from 'react';
import userPageStyles from './UserPage.module.css'
import uiStyles from  '../PreView/UI.module.css'
import {UserPageProps} from "../../../types/Implementation/Props/UserPageProps";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey, faEdit, faGear, faSignOut, faCamera, faSave, faTimes} from "@fortawesome/free-solid-svg-icons";
import TestResultsContainer from './TestResults/TestResultsContainer';
import axios from "axios";
import {User} from "../../../types/Implementation/Models/Users/User";
import {
    changePasswordRequestCreator,
    editRequestCreator,
    getUserRequestCreator
} from "../../../types/Implementation/RequestCreators/UserRequestCreator";
import { AxiosResponse, AxiosError } from 'axios'
import Draggable from 'react-draggable';
import {getRankFromRatingValue} from "../../../utilities/getRankFromRatingValue";

const UserPage = (props: UserPageProps) => {
    let loginRef : React.RefObject<HTMLInputElement>= React.createRef()
    let emailRef: React.RefObject<HTMLInputElement> = React.createRef()
    let passwordRef : React.RefObject<HTMLInputElement> = React.createRef()
    let oldPasswordRef: React.RefObject<HTMLInputElement> = React.createRef();
    useEffect(()=>{
        let config = getUserRequestCreator(props.session?.token_type ?? "", props.session?.access_token ?? "")
        axios<User>(config)
            .then(response => {
                props.loadUser(response.data)
            })
            .catch(error => console.log(error))
    },[])
    return (
        <div className={userPageStyles.page_wrapper}>
            <div className={userPageStyles.page_container}>
                <div className={userPageStyles.profile_info}>
                    <div className={userPageStyles.image_container}>
                        <img
                            src={`data:image/jpeg;base64,${props.loadUserData?.photo?.data}`}
                            alt={""}/>
                        <FontAwesomeIcon icon={faCamera} className={userPageStyles.camera} style={{display:"none"}}></FontAwesomeIcon>
                    </div>
                    <div className={userPageStyles.profile_text_container}>
                        <div className={`${userPageStyles.profile_text + " " + userPageStyles.name}`}>
                            {
                                props.editingLogin?
                                    <input type={"text"} value={props.loadUserData?.userName ?? ""} ref={loginRef}
                                           onChange={()=>invokeCallback(loginRef.current?.value, props.editLogin )}/> :
                                    props.loadUserData?.userName
                            }
                            {
                                props.editingLogin?
                                    <button><FontAwesomeIcon icon={faSave} onClick={() => invokeSaveCallback(
                                        props.session?.token_type??"",
                                        props.session?.access_token??"",
                                        props.loadUserData?.userName ?? "",
                                        props.loadUserData?.email ?? "",
                                        props.stopEditLogin
                                    )}/></button>:
                                    <button><FontAwesomeIcon icon={faEdit} onClick={props.startEditLogin}/></button>
                            }

                        </div>
                        <div className={`${userPageStyles.profile_text + " " + userPageStyles.email}`}>
                            {
                                props.editingEmail?
                                    <input type={"text"} value={props.loadUserData?.email ?? ""} ref={emailRef}
                                           onChange={()=>invokeCallback(emailRef.current?.value, props.editEmail )}/>:
                                    props.loadUserData?.email
                            }
                            {
                                props.editingEmail?
                                    <button><FontAwesomeIcon icon={faSave} onClick={() => invokeSaveCallback(
                                        props.session?.token_type??"",
                                        props.session?.access_token??"",
                                        props.loadUserData?.userName ?? "",
                                        props.loadUserData?.email ?? "",
                                        props.stopEditEmail
                                    )}/></button>:
                                    <button><FontAwesomeIcon icon={faEdit} onClick={props.startEditEmail}/></button>
                            }
                        </div>
                    </div>
                    <div className={userPageStyles.panels_container}>
                        <div className={`${userPageStyles.total_panel + " " + userPageStyles.panel}`}>
                            <div className={userPageStyles.title}>total</div>
                            <div className={userPageStyles.inner}>{props.total}</div>
                        </div>
                        <div className={`${userPageStyles.won_panel + " " + userPageStyles.panel}`}>
                            <div className={userPageStyles.title}>won</div>
                            <div className={userPageStyles.inner}>{props.won}</div>
                        </div>
                        <div className={`${userPageStyles.lose_panel + " " + userPageStyles.panel}`}>
                            <div className={userPageStyles.title}>loses</div>
                            <div className={userPageStyles.inner}>{props.lose}</div>
                        </div>
                    </div>
                </div>
                <div className={userPageStyles.profile_settings}>
                    <div className={userPageStyles.button} onClick={()=>props.startEditPassword()}><FontAwesomeIcon icon={faKey}/><span
                        className={userPageStyles.text}>Change password</span></div>
                    <div className={userPageStyles.button}><FontAwesomeIcon icon={faGear}/><span
                        className={userPageStyles.text}>Manage profile</span></div>
                    <div className={userPageStyles.button}><FontAwesomeIcon icon={faSignOut}/><span
                        className={userPageStyles.text}>Logout</span></div>
                </div>
                <div className={userPageStyles.statics_container} >
                    <div className={userPageStyles.rating}>
                        <img className={userPageStyles.rank} src={getRankFromRatingValue(props.loadUserData?.rating ?? 0)} alt={""}/>
                        <div className={userPageStyles.rating_value}>
                            rating {props.loadUserData?.rating ?? -1}
                        </div>
                    </div>
                    <TestResultsContainer/>

                </div>
            </div>
            <div className={userPageStyles.change_password_window_container} style={{display:props.editingPassword?"block":"none"}}>
                <Draggable >
                    <div className={userPageStyles.change_password_window}>
                        <div className={userPageStyles.change_password_window_panel}>
                            <div className={userPageStyles.change_password_window_panel_name}>
                                Change password
                            </div>
                            <div className={userPageStyles.change_password_window_panel_close} onClick={()=>props.stopEditPassword()}>
                                <FontAwesomeIcon icon={faTimes} className={userPageStyles.close_button}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className={userPageStyles.inputs_container}>
                            <input className={uiStyles.input} ref={passwordRef} onChange={()=>props.changePassword(passwordRef.current?.value ?? "")} value={props.password} placeholder={"password..."} type={"password"}></input>
                            <input className={uiStyles.input} ref={oldPasswordRef} onChange={()=>props.changeOldPassword(oldPasswordRef.current?.value ?? "")} value={props.oldPassword} placeholder={"old password..."} type={"password"}></input>
                            <button className={uiStyles.button}
                                    onClick={()=> invokeChangePasswordCallback(props.session?.token_type??"",
                                            props.session?.access_token ?? "",
                                            props.password, props.oldPassword)}>Submit</button>
                        </div>
                    </div>
                </Draggable>
            </div>
        </div>
    );
};

const invokeCallback = (value: string | undefined, callback: (value: string) => void) : void =>{
    callback(value ?? "")
}
const invokeSaveCallback = (token_type: string, access_token: string,userName: string, email: string, callback: () => void): void => {
    let config = editRequestCreator(token_type, access_token, userName, email)
    axios(config).then((response : AxiosResponse) => {
        if(response.status == 200){
            callback()
        }
    }).catch((error: AxiosError) => console.log(error))

}
const invokeChangePasswordCallback = (tokenType: string, accessToken: string, password: string, oldPassword: string) : void => {
    let config = changePasswordRequestCreator(tokenType, accessToken, password, oldPassword);
    axios(config).then(response => console.log(response.data)).catch(error=>console.log(error))
}

export default UserPage;