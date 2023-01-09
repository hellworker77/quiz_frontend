import {connect} from "react-redux";
import Login from "./Login";
import {AppStateType} from "../../../../redux/store";
import {LoginPropsDispatch, LoginPropsState} from "../../../../types/Implementation/Props/LoginProps";
import {
    changeLoginActionCreate,
    changePasswordActionCreate, loadTokenActionCreate,
    UserPageGlobalActionType
} from "../../../../redux/Reducers/UserReducer";
import {Dispatch} from "redux";
import {SessionType} from "../../../../types/Implementation/Models/Users/SessionType";

let mapStateToProps = (state: AppStateType) : LoginPropsState => {
    return {
        login: state.userReducer.login,
        password: state.userReducer.password
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
        loadToken:(token: SessionType) =>{
            dispatch(loadTokenActionCreate(token))
        }
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;