import {Test} from "../Models/Test/Test";

export type TestsProps = TestsPropsState & TestsPropsDispatch

export type TestsPropsState = {
    tests: Array<Test> | null
}

export type TestsPropsDispatch = {
    generateNewTestAnswer:(copyFrom: Test) => void
}