import {connect} from "react-redux";

import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {
    selectQuestionResultActionCreate,
    TestResultGlobalActionType
} from "../../redux/Reducers/TestResultReducer";
import {
    scrollBackAnswerActionCreate,
    scrollNextAnswerActionCreate,
    selectQuestionAnswerActionCreate,
    TestAnswerGlobalActionType
} from "../../redux/Reducers/TestAnswerReducer";
import {PaginatorTestAnswer, PaginatorTestResult} from "./Paginator";
import {
    PaginatorAnswerPropsDispatch,
    PaginatorAnswerPropsState, PaginatorResultPropsDispatch,
    PaginatorResultPropsState
} from "../../types/Implementation/Props/PaginatorProps";

let mapStateAnswersToProps = (state: AppStateType) : PaginatorAnswerPropsState => {
    return {
        size: state.testAnswerReducer.currentAnswer?.answerQuestionsDto?.length ?? 0,
        answers: state.testAnswerReducer.currentAnswer?.answerQuestionsDto,
        selectedIndex: state.testAnswerReducer.selectedQuestionIndex
    }
}
let mapDispatchAnswersToProps = (dispatch : Dispatch<TestAnswerGlobalActionType>) : PaginatorAnswerPropsDispatch => {
    return {
        selectQuestion:(index: number) =>{
            dispatch(selectQuestionAnswerActionCreate(index))
        },
        scrollNext:()=>{
            dispatch(scrollNextAnswerActionCreate())
        },
        scrollBack:()=>{
            dispatch(scrollBackAnswerActionCreate())
        }
    }
}

let mapStateResultsToProps = (state: AppStateType) : PaginatorResultPropsState => {
    return {
        size: state.testResultReducer.loadedTestResult?.questionResultsDto?.length ?? 0,
        results: state.testResultReducer.loadedTestResult?.questionResultsDto,
        selectedIndex: state.testResultReducer.selectedQuestionIndex
    }
}
let mapDispatchResultsToProps = (dispatch : Dispatch<TestResultGlobalActionType>) : PaginatorResultPropsDispatch => {
    return {
        selectQuestion:(index: number) =>{
            dispatch(selectQuestionResultActionCreate(index))
        },
    }
}

export const PaginatorAnswersContainer = connect(mapStateAnswersToProps, mapDispatchAnswersToProps)(PaginatorTestAnswer);
export const PaginatorResultsContainer = connect(mapStateResultsToProps, mapDispatchResultsToProps)(PaginatorTestResult);