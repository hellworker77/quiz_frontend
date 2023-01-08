export type LoginProps = LoginPropsState & LoginPropsDispatch

export type LoginPropsState = {
    login: string,
    password: string
}
export type LoginPropsDispatch = {
    changeLogin: (newLogin: string) => void
    changePassword: (newPassword: string) => void
}