import {TestAnswer} from "../Models/Test/TestAnswer";

export type InitialStateTestAnswerType = {
    currentAnswer: TestAnswer | null,
    localAnswer: string | null,
    selectedQuestionIndex: number,
}
