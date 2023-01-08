import {AbstractTest} from "../../../Abstraction/AbstractTest";
import {QuestionResult} from "../Question/QuestionResult";

export type TestResult = AbstractTest & {
    userId: string;
    questionResults: Array<QuestionResult> | null;
}