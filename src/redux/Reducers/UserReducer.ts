import {InitialStateUserType} from "../../types/Implementation/InitialStates/InitialStateUserType";
import {
    CHANGE_LOGIN_ACTION_TYPE,
    ChangeLoginActonType
} from "../../types/Implementation/ActionTypes/UserActionTypes/СhangeLoginActonType";
import {
    CHANGE_EMAIL_ACTION_TYPE,
    ChangeEmailActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/ChangeEmailActionType";
import {
    CHANGE_PASSWORD_ACTION_TYPE,
    ChangePasswordActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/ChangePasswordActionType";
import {
    CHANGE_REPEAT_PASSWORD_ACTION_TYPE,
    ChangeRepeatPasswordActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/ChangeRepeatPasswordActionType";
import {
    START_EDIT_ACCOUNT_LOGIN_ACTION_TYPE,
    StartEditAccountLoginActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/StartEditAccountLoginActionType";
import {
    START_EDIT_ACCOUNT_EMAIL_ACTION_TYPE,
    StartEditAccountEmailActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/StartEditAccountEmailActionType";
import {
    EDIT_ACCOUNT_EMAIL_ACTION_TYPE,
    EditAccountEmailActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/EditAccountEmailActionType";
import {
    EDIT_ACCOUNT_LOGIN_ACTION_TYPE,
    EditAccountLoginActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/EditAccountLoginActionType";
import {SessionType} from "../../types/Implementation/Models/Users/SessionType";
import {LOAD_TOKEN_ACTION_TYPE, LoadTokenActionType} from "../../types/Implementation/ActionTypes/UserActionTypes/LoadTokenActionType";
import axios from "axios";

let initialState : InitialStateUserType = {
    authorizedUser : {
        id:"1",
        userName: "senior",
        email: "some@gmail.com",
        password: "1234",
        repeatPassword: "1234",
        rating: 3600,
    },
    leaderBoard: null,
    loadedUserData: null,
    session: {
        access_token: "",
        expires_in: 0,
        scope: "",
        token_type: ""
    },
    login: "admin",
    email: "mail@gmail.com",
    password: "!QAZ2wsx",
    repeatPassword: "!QAZ2wsx",
    editingEmail: false,
    editingLogin: false
}

const UserReducer = (state = initialState, action : UserPageGlobalActionType) : InitialStateUserType => {
    switch (action.type){
        case CHANGE_LOGIN_ACTION_TYPE:
            return {
                ...state,
                login: action.changedLogin
            }
        case CHANGE_EMAIL_ACTION_TYPE:
            return {
                ...state,
                email: action.changedEmail
            }
        case CHANGE_PASSWORD_ACTION_TYPE:
            return {
                ...state,
                password: action.changedPassword
            }
        case CHANGE_REPEAT_PASSWORD_ACTION_TYPE:
            return {
                ...state,
                repeatPassword: action.changedRepeatPassword
            }
        case START_EDIT_ACCOUNT_LOGIN_ACTION_TYPE:
            return {
                ...state,
                editingLogin: true
            }
        case START_EDIT_ACCOUNT_EMAIL_ACTION_TYPE:
            return {
                ...state,
                editingEmail: true
            }
        case EDIT_ACCOUNT_EMAIL_ACTION_TYPE:
            return <InitialStateUserType>{
                ...state,
                authorizedUser: {...state.authorizedUser, email: action.value}
            }
        case EDIT_ACCOUNT_LOGIN_ACTION_TYPE:
            return <InitialStateUserType>{
                ...state,
                authorizedUser: {...state.authorizedUser, userName: action.value}
            }
        case LOAD_TOKEN_ACTION_TYPE:
            axios.defaults.headers.common['Authorization'] = `${action.data.token_type} ${action.data.access_token}`
            return {
                ...state,
                session: action.data
            }
        default:
            return {
                ...state
            }
    }
}

export type UserPageGlobalActionType = ChangeLoginActonType |
    ChangeEmailActionType |
    ChangePasswordActionType |
    ChangeRepeatPasswordActionType |
    StartEditAccountLoginActionType |
    StartEditAccountEmailActionType |
    EditAccountEmailActionType |
    EditAccountLoginActionType |
    LoadTokenActionType

export const changeLoginActionCreate = (newLogin: string) : ChangeLoginActonType => ({
    type: CHANGE_LOGIN_ACTION_TYPE, changedLogin: newLogin
})
export const changeEmailActionCreate = (newEmail: string) : ChangeEmailActionType => ({
    type: CHANGE_EMAIL_ACTION_TYPE, changedEmail: newEmail
})
export const changePasswordActionCreate = (newPassword: string) : ChangePasswordActionType => ({
    type: CHANGE_PASSWORD_ACTION_TYPE, changedPassword: newPassword
})
export const changeRepeatPasswordActionCreate = (newPassword: string) : ChangeRepeatPasswordActionType => ({
    type: CHANGE_REPEAT_PASSWORD_ACTION_TYPE, changedRepeatPassword: newPassword
})
export const startEditAccountLoginActionCreate = () : StartEditAccountLoginActionType => ({
    type: START_EDIT_ACCOUNT_LOGIN_ACTION_TYPE
})
export const startEditAccountEmailActionCreate = () : StartEditAccountEmailActionType => ({
    type: START_EDIT_ACCOUNT_EMAIL_ACTION_TYPE
})
export const editAccountLoginActionCreate = (value: string) : EditAccountLoginActionType => ({
    type: EDIT_ACCOUNT_LOGIN_ACTION_TYPE, value: value
})
export const editAccountEmailActionCreate = (value: string) : EditAccountEmailActionType => ({
    type: EDIT_ACCOUNT_EMAIL_ACTION_TYPE , value: value
})
export const loadTokenActionCreate = (token: SessionType) : LoadTokenActionType => ({
    type: LOAD_TOKEN_ACTION_TYPE, data: token
})





export default UserReducer;