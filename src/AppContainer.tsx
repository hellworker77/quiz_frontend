import {connect} from "react-redux";
import App from "./App";
import {AppStateType} from "./redux/store";




let mapStateToProps = (state: AppStateType) => {
    return {
        background: state.appReducer.background
    }
}
let mapDispatchToProps = (dispatch : any) => {
    return {}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;