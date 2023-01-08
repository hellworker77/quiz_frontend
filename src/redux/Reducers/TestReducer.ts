import {InitialStateTestType} from "../../types/Implementation/InitialStates/InitialStateTestType";

let initialState : InitialStateTestType = {
    chunkOfTests: [
        {
            id:"1",
            name:"test1",
            description: "some test",
            questions: [
                {
                    id:"1",
                    title:"q1",
                    answers:["1","2","3", "4"],
                    correctAnswer:"2",
                    testId:"2"
                },
                {
                    id:"1",
                    title:"q1",
                    answers:["s1","s2","s3", "s4"],
                    correctAnswer:"s2",
                    testId:"2"
                },
                {
                    id:"1",
                    title:"q1",
                    answers:["1","2","3", "4"],
                    correctAnswer:"2",
                    testId:"2"
                },
                {
                    id:"4",
                    title:"Кто обронил сшытак",
                    answers:["Аянами Лайт","Л джей","Крю", "Рюк", "Я"],
                    correctAnswer:"Рюк",
                    testId: "1"
                },
            ]
        },
        {
            id:"2",
            name:"Naruto Test",
            description:"some cinema test" ,
            questions: [
                {
                    id:"1",
                    title:"q1",
                    answers:["1","2","3", "4"],
                    correctAnswer:"2",
                    testId:"2"
                },
                {
                    id: "2",
                    title: "q2",
                    answers: ["1","2","3", "4","5","6","7","8","9","10"],
                    correctAnswer: "2",
                    testId:"2"
                }
            ]
        }
    ]
}

const testReducer = (state = initialState, action: any): InitialStateTestType => {
    switch (action.type){

        default:
            return {
                ...state
            }
    }
}


export default testReducer;