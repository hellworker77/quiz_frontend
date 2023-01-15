import React, {useEffect, useState} from 'react';
import {DetailTestAnswerProps} from "../../types/Implementation/Props/DetailTestProps";
import NotFound from "../Errors/NotFound/NotFound";
import detailTestStyles from './DetailTest.module.css'
import {PaginatorAnswersContainer} from "../Paginator/PaginatorContainer";
import {RowAnswer} from "./QuestionRow/Row";
import {TestAnswer} from "../../types/Implementation/Models/Test/TestAnswer";
import axios from "axios";
import {replyRequestCreator} from "../../types/Implementation/RequestCreators/TestResultRequestCreator";

const DetailTestAnswer = (props: DetailTestAnswerProps) => {
    useEffect(()=>{
        let prevBackground = props.background;
        props.changeBackground(`data:image/jpeg;base64,${props.loadedTest?.photo?.data}`)
        return () => {
            props.changeBackground(prevBackground)
        }
    },[])
    return (
        <div>
            {props.loadedTest == null ?
                <NotFound subject={"not loaded test "}/> :
                <div className={detailTestStyles.wrapper}>
                    <div className={detailTestStyles.question}>
                        <div className={detailTestStyles.content_container}>
                            <div className={detailTestStyles.img_container}>
                                <img src={`data:image/jpeg;base64,${props.loadedTest.answerQuestionsDto?.at(props.selectedIndex)?.photo?.data}`} alt={""}></img>
                            </div>
                            <div className={detailTestStyles.container}>
                                <div className={detailTestStyles.title}>
                                    {props.loadedTest.answerQuestionsDto?.at(props.selectedIndex)?.title}
                                </div>
                                <ol>
                                    {props.loadedTest.answerQuestionsDto?.at(props.selectedIndex)?.answers?.map(answer =>
                                        <li className={detailTestStyles.answer}>
                                            <RowAnswer text={answer} changeLocalAnswer={props.changeLocalAnswer}
                                                       localAnswer={props.localAnswer}
                                                       actualAnswer={props.loadedTest?.answerQuestionsDto?.at(props.selectedIndex)?.actualAnswer}/>
                                        </li>
                                    )}
                                </ol>
                                <div className={`${getButtonStyle(props.localAnswer,
                                    props.loadedTest?.answerQuestionsDto?.at(props.selectedIndex)?.answers,
                                    props.loadedTest?.answerQuestionsDto?.at(props.selectedIndex)?.actualAnswer)}`}>
                                    <button onClick={() =>{
                                        props.addNewAnswer();
                                        props.scrollNext();
                                    }}>Go It</button>
                                </div>
                                <div className={detailTestStyles.submit_button}
                                     style={{display: checkTestIsCompleted(props.loadedTest)?"block":"none"}}
                                onClick={()=>invokeCallbackReply(props.tokenType, props.accessToken, props.loadedTest)}>Submit</div>
                            </div>
                        </div>
                    </div>
                    <div className={detailTestStyles.paginator}>
                        <PaginatorAnswersContainer/>
                    </div>
                </div>
            }
        </div>
    );
};

const getButtonStyle = (localAnswer: string | null,
                        answers: Array<string> | null | undefined,
                        actualAnswer: string | null | undefined): string => {
    let style = detailTestStyles.button;
    localAnswer = localAnswer ?? "";
    answers = answers ?? []
    actualAnswer = actualAnswer ?? ""
    if (answers.indexOf(localAnswer) !== -1 || answers.indexOf(actualAnswer) !== -1) {
        style = detailTestStyles.active + " " + style;
    }
    return style
}
const checkTestIsCompleted = (currentTest: TestAnswer | null) : boolean=>{
    return currentTest?.answerQuestionsDto?.find(x=>(x.actualAnswer?.length ?? 0) === 0) === undefined;
}
const invokeCallbackReply = (token_type: string, access_token: string, testAnswer: TestAnswer | null) : void =>{
    if(checkTestIsCompleted(testAnswer)){
        let config = replyRequestCreator(token_type, access_token, testAnswer!)

        axios(config).then(response => console.log(response)).catch(error => console.log(error))
    }
}

export default DetailTestAnswer;