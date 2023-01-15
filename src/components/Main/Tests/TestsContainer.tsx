import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import Tests from "./Tests";
import {TestsPropsDispatch, TestsPropsState} from "../../../types/Implementation/Props/TestsProps";
import { Test } from "../../../types/Implementation/Models/Test/Test";
import {generateTestAnswerActionCreate} from "../../../redux/Reducers/TestAnswerReducer";
import {Dispatch} from "redux";
import {GenerateTestAnswerActionType} from "../../../types/Implementation/ActionTypes/TestAnswerActionTypes/GenerateTestAnswerActionType";

let mapStateToProps = (state: AppStateType) : TestsPropsState => {
    return {
        tests: state.testReducer.chunkOfTests,
    }
}
let mapDispatchToProps = (dispatch : Dispatch<GenerateTestAnswerActionType>) : TestsPropsDispatch  => {
    return {
        generateNewTestAnswer:(copyFrom: Test) =>{
            dispatch(generateTestAnswerActionCreate(copyFrom))
        },
    }
}

const TestsContainer = connect(mapStateToProps, mapDispatchToProps)(Tests);

export default TestsContainer;