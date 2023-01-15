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
import {
    LOAD_TOKEN_ACTION_TYPE,
    LoadTokenActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/LoadTokenActionType";
import {
    LOAD_USER_ACTION_TYPE,
    LoadUserActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/LoadUserActionType";
import {User} from "../../types/Implementation/Models/Users/User";
import {
    STOP_EDIT_ACCOUNT_LOGIN_ACTION_TYPE,
    StopEditAccountLoginActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/StopEditAccountLoginActionType";
import {
    STOP_EDIT_ACCOUNT_EMAIL_ACTION_TYPE,
    StopEditAccountEmailActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/StopEditAccountEmailActionType";
import {
    LOAD_LEADERS_ACTION_TYPE,
    LoadLeadersActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/LoadLeadersActionType";
import {
    START_EDIT_ACCOUNT_PASSWORD_ACTION_TYPE,
    StartEditAccountPasswordActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/StartEditAccountPasswordActionType";
import {
    STOP_EDIT_ACCOUNT_PASSWORD_ACTION_TYPE,
    StopEditAccountPasswordActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/StopEditAccountPasswordActionType";
import {
    CHANGE_OLD_PASSWORD_ACTION_TYPE,
    ChangeOldPasswordActionType
} from "../../types/Implementation/ActionTypes/UserActionTypes/ChangeOldPasswordActionType";

let initialState : InitialStateUserType = {
    authorizedUser : null,
    leaderBoard: [],
    pageSize:1,
    session: {
        access_token: "",
        expires_in: 0,
        scope: "",
        token_type: ""
    },
    leaderBoardPage: 0,
    login: "admin",
    email: "mail@gmail.com",
    password: "!QAZ2wsx",
    repeatPassword: "!QAZ2wsx",
    oldPassword: "!QAZ2wsx",
    editingEmail: false,
    editingLogin: false,
    editingPassword: false
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
        case CHANGE_OLD_PASSWORD_ACTION_TYPE:
            return {
                ...state,
                oldPassword: action.changedPassword
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
        case START_EDIT_ACCOUNT_PASSWORD_ACTION_TYPE:
            return {
                ...state,
                editingPassword: true
            }
        case STOP_EDIT_ACCOUNT_LOGIN_ACTION_TYPE:
            return {
                ...state,
                editingLogin: false
            }
        case STOP_EDIT_ACCOUNT_EMAIL_ACTION_TYPE:
            return {
                ...state,
                editingEmail: false
            }
        case STOP_EDIT_ACCOUNT_PASSWORD_ACTION_TYPE:
            return {
                ...state,
                editingPassword: false
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
            return {
                ...state,
                session: action.data
            }
        case LOAD_USER_ACTION_TYPE:
            return {
                ...state,
                authorizedUser: {...action.user}
            }
        case LOAD_LEADERS_ACTION_TYPE:
            if(action.data.length > 0){
                state.leaderBoardPage += 1
            }
            return {
                ...state,
                leaderBoard: [...state.leaderBoard.concat(action.data)]
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
    ChangeOldPasswordActionType |
    StartEditAccountLoginActionType |
    StartEditAccountEmailActionType |
    StartEditAccountPasswordActionType |
    StopEditAccountEmailActionType |
    StopEditAccountLoginActionType |
    StopEditAccountPasswordActionType |
    EditAccountEmailActionType |
    EditAccountLoginActionType |
    LoadTokenActionType |
    LoadUserActionType |
    LoadLeadersActionType

export const changeLoginActionCreate = (newLogin: string) : ChangeLoginActonType => ({
    type: CHANGE_LOGIN_ACTION_TYPE, changedLogin: newLogin
})
export const changeEmailActionCreate = (newEmail: string) : ChangeEmailActionType => ({
    type: CHANGE_EMAIL_ACTION_TYPE, changedEmail: newEmail
})
export const changePasswordActionCreate = (newPassword: string) : ChangePasswordActionType => ({
    type: CHANGE_PASSWORD_ACTION_TYPE, changedPassword: newPassword
})
export const changeOldPasswordActionCreate = (newPassword: string) : ChangeOldPasswordActionType => ({
    type: CHANGE_OLD_PASSWORD_ACTION_TYPE, changedPassword: newPassword
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
export const loadUserActionType = (user: User) : LoadUserActionType => ({
    type: LOAD_USER_ACTION_TYPE, user: user
})
export const stopEditAccountLoginActionCreate = () : StopEditAccountLoginActionType => ({
    type: STOP_EDIT_ACCOUNT_LOGIN_ACTION_TYPE
})
export const stopEditAccountEmailActionCreate = () : StopEditAccountEmailActionType => ({
    type: STOP_EDIT_ACCOUNT_EMAIL_ACTION_TYPE
})
export const loadLeadersActionCreate = (data: Array<User>) : LoadLeadersActionType => ({
    type: LOAD_LEADERS_ACTION_TYPE, data: data
})
export const startEditAccountPasswordActionCreate = (): StartEditAccountPasswordActionType => ({
    type: START_EDIT_ACCOUNT_PASSWORD_ACTION_TYPE
})
export const stopEditAccountPasswordActionCreate =() : StopEditAccountPasswordActionType => ({
    type: STOP_EDIT_ACCOUNT_PASSWORD_ACTION_TYPE
})




export default UserReducer;