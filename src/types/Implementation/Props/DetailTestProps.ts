import {TestAnswer} from "../Models/Test/TestAnswer";
import {TestResult} from "../Models/Test/TestResult";

export type DetailTestAnswerProps = DetailTestAnswerPropsState & DetailTestAnswerPropsDispatch

export type DetailTestAnswerPropsState = {
    loadedTest: TestAnswer | null,
    selectedIndex: number,
    localAnswer: string | null
}
export type DetailTestAnswerPropsDispatch = {
    changeLocalAnswer:(value: string) => void,
    addNewAnswer:() => void
}

export type DetailTestResultProps = DetailTestResultPropsState & DetailTestResultPropsDispatch

export type DetailTestResultPropsState = {
    loadedTest: TestResult | null,
    selectedIndex: number,
}
export type DetailTestResultPropsDispatch = {
}
