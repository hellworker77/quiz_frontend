import {TestResult} from "../Models/Test/TestResult";

export type InitialStateTestResultType = {
    loadedTestResult: TestResult | null,
    chunkOfTestResults: Array<TestResult> | null,
    total: number | null,
    won: number | null,
    lose: number | null,
    selectedQuestionIndex: number
}