import {AbstractTest} from "../../../Abstraction/AbstractTest";
import {QuestionAnswer} from "../Question/QuestionAnswer";


export type TestAnswer = AbstractTest & {
    answerQuestionsDto: Array<QuestionAnswer> | null;
}