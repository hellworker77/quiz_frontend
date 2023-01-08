import {Test} from "../Models/Test/Test";

export type TestProps = {
    test: Test,
    generateNewTestAnswer:(copyFrom: Test) => void
}