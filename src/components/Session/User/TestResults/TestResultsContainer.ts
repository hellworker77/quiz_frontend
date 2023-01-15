import {connect} from "react-redux";
import TestResults from "./TestResults";
import {AppStateType} from "../../../../redux/store";
import {TestResultsPropsDispatch, TestResultsPropsState} from "../../../../types/Implementation/Props/TestResultsProps";
import {Dispatch} from "redux";
import {loadTestsActionCreate, selectTestResultActionCreate} from "../../../../redux/Reducers/TestResultReducer";
import {TestResult} from "../../../../types/Implementation/Models/Test/TestResult";
import {stat} from "fs";

let mapStateToProps = (state: AppStateType): TestResultsPropsState => {
    return {
        loadedChunkTestResults: state.testResultReducer.chunkOfTestResults,
        page: state.testResultReducer.page,
        chunkSize: state.testResultReducer.chunkSize,
        tokenType: state.userReducer.session.token_type,
        accessToken: state.userReducer.session.access_token,
        count: state.testResultReducer.chunkOfTestResults.length
    }
}
let mapDispatchToProps = (dispatch: Dispatch): TestResultsPropsDispatch => {
    return {
        selectTestResult: (id: string) => {
            dispatch(selectTestResultActionCreate(id))
        },
        loadTestResults: (testResults: Array<TestResult>) => {
            dispatch(loadTestsActionCreate(testResults))
        }
    }
}

const TestResultsContainer = connect(mapStateToProps, mapDispatchToProps)(TestResults);

export default TestResultsContainer;