import {AbstractTest} from "../../../Abstraction/AbstractTest";
import {QuestionAnswer} from "../Question/QuestionAnswer";
import {Question} from "../Question/Question";


export type TestAnswer = AbstractTest & {
    answerQuestions: Array<QuestionAnswer> | null;
}