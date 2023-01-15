import {AxiosRequestConfig} from "axios";
import {
    AUTHORIZATION_ENDPOINT,
    CHANGE_PASSWORD_ENDPOINT,
    EDIT_ENDPOINT,
    GET_ENDPOINT,
    LEADERS_ENDPOINT
} from "../Api/User/UserApi";

export const authorizationRequestCreator = (userName: string, password: string) : AxiosRequestConfig  => {
    const params = new URLSearchParams();
    params.append('client_id', 'Api');
    params.append('client_secret', 'client_secret');
    params.append('AllowedScopes', 'api');
    params.append('grant_type', 'password');
    params.append('password', password);
    params.append('username', userName);

    const config: AxiosRequestConfig = {
        method: "post",
        url: AUTHORIZATION_ENDPOINT,
        data: params
    };
    return config
}

export const editRequestCreator = (tokenType:string, accessToken: string, userName: string, email: string) : AxiosRequestConfig => {
    const config : AxiosRequestConfig = {
        method: "put",
        url: EDIT_ENDPOINT,
        headers:{
            "Authorization":`${tokenType} ${accessToken}`,
            'content-type': 'text/json'
        },
        params:{
            'userName':userName,
            'email':email
        }
    }
    return config
}

export const getUserRequestCreator = (tokenType:string, accessToken: string): AxiosRequestConfig => {
    const config : AxiosRequestConfig = {
        method: "get",
        url: GET_ENDPOINT,
        headers:{
            "Authorization":`${tokenType} ${accessToken}`
        }
    }
    return config
}

export const getLeadersRequestCreator = (page: number, size: number) : AxiosRequestConfig=> {
    const config : AxiosRequestConfig = {
        method: "get",
        url: LEADERS_ENDPOINT,
        params:{
            "number": page,
            "size": size
        }
    }
    return config
}

export const changePasswordRequestCreator = (tokenType: string, accessToken: string, password: string, oldPassword: string) : AxiosRequestConfig => {
    const config : AxiosRequestConfig = {
        method: "put",
        url: CHANGE_PASSWORD_ENDPOINT,
        headers:{
            "Authorization":`${tokenType} ${accessToken}`
        },
        params:{
            "password": password,
            "oldPassword": oldPassword
        }
    }
    return config;
}