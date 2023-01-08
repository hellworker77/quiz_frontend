export const CHANGE_EMAIL_ACTION_TYPE = 'CHANGE_EMAIL_ACTION_TYPE'

export type ChangeEmailActionType = {
    type: typeof CHANGE_EMAIL_ACTION_TYPE,
    changedEmail: string
}