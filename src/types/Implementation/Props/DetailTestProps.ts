import {TestAnswer} from "../Models/Test/TestAnswer";
import {TestResult} from "../Models/Test/TestResult";
import {changeBackgroundActionCreate} from "../../../redux/Reducers/AppReducer";

export type DetailTestAnswerProps = DetailTestAnswerPropsState & DetailTestAnswerPropsDispatch

export type DetailTestAnswerPropsState = {
    loadedTest: TestAnswer | null,
    selectedIndex: number,
    localAnswer: string | null,
    tokenType: string,
    accessToken: string,
    background: string
}
export type DetailTestAnswerPropsDispatch = {
    changeLocalAnswer: (value: string) => void,
    addNewAnswer: () => void,
    scrollNext: () => void
    changeBackground: (background: string)=>void
}

export type DetailTestResultProps = DetailTestResultPropsState & DetailTestResultPropsDispatch

export type DetailTestResultPropsState = {
    loadedTest: TestResult | null,
    selectedIndex: number,
    background: string
}
export type DetailTestResultPropsDispatch = {
    changeBackground: (background: string)=>void
}
