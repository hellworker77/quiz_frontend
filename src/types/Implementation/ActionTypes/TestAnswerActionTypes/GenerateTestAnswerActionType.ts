import {Test} from "../../Models/Test/Test";
export const GENERATE_TEST_ANSWER_ACTION_TYPE = "GENERATE_TEST_ANSWER_ACTION_TYPE"

export type GenerateTestAnswerActionType = {
    from: Test
    type: typeof GENERATE_TEST_ANSWER_ACTION_TYPE
}