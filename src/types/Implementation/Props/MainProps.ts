
import {Test} from "../Models/Test/Test";

export type MainProps  =  MainPropsState & MainPropsDispatch

export type MainPropsState = {
    page: number,
    size: number,
    count: number
}
export type MainPropsDispatch = {
    loadTests: (data: Array<Test>)  => void
}
