import React from 'react';
import {PaginatorProps} from "../../types/Implementation/Props/PaginatorProps";
import paginatorStyles from './Paginator.module.css'
import {QuestionAnswer} from "../../types/Implementation/Models/Question/QuestionAnswer";
import {QuestionResult} from "../../types/Implementation/Models/Question/QuestionResult";

export const PaginatorTestAnswer = (props: PaginatorProps) => {
    let indexes = getRange(props.size)
    return (
        <div className={paginatorStyles.bar}>
            <div className={paginatorStyles.button_back}>
                <button
                    onClick={() => invokeCallbackBackQuestion(props.selectedIndex, props.selectQuestion)}>{"<<"}</button>
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
                    onClick={() => invokeCallbackNextQuestion(props.selectedIndex, props.selectQuestion)}>{">>"}</button>
            </div>
        </div>
    );
};
export const PaginatorTestResult = (props: PaginatorProps) => {
    let indexes = getRange(props.size)
    return (
        <div className={paginatorStyles.bar}>
            <div className={paginatorStyles.button_back}>
                <button
                    onClick={() => invokeCallbackBackQuestion(props.selectedIndex, props.selectQuestion)}>{"<<"}</button>
            </div>
            <div className={paginatorStyles.buttons_container}>
                {indexes.map(x => <div
                    className={`${getPaginatorTestResultStyle(props.answers, x)} ${paginatorStyles.button}`}>
                    <button onClick={() => invokeCallbackSelectQuestion(x, props.selectQuestion)}>{x + 1}</button>
                </div>)
                }
            </div>
            <div className={paginatorStyles.button_next}>
                <button
                    onClick={() => invokeCallbackNextQuestion(props.selectedIndex, props.selectQuestion)}>{">>"}</button>
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
const getRange = (size: number): Array<number> =>
    Array.from(
        {length: size},
        (value, index) => index
    );
const invokeCallbackSelectQuestion = (index: number, callback: (index: number) => void): void => {
    callback(index);
}
const invokeCallbackNextQuestion = (selectedIndex: number, callback: (index: number) => void): void => {
    callback(selectedIndex + 1)
}
const invokeCallbackBackQuestion = (selectedIndex: number, callback: (index: number) => void): void => {
    callback(selectedIndex - 1)
}