import {InitialStateTestType} from "../../types/Implementation/InitialStates/InitialStateTestType";
import {Test} from "../../types/Implementation/Models/Test/Test";
import {LOAD_TESTS_ACTION_TYPE, LoadTestsActionType} from "../../types/Implementation/ActionTypes/TestActionTypes/LoadTestsActionType";
import axios from "axios";

let initialState: InitialStateTestType = {
    chunkOfTests: [
        {
            id: "1",
            name: "test1",
            description: "some test",
            questionsDto: [
                {
                    id: "1",
                    title: "q1",
                    answers: ["1", "2", "3", "4"],
                    correctAnswer: "2",
                    testId: "2"
                },
                {
                    id: "1",
                    title: "q1",
                    answers: ["s1", "s2", "s3", "s4"],
                    correctAnswer: "s2",
                    testId: "2"
                },
                {
                    id: "1",
                    title: "q1",
                    answers: ["1", "2", "3", "4"],
                    correctAnswer: "2",
                    testId: "2"
                },
                {
                    id: "4",
                    title: "Кто обронил сшытак",
                    answers: ["Аянами Лайт", "Л джей", "Крю", "Рюк", "Я"],
                    correctAnswer: "Рюк",
                    testId: "1"
                },
            ]
        },
        {
            id: "2",
            name: "Naruto Test",
            description: "some cinema test",
            questionsDto: [
                {
                    id: "1",
                    title: "q1",
                    answers: ["1", "2", "3", "4"],
                    correctAnswer: "2",
                    testId: "2"
                },
                {
                    id: "2",
                    title: "q2",
                    answers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                    correctAnswer: "2",
                    testId: "2"
                }
            ]
        }
    ]
}

const testReducer = (state = initialState, action: TestGlobalActionType): InitialStateTestType => {
    switch (action.type) {
        case LOAD_TESTS_ACTION_TYPE:
            if (action.testsData) {
                state.chunkOfTests = [...action.testsData]
            }
            return {
                ...state
            }
        default:
            return {
                ...state,
            }
    }
}

export type TestGlobalActionType = LoadTestsActionType

export const loadTestsActionCreate =  (data: Array<Test> | null): LoadTestsActionType => (
    {type: LOAD_TESTS_ACTION_TYPE, testsData: data})

export default testReducer;