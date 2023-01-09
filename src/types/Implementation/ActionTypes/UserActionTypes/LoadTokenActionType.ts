import {SessionType} from "../../Models/Users/SessionType";

export const LOAD_TOKEN_ACTION_TYPE = "LOAD_TOKEN_ACTION_TYPE"

export type LoadTokenActionType = {
    type: typeof LOAD_TOKEN_ACTION_TYPE,
    data: SessionType
}