export const SELECT_QUESTION_ANSWER_ACTION_TYPE = 'SELECT_QUESTION_ANSWER_ACTION_TYPE'
export const SELECT_QUESTION_RESULT_ACTION_TYPE = 'SELECT_QUESTION_RESULT_ACTION_TYPE'

export type SelectQuestionAnswerActionType = {
    type: typeof SELECT_QUESTION_ANSWER_ACTION_TYPE,
    index: number
}
export type SelectQuestionResultActionType = {
    type: typeof SELECT_QUESTION_RESULT_ACTION_TYPE,
    index: number
}