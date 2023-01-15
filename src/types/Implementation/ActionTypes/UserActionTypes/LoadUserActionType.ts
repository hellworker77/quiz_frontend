import {User} from "../../Models/Users/User";

export const LOAD_USER_ACTION_TYPE = "LOAD_USER_ACTION_TYPE"

export type LoadUserActionType = {
    type: typeof LOAD_USER_ACTION_TYPE,
    user: User,
}