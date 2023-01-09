import {connect} from "react-redux";
import Session from "./Session";
import {AppStateType} from "../../redux/store";
import {SessionProps} from "../../types/Implementation/Props/SessionProps";

let mapStateToProps = (state: AppStateType) : SessionProps => {
    return {
        isAuthorized: state.userReducer.session.access_token !== ""
    }
}
let mapDispatchToProps = (dispatch : any) => {
    return {}
}

const SessionContainer = connect(mapStateToProps, mapDispatchToProps)(Session);

export default SessionContainer;