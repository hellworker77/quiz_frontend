import {QuestionAnswer} from "../Models/Question/QuestionAnswer";
import {QuestionResult} from "../Models/Question/QuestionResult";

export type PaginatorAnswerProps = PaginatorAnswerPropsState & PaginatorAnswerPropsDispatch

export type PaginatorAnswerPropsState = {
    size: number,
    selectedIndex: number
    answers: Array<QuestionAnswer> | null | undefined
}
export type PaginatorAnswerPropsDispatch = {
    selectQuestion: (index: number) => void,
    scrollNext: () => void,
    scrollBack: () => void
}
export type PaginatorResultProps = PaginatorResultPropsState & PaginatorResultPropsDispatch;

export type PaginatorResultPropsState = {
    size: number,
    selectedIndex: number
    results: Array<QuestionResult> | null | undefined
}
export type PaginatorResultPropsDispatch = {
    selectQuestion: (index: number) => void

}