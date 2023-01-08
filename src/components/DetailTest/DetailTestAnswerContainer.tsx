import {connect} from "react-redux";

import {AppStateType} from "../../redux/store";
import DetailTestAnswer from "./DetailTestAnswer";
import {
    DetailTestAnswerPropsDispatch,
    DetailTestAnswerPropsState
} from "../../types/Implementation/Props/DetailTestProps";
import {
    addAnswerActionCreate,
    changeLocalAnswerActionCreate,
    TestAnswerGlobalActionType
} from "../../redux/Reducers/TestAnswerReducer";
import {Dispatch} from "redux";

let mapStateToProps = (state: AppStateType) : DetailTestAnswerPropsState => {
    return {
        loadedTest: state.testAnswerReducer.currentAnswer,
        selectedIndex: state.testAnswerReducer.selectedQuestionIndex,
        localAnswer: state.testAnswerReducer.localAnswer
    }
}
let mapDispatchToProps = (dispatch : Dispatch<TestAnswerGlobalActionType>) : DetailTestAnswerPropsDispatch => {
    return {
        changeLocalAnswer:(value: string)=>{
            dispatch(changeLocalAnswerActionCreate(value))
        },
        addNewAnswer:()=>{
            dispatch(addAnswerActionCreate())
        }
    }
}


const DetailTestAnswerContainer = connect(mapStateToProps, mapDispatchToProps)(DetailTestAnswer);

export default DetailTestAnswerContainer;