import {TestResult} from "../Models/Test/TestResult";

export type TestResultPageProps = TestResultPagePropsState & TestResultPagePropsDispatch
export type TestResultPagePropsState = {
    loadedTestResult: TestResult | null
}
export type TestResultPagePropsDispatch = {
}