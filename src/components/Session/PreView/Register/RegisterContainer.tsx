import {connect} from "react-redux";
import Register from "./Register";
import {AppStateType} from "../../../../redux/store";
import {RegisterPropsDispatch, RegisterPropsState} from "../../../../types/Implementation/Props/RegisterProps";
import {
    changeEmailActionCreate,
    changeLoginActionCreate,
    changePasswordActionCreate, changeRepeatPasswordActionCreate, UserPageGlobalActionType
} from "../../../../redux/Reducers/UserReducer";
import {Dispatch} from "redux";

let mapStateToProps = (state: AppStateType) : RegisterPropsState => {
    return {
        login: state.userReducer.login,
        email: state.userReducer.email,
        password: state.userReducer.password,
        repeatPassword: state.userReducer.repeatPassword
    }
}
let mapDispatchToProps = (dispatch : Dispatch<UserPageGlobalActionType>) : RegisterPropsDispatch => {
    return {
        changeLogin:(newLogin: string)=>{
            dispatch(changeLoginActionCreate(newLogin))
        },
        changeEmail:(newEmail: string)=>{
            dispatch(changeEmailActionCreate(newEmail))
        },
        changePassword:(newPassword: string)=>{
            dispatch(changePasswordActionCreate(newPassword))
        },
        changeRepeatPassword:(newPassword: string)=>{
            dispatch(changeRepeatPasswordActionCreate(newPassword))
        }
    }
}

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterContainer;