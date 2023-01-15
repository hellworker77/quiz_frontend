import {User} from "../Models/Users/User";
import {TestResult} from "../Models/Test/TestResult";
import {SessionType} from "../Models/Users/SessionType";

export type UserPageProps = UserPagePropsState & UserPagePropsDispatch

export type UserPagePropsState = {
    loadUserData: User | null,
    testResults: Array<TestResult>,
    total: number,
    won: number,
    lose: number,
    editingLogin: boolean,
    editingEmail: boolean,
    editingPassword: boolean,
    session: SessionType | null,
    password: string,
    oldPassword: string,
}

export type UserPagePropsDispatch = {
    startEditLogin: () => void,
    startEditEmail: () => void,
    startEditPassword: () => void,
    stopEditLogin: () => void,
    stopEditEmail: () => void,
    stopEditPassword: () => void,
    loadUser : (user: User) => void,
    editLogin: (value: string) => void,
    editEmail: (value: string) => void,
    changePassword: (value: string) => void,
    changeOldPassword: (value: string) => void
}
