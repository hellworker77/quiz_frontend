export const CHANGE_BACKGROUND_ACTION_TYPE = 'CHANGE_BACKGROUND_ACTION_TYPE'

export type ChangeBackgroundActionType = {
    type: typeof CHANGE_BACKGROUND_ACTION_TYPE,
    background: string
}