import {AxiosRequestConfig} from "axios";
import {LOAD_CHUNK_ENDPOINT} from "../Api/Test/TestApi";
import {Test} from "../Models/Test/Test";

export const loadChunkRequestCreator = (page: number, size: number) : AxiosRequestConfig<Array<Test>>  => {
    const config: AxiosRequestConfig = {
        method: "get",
        url: LOAD_CHUNK_ENDPOINT,
        params:{
            'number': page,
            'size': size
        }
    };
    return config
}
