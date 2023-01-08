export const SELECT_TEST_ACTION_TYPE = 'SELECT_TEST_ACTION_TYPE'
export const SELECT_TEST_RESULT_ACTION_TYPE = 'SELECT_TEST_RESULT_ACTION_TYPE'

export type SelectTestActionType = {
    type: typeof SELECT_TEST_ACTION_TYPE,
    id: string
}
export type SelectTestResultActionType = {
    type: typeof SELECT_TEST_RESULT_ACTION_TYPE,
    id: string
}