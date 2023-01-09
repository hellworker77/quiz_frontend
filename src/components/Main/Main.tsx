import React, {useEffect} from "react";
import {MainProps} from "../../types/Implementation/Props/MainProps";
import TestsContainer from "./Tests/TestsContainer";
import axios from "axios";
import {Test} from "../../types/Implementation/Models/Test/Test";

let Main = (props : MainProps) => {
    useEffect(()=>{
        let promise = new Promise<Array<Test> | null>((resolve, reject)=>{
            resolve(axios.get<Array<Test> | null>("https://localhost:7119/api/Test/chunk?size=1&number=0")
                .then(response => {
                    return response.data
                }).catch(error => {
                    return null
                }))
        })
        promise.then(data => props.loadTests(data))
    },[])
    return(
        <div>
            <TestsContainer />
        </div>
    )
}

const T = (a:Array<Test>): void =>{
    a.forEach(x=>console.log(x.questionsDto))
}

export default Main;