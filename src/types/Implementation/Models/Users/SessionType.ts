export type SessionType = {
    token: string | null,
    isAuthorized: boolean,
    login: string,
    email: string,
    password: string,
    repeatPassword: string,
}