import {Test} from "../../Models/Test/Test";

export const LOAD_TESTS_ACTION_TYPE = "LOAD_TESTS_ACTION_TYPE"

export type LoadTestsActionType = {
    type: typeof LOAD_TESTS_ACTION_TYPE,
    testsData: Array<Test>
}