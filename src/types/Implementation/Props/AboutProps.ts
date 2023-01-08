export type AboutProps = AboutPropsState & AboutPropsDispatch & AboutPropsOwn


export type AboutPropsState = {
    background: string
}

export type AboutPropsDispatch = {
    changeBackground: (background: string) => void
}

export type AboutPropsOwn = {

}