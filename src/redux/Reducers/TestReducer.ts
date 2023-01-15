import {InitialStateTestType} from "../../types/Implementation/InitialStates/InitialStateTestType";
import {Test} from "../../types/Implementation/Models/Test/Test";
import {LOAD_TESTS_ACTION_TYPE, LoadTestsActionType} from "../../types/Implementation/ActionTypes/TestActionTypes/LoadTestsActionType";

let initialState: InitialStateTestType = {
    chunkOfTests: [],
    page: 0,
    chunkSize: 1
}

const testReducer = (state = initialState, action: TestGlobalActionType): InitialStateTestType => {
    switch (action.type) {
        case LOAD_TESTS_ACTION_TYPE:
            if(action.testsData.length > 0){
                state.page += 1
            }
            return {
                ...state,
                chunkOfTests:[...state.chunkOfTests.concat(action.testsData)]
            }
        default:
            return {
                ...state,
            }
    }
}

export type TestGlobalActionType = LoadTestsActionType

export const loadTestsActionCreate =  (data: Array<Test>): LoadTestsActionType => (
    {type: LOAD_TESTS_ACTION_TYPE, testsData: data})

export default testReducer;