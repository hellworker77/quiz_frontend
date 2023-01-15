import {TestResult} from "../Models/Test/TestResult";

export type InitialStateTestResultType = {
    loadedTestResult: TestResult | null,
    chunkOfTestResults: Array<TestResult>,
    total: number,
    won: number,
    lose: number,
    selectedQuestionIndex: number,
    page: 0,
    chunkSize: 1
}