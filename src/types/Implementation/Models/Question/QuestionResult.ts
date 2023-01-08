import {AbstractQuestion} from "../../../Abstraction/AbstractQuestion";

export type QuestionResult = AbstractQuestion & {
    testResultId: string | null;
    actualAnswer: string | null;
    isCorrect: boolean;
}