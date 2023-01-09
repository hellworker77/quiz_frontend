import {InitialStateTestResultType} from "../../types/Implementation/InitialStates/InitialStateTestResultType";
import {
    SELECT_QUESTION_RESULT_ACTION_TYPE,
    SelectQuestionResultActionType
} from "../../types/Implementation/ActionTypes/TestResultsActionTypes/SelectQuestionResultActionType";
import {
    SELECT_TEST_RESULT_ACTION_TYPE,
    SelectTestResultActionType
} from "../../types/Implementation/ActionTypes/TestResultsActionTypes/SelectTestResultActionType";

let initialState : InitialStateTestResultType = {
    loadedTestResult : {
        id: "1",
        description: "some test",
        name:"titans attack",
        userId: "1",
        questionResults: [
            {
                id:"1",
                title:"question 1",
                testResultId:"1",
                answers:["1","2"],
                correctAnswer: "1",
                actualAnswer: "2",
                isCorrect: false
            },
            {
                id:"2",
                title:"question 2",
                testResultId:"1",
                answers:["1","2"],
                correctAnswer: "2",
                actualAnswer: "2",
                isCorrect: true
            }
        ]
    },
    chunkOfTestResults : [
        {
            id: "1",
            description: "some test",
            name:"titans attack",
            userId: "1",
            questionResults: [
                {
                    id:"1",
                    title:"question 1",
                    testResultId:"1",
                    answers:["1","2"],
                    correctAnswer: "1",
                    actualAnswer: "2",
                    isCorrect: false
                },
                {
                    id:"2",
                    title:"question 2",
                    testResultId:"1",
                    answers:["1","2"],
                    correctAnswer: "2",
                    actualAnswer: "2",
                    isCorrect: false
                },
                {
                    id:"3",
                    title:"question 3",
                    testResultId:"1",
                    answers:["1","2"],
                    correctAnswer: "2",
                    actualAnswer: "2",
                    isCorrect: false
                },
                {
                    id:"4",
                    title:"question 4",
                    testResultId:"1",
                    answers:["1","2"],
                    correctAnswer: "2",
                    actualAnswer: "2",
                    isCorrect: true
                }
            ]
        },
        {
            id: "2",
            description: "some test",
            name:"titans attack",
            userId: "1",
            questionResults: [
                {
                    id:"1",
                    title:"question 1",
                    testResultId:"2",
                    answers:["1","2"],
                    correctAnswer: "1",
                    actualAnswer: "2",
                    isCorrect: false
                },
                {
                    id:"2",
                    title:"question 2",
                    testResultId:"2",
                    answers:["1","2"],
                    correctAnswer: "2",
                    actualAnswer: "2",
                    isCorrect: true
                }
            ]
        },
        {
            id: "3",
            description: "some test",
            name:"titans attack",
            userId: "1",
            questionResults: [
                {
                    id:"1",
                    title:"question 1",
                    testResultId:"3",
                    answers:["1","2"],
                    correctAnswer: "1",
                    actualAnswer: "2",
                    isCorrect: false
                },
                {
                    id:"2",
                    title:"question 2",
                    testResultId:"3",
                    answers:["1","2"],
                    correctAnswer: "2",
                    actualAnswer: "2",
                    isCorrect: true
                }
            ]
        },
        {
            id: "4",
            description: "some test",
            name:"titans attack",
            userId: "1",
            questionResults: [
                {
                    id:"1",
                    title:"question 1",
                    testResultId:"4",
                    answers:["1","2"],
                    correctAnswer: "1",
                    actualAnswer: "2",
                    isCorrect: false
                },
                {
                    id:"2",
                    title:"question 2",
                    testResultId:"4",
                    answers:["1","2"],
                    correctAnswer: "2",
                    actualAnswer: "2",
                    isCorrect: true
                }
            ]
        }
    ],
    total: 250,
    won: 200,
    lose: 50,
    selectedQuestionIndex: 0
}

const TestResultReducer = (state = initialState, action: TestResultGlobalActionType) : InitialStateTestResultType => {
    switch (action.type){
        case SELECT_QUESTION_RESULT_ACTION_TYPE:
            let length = state.loadedTestResult?.questionResults?.length ?? 0;
            let index = state.selectedQuestionIndex;
            if(action.index > -1 && action.index< length ){
                index = action.index;
            }
            return {
                ...state,
                selectedQuestionIndex: index,
            }
            return {
                ...state
            }
        case SELECT_TEST_RESULT_ACTION_TYPE:
            let targetTestResult = state.chunkOfTestResults?.find(x=>x.id === action.id);
            if(targetTestResult){
                state.loadedTestResult = {...targetTestResult}
            }
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}
export type TestResultGlobalActionType = SelectQuestionResultActionType | SelectTestResultActionType

export const selectQuestionResultActionCreate = (index: number) : SelectQuestionResultActionType => ({
    type: SELECT_QUESTION_RESULT_ACTION_TYPE, index: index
})
export const selectTestResultActionCreate = (id: string) : SelectTestResultActionType => ({
    type: SELECT_TEST_RESULT_ACTION_TYPE, id: id
})
export default TestResultReducer;