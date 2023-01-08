import React from 'react';
import {TestResultsProps} from "../../../../types/Implementation/Props/TestResultsProps";
import testResultsStyles from './TestResults.module.css'
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";
import {QuestionResult} from "../../../../types/Implementation/Models/Question/QuestionResult";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const TestResults = (props: TestResultsProps) => {
    return (
        <ul className={testResultsStyles.ul}>
            {props.loadedChunkTestResults?.map(x=>
                <li className={testResultsStyles.li}>
                    <div>{x.name}</div>
                    <div>{Date.now()}</div>
                    <div style={{color:getColor(x.questionResults)}}>{Math.round(getPercent(x.questionResults) * 100)} %</div>
                    <Link to={`testResult/${x.id}`} className={testResultsStyles.button} onClick={()=>props.selectTestResult(x.id ?? "")}><FontAwesomeIcon icon={faExternalLink} /></Link>
                </li>
            )}
        </ul>
    );
};
const getPercent = (questionResults: Array<QuestionResult> | null) : number =>{
    questionResults = questionResults??[];
    let percent = questionResults.filter(x=>!x.isCorrect).length / questionResults.length;
    return percent;
}
const getColor = (questionResults: Array<QuestionResult> | null) : string => {
    let percent = getPercent(questionResults);

    let subtrahend = 255 * percent;

    let green = percent <= 0.5 ? subtrahend * 2 : 255;
    let blue = 0;
    let red = percent > 0.5 ? 255 - subtrahend: 255;
    return `rgb(${red},${green},${blue})`;
}

export default TestResults;