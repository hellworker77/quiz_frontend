import {TestResult} from "../Models/Test/TestResult";

export type TestResultsProps = TestResultsPropsState & TestResultsPropsDispatch

export type TestResultsPropsState = {
    loadedChunkTestResults: Array<TestResult> | null
}

export type TestResultsPropsDispatch = {
    selectTestResult: (id:string) => void
}