export const CHANGE_LOGIN_ACTION_TYPE = 'CHANGE_LOGIN_ACTION_TYPE'

export type ChangeLoginActonType = {
    type: typeof CHANGE_LOGIN_ACTION_TYPE,
    changedLogin: string
}