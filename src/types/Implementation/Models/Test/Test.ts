import {AbstractTest} from "../../../Abstraction/AbstractTest";
import {Question} from "../Question/Question";


export type Test = AbstractTest & {
    questionsDto: Array<Question> | null;
}