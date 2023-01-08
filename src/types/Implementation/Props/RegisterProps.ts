export type RegisterProps =  RegisterPropsState & RegisterPropsDispatch

export type RegisterPropsState = {
    login: string,
    email: string,
    password: string,
    repeatPassword: string,
}
export type RegisterPropsDispatch = {
    changeLogin: (newLogin: string) => void
    changeEmail: (newEmail: string) => void
    changePassword: (newPassword: string) => void
    changeRepeatPassword: (newPassword: string) => void
}