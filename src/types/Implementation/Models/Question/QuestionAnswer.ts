import {AbstractQuestion} from "../../../Abstraction/AbstractQuestion";

export type QuestionAnswer = AbstractQuestion & {
    actualAnswer: string | null,
    testId: string | null
}