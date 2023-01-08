import React from 'react';
import userPageStyles from './UserPage.module.css'
import {UserPageProps} from "../../../types/Implementation/Props/UserPageProps";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey, faEdit, faGear, faSignOut, faCamera, faSave} from "@fortawesome/free-solid-svg-icons";
import TestResultsContainer from './TestResults/TestResultsContainer';
import heraldImage from "../../../images/ranks/herald.png"

const UserPage = (props: UserPageProps) => {
    let loginRef : React.RefObject<HTMLInputElement>= React.createRef()
    let emailRef: React.RefObject<HTMLInputElement> = React.createRef()
    return (
        <div className={userPageStyles.page_wrapper}>
            <div className={userPageStyles.page_container}>
                <div className={userPageStyles.profile_container}>
                    <div className={userPageStyles.profile_info}>
                        <div className={userPageStyles.image_container}>
                            <img
                                src={"https://sun9-north.userapi.com/sun9-86/s/v1/ig2/wczzOPj_I_xcNAQct3roWIzEMmKmS5dbPrz4N72jno3mmKu14oUkt958rI1fE4s9vTE9fEXONkpy0FLY5VaAZAQT.jpg?size=600x600&quality=96&type=album"}
                                alt={""}/>
                            <FontAwesomeIcon icon={faCamera} className={userPageStyles.camera}></FontAwesomeIcon>
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
                                        <button><FontAwesomeIcon icon={faSave}/></button>:
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
                                        <button><FontAwesomeIcon icon={faSave}/></button>:
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
                        <div className={userPageStyles.button}><FontAwesomeIcon icon={faKey}/><span
                            className={userPageStyles.text}>Change password</span></div>
                        <div className={userPageStyles.button}><FontAwesomeIcon icon={faGear}/><span
                            className={userPageStyles.text}>Manage profile</span></div>
                        <div className={userPageStyles.button}><FontAwesomeIcon icon={faSignOut}/><span
                            className={userPageStyles.text}>Logout</span></div>
                    </div>
                </div>
                <div className={userPageStyles.statics_container}>
                    <div className={userPageStyles.rating}>
                        <img className={userPageStyles.rank} src={heraldImage} alt={""}/>
                        <div className={userPageStyles.rating_value}>
                            rating {props.loadUserData?.rating ?? -1}
                        </div>
                    </div>
                    <TestResultsContainer/>
                    <div className={userPageStyles.load_more}>load more...</div>
                </div>
            </div>
        </div>
    );
};

const invokeCallback = (value: string | undefined, callback: (value: string) => void) : void =>{
    callback(value ?? "")
}

export default UserPage;