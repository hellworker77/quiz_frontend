export const CHANGE_OLD_PASSWORD_ACTION_TYPE = 'CHANGE_OLD_PASSWORD_ACTION_TYPE'

export type ChangeOldPasswordActionType = {
    type: typeof CHANGE_OLD_PASSWORD_ACTION_TYPE,
    changedPassword: string
}