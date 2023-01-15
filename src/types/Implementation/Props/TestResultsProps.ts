import {TestResult} from "../Models/Test/TestResult";

export type TestResultsProps = TestResultsPropsState & TestResultsPropsDispatch

export type TestResultsPropsState = {
    loadedChunkTestResults: Array<TestResult>
    tokenType: string,
    accessToken: string,
    page:number,
    chunkSize: number,
    count: number
}

export type TestResultsPropsDispatch = {
    selectTestResult: (id:string) => void,
    loadTestResults: (testResults: Array<TestResult>) => void
}