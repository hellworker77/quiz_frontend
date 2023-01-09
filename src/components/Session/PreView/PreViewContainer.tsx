import {connect} from "react-redux";
import PreView from "./PreView";
import {AppStateType} from "../../../redux/store";

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuthorized: state.userReducer.session.access_token !== ""
    }
}
let mapDispatchToProps = (dispatch : any) => {
    return {}
}

const PreViewContainer = connect(mapStateToProps, mapDispatchToProps)(PreView);

export default PreViewContainer;