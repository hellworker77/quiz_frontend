import {InitialStateTestAnswerType} from "../../types/Implementation/InitialStates/InitialStateTestAnswerType";
import {
    ADD_ANSWER_ACTION_TYPE,
    AddAnswerActionType
} from "../../types/Implementation/ActionTypes/TestAnswerActionTypes/AddAnswerActionType";
import {QuestionAnswer} from "../../types/Implementation/Models/Question/QuestionAnswer";

import {
    GENERATE_TEST_ANSWER_ACTION_TYPE,
    GenerateTestAnswerActionType
} from "../../types/Implementation/ActionTypes/TestAnswerActionTypes/GenerateTestAnswerActionType";
import {Test} from "../../types/Implementation/Models/Test/Test";
import {
    CHANGE_LOCAL_ANSWER_ACTION_TYPE,
    ChangeLocalAnswerActionType
} from "../../types/Implementation/ActionTypes/TestAnswerActionTypes/ChangeLocalAnswerActionType";
import {
    SELECT_QUESTION_ANSWER_ACTION_TYPE,
    SelectQuestionAnswerActionType
} from "../../types/Implementation/ActionTypes/TestAnswerActionTypes/SelectQuestionAnswerActionType";
import {
    SCROLL_NEXT_ANSWER_ACTION_TYPE,
    ScrollNextAnswerActionType
} from "../../types/Implementation/ActionTypes/TestAnswerActionTypes/ScrollNextAnswerActionType";
import {
    SCROLL_BACK_ANSWER_ACTION_TYPE,
    ScrollBackAnswerActionType
} from "../../types/Implementation/ActionTypes/TestAnswerActionTypes/ScrollBackAnswerActionType";

let initialState: InitialStateTestAnswerType = {
    currentAnswer: null,
    localAnswer: null,
    selectedQuestionIndex: 0
}

const TestAnswerReducer = (state = initialState, action: TestAnswerGlobalActionType): InitialStateTestAnswerType => {
    switch (action.type) {
        case GENERATE_TEST_ANSWER_ACTION_TYPE:
            if (state.currentAnswer?.id !== action.from.id)
                state.currentAnswer = {
                    id: action.from.id,
                    name: action.from.name,
                    date: action.from.date,
                    description: action.from.description,
                    stamp: action.from.stamp,
                    photo: action.from.photo,
                    answerQuestionsDto: action.from.questionsDto?.map(x => ({
                        id: x.id,
                        title: x.title,
                        answers: x.answers,
                        correctAnswer: x.correctAnswer,
                        actualAnswer: "",
                        testId: x.testId,
                        photo: x.photo
                    }) as QuestionAnswer) ?? []
                }
            return {
                ...state,
                selectedQuestionIndex: 0
            }
        case ADD_ANSWER_ACTION_TYPE:
            let targetQuestion = state.currentAnswer?.answerQuestionsDto?.at(state.selectedQuestionIndex)
            if (targetQuestion && state.localAnswer !== "") {
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
            let length = state.currentAnswer?.answerQuestionsDto?.length ?? 0;
            let index = 0;
            if (action.index > -1 && action.index < length) {
                index = action.index;
            }
            return {
                ...state,
                selectedQuestionIndex: index,
                localAnswer: ""
            }
        case SCROLL_BACK_ANSWER_ACTION_TYPE:
            return {
                ...state,
                selectedQuestionIndex: findNearbyIndex(state.currentAnswer?.answerQuestionsDto ?? [], Direction.Left, state.selectedQuestionIndex),
                localAnswer: ""
            }
        case SCROLL_NEXT_ANSWER_ACTION_TYPE:
            return {
                ...state,
                selectedQuestionIndex: findNearbyIndex(state.currentAnswer?.answerQuestionsDto ?? [], Direction.Right, state.selectedQuestionIndex),
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
    | ScrollNextAnswerActionType
    | ScrollBackAnswerActionType

export const changeLocalAnswerActionCreate = (value: string): ChangeLocalAnswerActionType => ({
    type: CHANGE_LOCAL_ANSWER_ACTION_TYPE, value: value
})
export const generateTestAnswerActionCreate = (from: Test): GenerateTestAnswerActionType => ({
    type: GENERATE_TEST_ANSWER_ACTION_TYPE, from: from
})
export const addAnswerActionCreate = (): AddAnswerActionType => ({
    type: ADD_ANSWER_ACTION_TYPE
})
export const selectQuestionAnswerActionCreate = (index: number): SelectQuestionAnswerActionType => ({
    type: SELECT_QUESTION_ANSWER_ACTION_TYPE, index: index
})
export const scrollNextAnswerActionCreate = (): ScrollNextAnswerActionType => ({
    type: SCROLL_NEXT_ANSWER_ACTION_TYPE
})
export const scrollBackAnswerActionCreate = (): ScrollBackAnswerActionType => ({
    type: SCROLL_BACK_ANSWER_ACTION_TYPE
})

const findNearbyIndex = (targetArray: Array<QuestionAnswer>, side: Direction, currentIndex: number): number => {
    let result = currentIndex;
    let totalArray: Array<QuestionAnswer> = new Array<QuestionAnswer>();
    if(side === Direction.Right){
        let firstPiece = targetArray.slice(0, currentIndex);
        let secondPiece = targetArray.slice(-targetArray.length + (currentIndex));
        totalArray = secondPiece.concat(firstPiece).reverse();
    }else if(side === Direction.Left)
    {
        let firstPiece = targetArray.slice(0, currentIndex + 1);
        let secondPiece = targetArray.slice(-targetArray.length + (currentIndex + 1));
        totalArray = secondPiece.concat(firstPiece);
    }

    for (let index = totalArray.length - 2; index >= 0; index--) {
        if ((totalArray[index].actualAnswer?.length ?? 0) === 0) {
            result = targetArray.indexOf(totalArray[index]);
            break
        }
    }

    return result;
}

enum Direction {
    Left,
    Right
}


export default TestAnswerReducer;