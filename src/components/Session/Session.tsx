import React from 'react';
import {SessionProps} from "../../types/Implementation/Props/SessionProps";
import PreViewContainer from "./PreView/PreViewContainer";
import sessionStyle from './Session.module.css'
import UserPageContainer from "./User/UserPageContainer";

const Session = (props: SessionProps) => {
    return (
        <div className={sessionStyle.wrapper}>
            {props.isAuthorized?
                <UserPageContainer />:
                <PreViewContainer />
            }
        </div>
    );
};

export default Session;