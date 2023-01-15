import {TestResult} from "../../Models/Test/TestResult";

export const LOAD_TEST_RESULTS_ACTION_TYPE = "LOAD_TEST_RESULTS_ACTION_TYPE"

export type LoadTestResultsActionType = {
    type: typeof LOAD_TEST_RESULTS_ACTION_TYPE,
    testResultsData: Array<TestResult>
}