import {InitialStateTestAnswerType} from "../../types/Implementation/InitialStates/InitialStateTestAnswerType";
import {ADD_ANSWER_ACTION_TYPE, AddAnswerActionType} from "../../types/Implementation/ActionTypes/AddAnswerActionType";
import {QuestionAnswer} from "../../types/Implementation/Models/Question/QuestionAnswer";

import {
    GENERATE_TEST_ANSWER_ACTION_TYPE,
    GenerateTestAnswerActionType
} from "../../types/Implementation/ActionTypes/GenerateTestAnswerActionType";
import {Test} from "../../types/Implementation/Models/Test/Test";
import {
    CHANGE_LOCAL_ANSWER_ACTION_TYPE,
    ChangeLocalAnswerActionType
} from "../../types/Implementation/ActionTypes/ChangeLocalAnswerActionType";
import {
    SELECT_QUESTION_ANSWER_ACTION_TYPE,
    SelectQuestionAnswerActionType
} from "../../types/Implementation/ActionTypes/SelectQuestionActionType";

let initialState: InitialStateTestAnswerType = {
    currentAnswer: null,
    localAnswer: null,
    selectedQuestionIndex: 0
}

const TestAnswerReducer = (state = initialState, action: TestAnswerGlobalActionType): InitialStateTestAnswerType => {
    switch (action.type) {
        case GENERATE_TEST_ANSWER_ACTION_TYPE:
            if(state.currentAnswer?.id !== action.from.id)
            state.currentAnswer = {
                id: action.from.id,
                name: action.from.name,
                description: action.from.description,
                answerQuestions: action.from.questions?.map(x =>({
                    id: x.id,
                    title: x.title,
                    answers: x.answers,
                    correctAnswer: x.correctAnswer,
                    actualAnswer: "",
                    testId: x.testId
                }) as QuestionAnswer) ?? []
            }
            return {
                ...state,
                selectedQuestionIndex : 0
            }
        case ADD_ANSWER_ACTION_TYPE:
            let targetQuestion = state.currentAnswer?.answerQuestions?.at(state.selectedQuestionIndex)
            if(targetQuestion && state.localAnswer !== ""){
                targetQuestion.actualAnswer = state.localAnswer
            }
            return {
                ...state,
                localAnswer: ""
            }
        case CHANGE_LOCAL_ANSWER_ACTION_TYPE:
            return {
                ...state,
                localAnswer: action.value
            }
        case SELECT_QUESTION_ANSWER_ACTION_TYPE:
            let length = state.currentAnswer?.answerQuestions?.length ?? 0;
            let index = state.selectedQuestionIndex;
            if(action.index > -1 && action.index< length ){
                index = action.index;
            }
            return {
                ...state,
                selectedQuestionIndex: index,
                localAnswer: ""
            }
        default:
            return {
                ...state
            }
    }
}

export type TestAnswerGlobalActionType =
    AddAnswerActionType
    | GenerateTestAnswerActionType
    | ChangeLocalAnswerActionType
    | SelectQuestionAnswerActionType

export const changeLocalAnswerActionCreate = (value: string): ChangeLocalAnswerActionType => ({
    type: CHANGE_LOCAL_ANSWER_ACTION_TYPE, value: value
})
export const generateTestAnswerActionCreate = (from: Test): GenerateTestAnswerActionType => ({
    type: GENERATE_TEST_ANSWER_ACTION_TYPE, from: from
})
export const addAnswerActionCreate = (): AddAnswerActionType => ({
    type: ADD_ANSWER_ACTION_TYPE
})
export const selectQuestionAnswerActionCreate = (index: number) : SelectQuestionAnswerActionType => ({
    type: SELECT_QUESTION_ANSWER_ACTION_TYPE, index: index
})

export default TestAnswerReducer;