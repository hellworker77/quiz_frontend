import React from 'react';
import paginatorStyles from './Paginator.module.css'
import {QuestionAnswer} from "../../types/Implementation/Models/Question/QuestionAnswer";
import {QuestionResult} from "../../types/Implementation/Models/Question/QuestionResult";
import {PaginatorAnswerProps, PaginatorResultProps} from "../../types/Implementation/Props/PaginatorProps";
import {generateArrayRange} from "../../utilities/generateArrayRange";

export const PaginatorTestAnswer = (props: PaginatorAnswerProps) => {
    let indexes = generateArrayRange(props.size)
    return (
        <div className={paginatorStyles.bar}>
            <div className={paginatorStyles.button_back}>
                <button
                    onClick={() => props.scrollBack()}>{"<<"}</button>
            </div>
            <div className={paginatorStyles.buttons_container}>
                {indexes.map(x => <div
                    className={`${getPaginatorTestAnswerStyle(props.answers, x, props.selectedIndex)} ${paginatorStyles.button}`}>
                    <button onClick={() => invokeCallbackSelectQuestion(x, props.selectQuestion)}>{x + 1}</button>
                </div>)
                }
            </div>
            <div className={paginatorStyles.button_next}>
                <button
                    onClick={() => props.scrollNext()}>{">>"}</button>
            </div>
        </div>
    );
};
export const PaginatorTestResult = (props: PaginatorResultProps) => {
    let indexes = generateArrayRange(props.size)
    return (
        <div className={paginatorStyles.bar}>
            <div className={paginatorStyles.button_back}>
                <button
                    onClick={()=>invokeCallbackSelectQuestion(props.selectedIndex - 1, props.selectQuestion)}>{"<<"}</button>
            </div>
            <div className={paginatorStyles.buttons_container}>
                {indexes.map(x => <div
                    className={`${getPaginatorTestResultStyle(props.results, x)} ${paginatorStyles.button}`}>
                    <button onClick={()=>invokeCallbackSelectQuestion(x, props.selectQuestion)}>{x + 1}</button>
                </div>)
                }
            </div>
            <div className={paginatorStyles.button_next}>
                <button
                    onClick={()=>invokeCallbackSelectQuestion(props.selectedIndex + 1, props.selectQuestion)}>{">>"}</button>
            </div>
        </div>
    );
};

const getPaginatorTestAnswerStyle = (answers: Array<QuestionResult> |Array<QuestionAnswer> | null | undefined,
                                 index: number,
                                 selectedIndex: number): string => {
    answers = answers ?? [];
    let answer = answers.at(index)
    let style = index === selectedIndex ? paginatorStyles.active : "";
    if (answer) {
        style = answer.actualAnswer !== "" ? paginatorStyles.answered : style

    }
    return style
}
const getPaginatorTestResultStyle = (answers: Array<QuestionResult> |Array<QuestionAnswer> | null | undefined,
                                 index: number): string => {
    answers = answers ?? [];
    let answer = answers.at(index)
    let style = paginatorStyles.incorrect;
    if (answer) {
        style = answer.actualAnswer === answer.correctAnswer ? paginatorStyles.answered : style
    }
    return style
}
const invokeCallbackSelectQuestion = (index: number, callback: (index: number) => void): void => {
    callback(index);
}