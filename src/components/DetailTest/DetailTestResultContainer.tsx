import {connect} from "react-redux"
import {AppStateType} from "../../redux/store";
import {
    DetailTestResultPropsDispatch,
    DetailTestResultPropsState
} from "../../types/Implementation/Props/DetailTestProps";
import {Dispatch} from "redux";
import DetailTestResult from "./DetailTestResult";

let mapStateToProps = (state: AppStateType) : DetailTestResultPropsState => {
    return {
        loadedTest: state.testResultReducer.loadedTestResult,
        selectedIndex: state.testResultReducer.selectedQuestionIndex,
    }
}
let mapDispatchToProps = (dispatch : Dispatch) : DetailTestResultPropsDispatch => {
    return {
    }
}


const DetailTestAnswerContainer = connect(mapStateToProps, mapDispatchToProps)(DetailTestResult);

export default DetailTestAnswerContainer;