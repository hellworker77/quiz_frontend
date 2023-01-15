import {User} from "../../Models/Users/User";

export const LOAD_LEADERS_ACTION_TYPE = "LOAD_LEADERS_ACTION_TYPE"

export type LoadLeadersActionType = {
    type: typeof LOAD_LEADERS_ACTION_TYPE,
    data: Array<User>
}