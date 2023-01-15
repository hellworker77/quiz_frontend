import {connect} from "react-redux";

import {AppStateType} from "../../redux/store";
import Main from "./Main";
import {Dispatch} from "redux";
import {MainPropsDispatch, MainPropsState} from "../../types/Implementation/Props/MainProps";
import {loadTestsActionCreate, TestGlobalActionType} from "../../redux/Reducers/TestReducer";
import {Test} from "../../types/Implementation/Models/Test/Test";




let mapStateToProps = (state: AppStateType) : MainPropsState => {
    return {
        page: state.testReducer.page,
        size: state.testReducer.chunkSize,
        count: state.testReducer.chunkOfTests.length
    }
}
let mapDispatchToProps = (dispatch : Dispatch<TestGlobalActionType>) : MainPropsDispatch => {
    return {
        loadTests:(data: Array<Test>)=>{
            dispatch(loadTestsActionCreate(data))
        }
    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;