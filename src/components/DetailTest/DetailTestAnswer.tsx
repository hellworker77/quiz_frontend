import React from 'react';
import {DetailTestAnswerProps} from "../../types/Implementation/Props/DetailTestProps";
import NotFound from "../Errors/NotFound/NotFound";
import detailTestStyles from './DetailTest.module.css'
import {PaginatorAnswersContainer} from "../Paginator/PaginatorContainer";
import {RowAnswer} from "./QuestionRow/Row";

const DetailTestAnswer = (props: DetailTestAnswerProps) => {
    return (
        <div>
            {props.loadedTest == null ?
                <NotFound subject={"not loaded test "}/> :
                <div className={detailTestStyles.wrapper}>
                    <div className={detailTestStyles.question}>
                        <div className={detailTestStyles.content_container}>
                            <div className={detailTestStyles.img_container}>
                                <img src={""} alt={""}></img>
                            </div>
                            <div className={detailTestStyles.container}>
                                <div className={detailTestStyles.title}>
                                    {props.loadedTest.answerQuestions?.at(props.selectedIndex)?.title}
                                </div>
                                <ol>
                                    {props.loadedTest.answerQuestions?.at(props.selectedIndex)?.answers?.map(answer =>
                                        <li className={detailTestStyles.answer}>
                                            <RowAnswer text={answer} changeLocalAnswer={props.changeLocalAnswer}
                                                       localAnswer={props.localAnswer}
                                                       actualAnswer={props.loadedTest?.answerQuestions?.at(props.selectedIndex)?.actualAnswer}/>
                                        </li>
                                    )}
                                </ol>
                                <div className={`${getButtonStyle(props.localAnswer,
                                    props.loadedTest?.answerQuestions?.at(props.selectedIndex)?.answers,
                                    props.loadedTest?.answerQuestions?.at(props.selectedIndex)?.actualAnswer)}`}>
                                    <button onClick={() => props.addNewAnswer()}>Go It</button>
                                </div>
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


export default DetailTestAnswer;