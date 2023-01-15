import {Test} from "../Models/Test/Test";

export type TestsProps = TestsPropsState & TestsPropsDispatch

export type TestsPropsState = {
    tests: Array<Test>
}

export type TestsPropsDispatch = {
    generateNewTestAnswer:(copyFrom: Test) => void,
}