import React, {useEffect, useState} from "react";
import {MainProps} from "../../types/Implementation/Props/MainProps";
import TestsContainer from "./Tests/TestsContainer";
import axios, {AxiosRequestConfig} from "axios";
import {Test} from "../../types/Implementation/Models/Test/Test";
import {loadChunkRequestCreator} from "../../types/Implementation/RequestCreators/TestRequestCreator";
import mainStyles from './Main.module.css'

let Main = (props: MainProps) => {
    useEffect( () => {
        if(props.count === 0){
            invokeCallbackLoadChunk(props.page, props.size, props.loadTests)
        }
    },[]);

    return (
        <div className={mainStyles.wrapper}>
            <TestsContainer/>
            <div className={mainStyles.button} onClick={() => {invokeCallbackLoadChunk(props.page, props.size, props.loadTests)}}>Load more...</div>
        </div>
    )
}

const invokeCallbackLoadChunk = (page: number, size: number, callback: (data: Array<Test>) => void) : void =>{
    let config = loadChunkRequestCreator(page, size)
    axios<Array<Test>>(config).then(response => callback(response.data)).catch(error => console.log(error))
}


export default Main;