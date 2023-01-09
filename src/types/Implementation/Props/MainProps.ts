
import {Test} from "../Models/Test/Test";

export type MainProps  =  MainPropsState & MainPropsDispatch

export type MainPropsState = {

}
export type MainPropsDispatch = {
    loadTests: (data: Array<Test> | null)  => void
}
