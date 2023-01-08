export const CHANGE_REPEAT_PASSWORD_ACTION_TYPE = 'CHANGE_REPEAT_PASSWORD_ACTION_TYPE'

export type ChangeRepeatPasswordActionType = {
    type: typeof CHANGE_REPEAT_PASSWORD_ACTION_TYPE,
    changedRepeatPassword: string
}