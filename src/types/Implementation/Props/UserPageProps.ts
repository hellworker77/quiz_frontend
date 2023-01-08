import {User} from "../Models/Users/User";
import {TestResult} from "../Models/Test/TestResult";

export type UserPageProps = UserPagePropsState & UserPagePropsDispatch

export type UserPagePropsState = {
    loadUserData: User | null,
    testResults: Array<TestResult> | null
    total: number | null,
    won: number | null,
    lose: number | null,
    editingLogin: boolean,
    editingEmail: boolean
}

export type UserPagePropsDispatch = {
    startEditLogin: () => void,
    startEditEmail: () => void,
    editLogin: (value: string) => void,
    editEmail: (value: string) => void
}
