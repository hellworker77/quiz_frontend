import React from 'react';
import {DetailTestResultProps} from "../../types/Implementation/Props/DetailTestProps";
import NotFound from "../Errors/NotFound/NotFound";
import detailTestStyles from "./DetailTest.module.css";
import {RowResult} from "./QuestionRow/Row";
import {PaginatorResultsContainer} from "../Paginator/PaginatorContainer";

const DetailTestResult = (props: DetailTestResultProps) => {
    return (
        <div>
            {props.loadedTest == null ?
                <NotFound subject={"not loaded test result"}/> :
                <div className={detailTestStyles.wrapper}>
                    <div className={detailTestStyles.question}>
                        <div className={detailTestStyles.content_container}>
                            <div className={detailTestStyles.img_container}>
                                <img src={""} alt={""}></img>
                            </div>
                            <div className={detailTestStyles.container}>
                                <div className={detailTestStyles.title}>
                                    {props.loadedTest.questionResults?.at(props.selectedIndex)?.title}
                                </div>
                                <ol>
                                    {props.loadedTest.questionResults?.at(props.selectedIndex)?.answers?.map(answer =>
                                        <li className={detailTestStyles.answer}>
                                            <RowResult text={answer}
                                                       correctAnswer={props.loadedTest?.questionResults?.at(props.selectedIndex)?.correctAnswer}
                                                       actualAnswer={props.loadedTest?.questionResults?.at(props.selectedIndex)?.actualAnswer}/>
                                        </li>
                                    )}
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className={detailTestStyles.paginator}>
                        <PaginatorResultsContainer/>
                    </div>
                </div>
            }
        </div>
    );
};

export default DetailTestResult;