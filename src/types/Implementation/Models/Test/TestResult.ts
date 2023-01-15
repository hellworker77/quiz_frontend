import {AbstractTest} from "../../../Abstraction/AbstractTest";
import {QuestionResult} from "../Question/QuestionResult";

export type TestResult = AbstractTest & {
    userId: string,
    accuracy: number,
    questionResultsDto: Array<QuestionResult> | null;
}