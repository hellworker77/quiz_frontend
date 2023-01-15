import React, {useEffect} from 'react';
import {DetailTestResultProps} from "../../types/Implementation/Props/DetailTestProps";
import NotFound from "../Errors/NotFound/NotFound";
import detailTestStyles from "./DetailTest.module.css";
import {RowResult} from "./QuestionRow/Row";
import {PaginatorResultsContainer} from "../Paginator/PaginatorContainer";

const DetailTestResult = (props: DetailTestResultProps) => {
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
                <NotFound subject={"not loaded test result"}/> :
                <div className={detailTestStyles.wrapper}>
                    <div className={detailTestStyles.question}>
                        <div className={detailTestStyles.content_container}>
                            <div className={detailTestStyles.img_container}>
                                <img src={`data:image/jpeg;base64,${props.loadedTest.questionResultsDto?.at(props.selectedIndex)?.photo?.data}`} alt={""}></img>
                            </div>
                            <div className={detailTestStyles.container}>
                                <div className={detailTestStyles.title}>
                                    {props.loadedTest.questionResultsDto?.at(props.selectedIndex)?.title}
                                </div>
                                <ol>
                                    {props.loadedTest.questionResultsDto?.at(props.selectedIndex)?.answers?.map(answer =>
                                        <li className={detailTestStyles.answer}>
                                            <RowResult text={answer}
                                                       correctAnswer={props.loadedTest?.questionResultsDto?.at(props.selectedIndex)?.correctAnswer}
                                                       actualAnswer={props.loadedTest?.questionResultsDto?.at(props.selectedIndex)?.actualAnswer}/>
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