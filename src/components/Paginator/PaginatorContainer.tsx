import {connect} from "react-redux";

import {AppStateType} from "../../redux/store";
import {PaginatorPropsDispatch, PaginatorPropsState} from "../../types/Implementation/Props/PaginatorProps";
import {Dispatch} from "redux";
import {
    selectQuestionResultActionCreate,
    TestResultGlobalActionType
} from "../../redux/Reducers/TestResultReducer";
import {selectQuestionAnswerActionCreate, TestAnswerGlobalActionType} from "../../redux/Reducers/TestAnswerReducer";
import {PaginatorTestAnswer, PaginatorTestResult} from "./Paginator";

let mapStateAnswersToProps = (state: AppStateType) : PaginatorPropsState => {
    return {
        size: state.testAnswerReducer.currentAnswer?.answerQuestions?.length ?? 0,
        answers: state.testAnswerReducer.currentAnswer?.answerQuestions,
        selectedIndex: state.testAnswerReducer.selectedQuestionIndex
    }
}
let mapDispatchAnswersToProps = (dispatch : Dispatch<TestAnswerGlobalActionType>) : PaginatorPropsDispatch => {
    return {
        selectQuestion:(index: number) =>{
            dispatch(selectQuestionAnswerActionCreate(index))
        },
    }
}

let mapStateResultsToProps = (state: AppStateType) : PaginatorPropsState => {
    return {
        size: state.testResultReducer.loadedTestResult?.questionResults?.length ?? 0,
        answers: state.testResultReducer.loadedTestResult?.questionResults,
        selectedIndex: state.testResultReducer.selectedQuestionIndex
    }
}
let mapDispatchResultsToProps = (dispatch : Dispatch<TestResultGlobalActionType>) : PaginatorPropsDispatch => {
    return {
        selectQuestion:(index: number) =>{
            dispatch(selectQuestionResultActionCreate(index))
        },
    }
}

export const PaginatorAnswersContainer = connect(mapStateAnswersToProps, mapDispatchAnswersToProps)(PaginatorTestAnswer);
export const PaginatorResultsContainer = connect(mapStateResultsToProps, mapDispatchResultsToProps)(PaginatorTestResult);