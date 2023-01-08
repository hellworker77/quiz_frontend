export const CHANGE_PASSWORD_ACTION_TYPE = 'CHANGE_PASSWORD_ACTION_TYPE'

export type ChangePasswordActionType = {
    type: typeof CHANGE_PASSWORD_ACTION_TYPE,
    changedPassword: string
}