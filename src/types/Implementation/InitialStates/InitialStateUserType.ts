import { User } from "../Models/Users/User"
import {SessionType} from "../Models/Users/SessionType";

export type InitialStateUserType = {
    authorizedUser: User | null,
    session: SessionType,
    leaderBoard: Array<User> | null,
    loadedUserData: User | null,
    editingLogin: boolean,
    editingEmail: boolean,
}