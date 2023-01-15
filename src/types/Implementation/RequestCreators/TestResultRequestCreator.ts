import {AxiosRequestConfig} from "axios";
import {LOAD_CHUNK_ENDPOINT, REPLY_ENDPOINT} from "../Api/TestResult/TestResultApi";
import {TestResult} from "../Models/Test/TestResult";
import {TestAnswer} from "../Models/Test/TestAnswer";

export const loadChunkRequestCreator = (token_type: string, access_token : string, page: number, size: number) : AxiosRequestConfig<Array<TestResult>>  => {
    const config: AxiosRequestConfig = {
        method: "get",
        url: LOAD_CHUNK_ENDPOINT,
        headers:{
            'Authorization':`${token_type} ${access_token}`
        },
        params:{
            'number': page,
            'size': size
        }
    };
    return config
}
export const replyRequestCreator = (token_type: string, access_token : string, testAnswer: TestAnswer) : AxiosRequestConfig =>{
    const config: AxiosRequestConfig = {
        method: "post",
        url: REPLY_ENDPOINT,
        headers:{
            'Authorization':`${token_type} ${access_token}`
        },
        data: testAnswer
    };
    return config
}