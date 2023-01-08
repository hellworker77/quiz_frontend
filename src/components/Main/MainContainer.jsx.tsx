import {connect} from "react-redux";

import {AppStateType} from "../../redux/store";
import Main from "./Main";
import {Dispatch} from "redux";




let mapStateToProps = (state: AppStateType) => {
    return {
        user: state.userReducer.authorizedUser
    }
}
let mapDispatchToProps = (dispatch : Dispatch) => {
    return {}
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;