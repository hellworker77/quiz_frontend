import {connect} from "react-redux";
import UserPage from "./UserPage";
import {AppStateType} from "../../../redux/store";
import {UserPagePropsDispatch, UserPagePropsState} from "../../../types/Implementation/Props/UserPageProps";
import {Dispatch} from "redux";
import {
    editAccountEmailActionCreate, editAccountLoginActionCreate,
    startEditAccountEmailActionCreate,
    startEditAccountLoginActionCreate,
    UserPageGlobalActionType
} from "../../../redux/Reducers/UserReducer";
import {selectTestResultActionCreate, TestResultGlobalActionType} from "../../../redux/Reducers/TestResultReducer";

let mapStateToProps = (state: AppStateType) : UserPagePropsState=> {
    return {
        loadUserData: state.userReducer.authorizedUser,
        testResults: state.testResultReducer.chunkOfTestResults,
        total: state.testResultReducer.total,
        won: state.testResultReducer.won,
        lose: state.testResultReducer.lose,
        editingLogin: state.userReducer.editingLogin,
        editingEmail: state.userReducer.editingEmail
    }
}
let mapDispatchToProps = (dispatch : Dispatch<UserPageGlobalActionType>) : UserPagePropsDispatch => {
    return {
        startEditEmail:()=>{
            dispatch(startEditAccountEmailActionCreate())
        },
        startEditLogin:()=>[
            dispatch(startEditAccountLoginActionCreate())
        ],
        editEmail:(value: string)=>{
            dispatch(editAccountEmailActionCreate(value))
        },
        editLogin:(value:string)=>{
            dispatch(editAccountLoginActionCreate(value))
        }
    }
}

const SessionContainer = connect(mapStateToProps, mapDispatchToProps)(UserPage);

export default SessionContainer;