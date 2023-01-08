import {InitialStateUserType} from "../../types/Implementation/InitialStates/InitialStateUserType";
import {
    CHANGE_LOGIN_ACTION_TYPE,
    ChangeLoginActonType
} from "../../types/Implementation/ActionTypes/СhangeLoginActonType";
import {
    CHANGE_EMAIL_ACTION_TYPE,
    ChangeEmailActionType
} from "../../types/Implementation/ActionTypes/ChangeEmailActionType";
import {
    CHANGE_PASSWORD_ACTION_TYPE,
    ChangePasswordActionType
} from "../../types/Implementation/ActionTypes/ChangePasswordActionType";
import {
    CHANGE_REPEAT_PASSWORD_ACTION_TYPE,
    ChangeRepeatPasswordActionType
} from "../../types/Implementation/ActionTypes/ChangeRepeatPasswordActionType";
import {
    START_EDIT_ACCOUNT_LOGIN_ACTION_TYPE,
    StartEditAccountLoginActionType
} from "../../types/Implementation/ActionTypes/StartEditAccountLoginActionType";
import {
    START_EDIT_ACCOUNT_EMAIL_ACTION_TYPE,
    StartEditAccountEmailActionType
} from "../../types/Implementation/ActionTypes/StartEditAccountEmailActionType";
import {
    EDIT_ACCOUNT_EMAIL_ACTION_TYPE,
    EditAccountEmailActionType
} from "../../types/Implementation/ActionTypes/EditAccountEmailActionType";
import {
    EDIT_ACCOUNT_LOGIN_ACTION_TYPE,
    EditAccountLoginActionType
} from "../../types/Implementation/ActionTypes/EditAccountLoginActionType";

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
        token: null,
        isAuthorized: true,
        login: "login",
        email: "mail@gmail.com",
        password: "password",
        repeatPassword: "password"
    },
    editingEmail: false,
    editingLogin: false
}

const UserReducer = (state = initialState, action : UserPageGlobalActionType) : InitialStateUserType => {
    switch (action.type){
        case CHANGE_LOGIN_ACTION_TYPE:
            return {
                ...state,
                session : {...state.session, login: action.changedLogin},
            }
        case CHANGE_EMAIL_ACTION_TYPE:
            return {
                ...state,
                session : {...state.session, email: action.changedEmail},
            }
        case CHANGE_PASSWORD_ACTION_TYPE:
            return {
                ...state,
                session : {...state.session, password: action.changedPassword},
            }
        case CHANGE_REPEAT_PASSWORD_ACTION_TYPE:
            return {
                ...state,
                session : {...state.session, repeatPassword: action.changedRepeatPassword},
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
    EditAccountLoginActionType

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





export default UserReducer;