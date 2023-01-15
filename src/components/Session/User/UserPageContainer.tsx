import {connect} from "react-redux";
import UserPage from "./UserPage";
import {AppStateType} from "../../../redux/store";
import {UserPagePropsDispatch, UserPagePropsState} from "../../../types/Implementation/Props/UserPageProps";
import {Dispatch} from "redux";
import {
    changeOldPasswordActionCreate,
    changePasswordActionCreate,
    editAccountEmailActionCreate,
    editAccountLoginActionCreate,
    loadUserActionType,
    startEditAccountEmailActionCreate,
    startEditAccountLoginActionCreate,
    startEditAccountPasswordActionCreate,
    stopEditAccountEmailActionCreate,
    stopEditAccountLoginActionCreate, stopEditAccountPasswordActionCreate,
    UserPageGlobalActionType
} from "../../../redux/Reducers/UserReducer";
import {User} from "../../../types/Implementation/Models/Users/User";

let mapStateToProps = (state: AppStateType) : UserPagePropsState=> {
    return {
        loadUserData: state.userReducer.authorizedUser,
        testResults: state.testResultReducer.chunkOfTestResults,
        total: state.testResultReducer.total,
        won: state.testResultReducer.won,
        lose: state.testResultReducer.lose,
        editingLogin: state.userReducer.editingLogin,
        editingEmail: state.userReducer.editingEmail,
        editingPassword: state.userReducer.editingPassword,
        session: state.userReducer.session,
        password: state.userReducer.password,
        oldPassword: state.userReducer.oldPassword
    }
}
let mapDispatchToProps = (dispatch : Dispatch<UserPageGlobalActionType>) : UserPagePropsDispatch => {
    return {
        startEditEmail:()=>{
            dispatch(startEditAccountEmailActionCreate())
        },
        startEditLogin:()=> {
            dispatch(startEditAccountLoginActionCreate())
        },
        startEditPassword:()=> {
            dispatch(startEditAccountPasswordActionCreate())
        },
        stopEditEmail:()=>{
            dispatch(stopEditAccountEmailActionCreate())
        },
        stopEditLogin:()=> {
            dispatch(stopEditAccountLoginActionCreate())
        },
        stopEditPassword:()=> {
            dispatch(stopEditAccountPasswordActionCreate())
        },
        editEmail:(value: string)=>{
            dispatch(editAccountEmailActionCreate(value))
        },
        editLogin:(value:string)=>{
            dispatch(editAccountLoginActionCreate(value))
        },
        changePassword: (value: string)=>{
            dispatch(changePasswordActionCreate(value))
        },
        changeOldPassword: (value: string)=>{
            dispatch(changeOldPasswordActionCreate(value))
        },
        loadUser:(user: User)=>{
            dispatch(loadUserActionType(user))
        }
    }
}

const SessionContainer = connect(mapStateToProps, mapDispatchToProps)(UserPage);

export default SessionContainer;