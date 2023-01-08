import {connect} from "react-redux";
import TestResults from "./TestResults";
import {AppStateType} from "../../../../redux/store";
import {TestResultsPropsDispatch, TestResultsPropsState} from "../../../../types/Implementation/Props/TestResultsProps";
import {Dispatch} from "redux";
import {selectTestResultActionCreate} from "../../../../redux/Reducers/TestResultReducer";

let mapStateToProps = (state: AppStateType): TestResultsPropsState => {
    return {
        loadedChunkTestResults: state.testResultReducer.chunkOfTestResults
    }
}
let mapDispatchToProps = (dispatch: Dispatch): TestResultsPropsDispatch => {
    return {
        selectTestResult: (id: string) => {
            dispatch(selectTestResultActionCreate(id))
        }
    }
}

const TestResultsContainer = connect(mapStateToProps, mapDispatchToProps)(TestResults);

export default TestResultsContainer;