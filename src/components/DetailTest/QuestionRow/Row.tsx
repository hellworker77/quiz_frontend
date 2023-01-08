import React from 'react';
import answerStyles from './Row.module.css'

export type RowAnswerProps = {
    text: string,
    localAnswer: string | null,
    actualAnswer: string | null | undefined,
    changeLocalAnswer:(value: string) => void
}

export const RowAnswer = (props: RowAnswerProps) => {
    let styleState = getStyleState(props.localAnswer, props.actualAnswer, props.text)
    let style = getAnswerStyle(styleState)
    return (
        <div className={`${style + " " +answerStyles.answer}`} onClick={
            () => props.changeLocalAnswer(props.text)
        }>
            <div className={`${answerStyles.checkbox} ${style}`}>
                <div className={answerStyles.circle}></div>
            </div>
            <div className={answerStyles.text}>{props.text}</div>
        </div>
    );
};

export type RowResultProps = {
    text: string,
    correctAnswer: string | null| undefined,
    actualAnswer: string | null | undefined,
}

export const RowResult = (props: RowResultProps) =>{
    let styleState = getStyleState(props.actualAnswer, props.correctAnswer, props.text)
    let style = getResultStyle(styleState)
    return(
        <div className={`${style + " " +answerStyles.answer}`}>
            <div className={`${answerStyles.checkbox} ${style}`}>
                <div className={answerStyles.circle}></div>
            </div>
            <div className={answerStyles.text}>{props.text}</div>
        </div>
    )
}

const getAnswerStyle = (styleState: number) : string => {
    let style = "";
    if(styleState === 1){
        style = answerStyles.answered
    }
    else if(styleState === -1){
        style = answerStyles.active;
    }
    return style;
}
const getResultStyle = (styleState: number) : string => {
    let style = "";
    if(styleState === 1){
        style = answerStyles.answered
    }
    else if(styleState === -1){
        style = answerStyles.incorrect;
    }
    return style;
}


const getStyleState = (argumentFirst : string | null | undefined,
                       argumentSecond : string | null | undefined,
                       toFit: string) :number =>{

    argumentFirst = argumentFirst ?? "";
    argumentSecond = argumentSecond ?? "";

    let state = argumentFirst === toFit ? -1 : 0;
    state = argumentSecond === toFit ? 1 : state;

    return state;
}
