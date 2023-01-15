import {InitialStateTestResultType} from "../../types/Implementation/InitialStates/InitialStateTestResultType";
import {
    SELECT_QUESTION_RESULT_ACTION_TYPE,
    SelectQuestionResultActionType
} from "../../types/Implementation/ActionTypes/TestResultsActionTypes/SelectQuestionResultActionType";
import {
    SELECT_TEST_RESULT_ACTION_TYPE,
    SelectTestResultActionType
} from "../../types/Implementation/ActionTypes/TestResultsActionTypes/SelectTestResultActionType";
import {TestResult} from "../../types/Implementation/Models/Test/TestResult";
import {
    LOAD_TEST_RESULTS_ACTION_TYPE,
    LoadTestResultsActionType
} from "../../types/Implementation/ActionTypes/TestResultsActionTypes/LoadTestResultsActionType";

let initialState : InitialStateTestResultType = {
    loadedTestResult : null,
    chunkOfTestResults : [],
    total: 250,
    won: 200,
    lose: 50,
    page: 0,
    chunkSize: 1,
    selectedQuestionIndex: 0
}

const TestResultReducer = (state = initialState, action: TestResultGlobalActionType) : InitialStateTestResultType => {
    switch (action.type){
        case SELECT_QUESTION_RESULT_ACTION_TYPE:
            let length = state.loadedTestResult?.questionResultsDto?.length ?? 0;
            let index = state.selectedQuestionIndex;
            if(action.index > -1 && action.index< length ){
                index = action.index;
            }
            return {
                ...state,
                selectedQuestionIndex: index,
            }
        case SELECT_TEST_RESULT_ACTION_TYPE:
            let targetTestResult = state.chunkOfTestResults.find(x=>x.id === action.id);
            if(targetTestResult){
                state.loadedTestResult = {...targetTestResult}
            }
            return {
                ...state
            }
        case LOAD_TEST_RESULTS_ACTION_TYPE:
            if(action.testResultsData.length > 0){
                state.page += 1
            }
            return {
                ...state,
                chunkOfTestResults:[...state.chunkOfTestResults.concat(action.testResultsData)]
            }
        default:
            return {
                ...state
            }
    }
}
export type TestResultGlobalActionType = SelectQuestionResultActionType | SelectTestResultActionType | LoadTestResultsActionType

export const selectQuestionResultActionCreate = (index: number) : SelectQuestionResultActionType => ({
    type: SELECT_QUESTION_RESULT_ACTION_TYPE, index: index
})
export const selectTestResultActionCreate = (id: string) : SelectTestResultActionType => ({
    type: SELECT_TEST_RESULT_ACTION_TYPE, id: id
})
export const loadTestsActionCreate =  (data: Array<TestResult>): LoadTestResultsActionType => (
    {type: LOAD_TEST_RESULTS_ACTION_TYPE, testResultsData: data})
export default TestResultReducer;