import { User } from "../Models/Users/User"
import {SessionType} from "../Models/Users/SessionType";

export type InitialStateUserType = {
    authorizedUser: User | null,
    leaderBoardPage: number,
    session: SessionType,
    leaderBoard: Array<User>,
    pageSize: number,
    oldPassword: string,
    login: string,
    email: string,
    password: string,
    repeatPassword: string,
    editingLogin: boolean,
    editingEmail: boolean,
    editingPassword: boolean
}