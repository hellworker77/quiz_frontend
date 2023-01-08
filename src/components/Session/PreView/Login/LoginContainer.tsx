import {connect} from "react-redux";
import Login from "./Login";
import {AppStateType} from "../../../../redux/store";
import {LoginPropsDispatch, LoginPropsState} from "../../../../types/Implementation/Props/LoginProps";
import {
    changeLoginActionCreate,
    changePasswordActionCreate,
    UserPageGlobalActionType
} from "../../../../redux/Reducers/UserReducer";
import {Dispatch} from "redux";

let mapStateToProps = (state: AppStateType) : LoginPropsState => {
    return {
        login: state.userReducer.session.login,
        password: state.userReducer.session.password
    }
}
let mapDispatchToProps = (dispatch : Dispatch<UserPageGlobalActionType>) : LoginPropsDispatch => {
    return {
        changeLogin:(newLogin: string)=>{
            dispatch(changeLoginActionCreate(newLogin))
        },
        changePassword:(newPassword: string)=>{
            dispatch(changePasswordActionCreate(newPassword))
        },
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;