import {QuestionAnswer} from "../Models/Question/QuestionAnswer";
import {QuestionResult} from "../Models/Question/QuestionResult";

export type PaginatorProps = PaginatorPropsState & PaginatorPropsDispatch

export type PaginatorPropsState = {
    size: number,
    selectedIndex: number
    answers: Array<QuestionAnswer> | Array<QuestionResult> | null | undefined
}
export type PaginatorPropsDispatch = {
    selectQuestion: (index: number) => void
}