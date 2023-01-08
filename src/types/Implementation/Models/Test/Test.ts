import {AbstractTest} from "../../../Abstraction/AbstractTest";
import {Question} from "../Question/Question";


export type Test = AbstractTest & {
    questions: Array<Question> | null;
}