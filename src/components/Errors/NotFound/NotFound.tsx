import React from 'react';
import notFoundStyles from './NotFound.module.css'


export type NotFoundErrorProps = {
    subject?: string
    message?: string
}

const NotFound = (props:NotFoundErrorProps) => {

    return (
        <div className={notFoundStyles.wrapper}>
            <div className={notFoundStyles.message}>{props.message?props.message:"Error 404"}</div>
            <div className={notFoundStyles.subject}>{props.subject?props.subject:"content not found"}</div>
        </div>
    );
};

export default NotFound;