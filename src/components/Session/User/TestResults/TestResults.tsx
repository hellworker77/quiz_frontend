import React, {useEffect} from 'react';
import {TestResultsProps} from "../../../../types/Implementation/Props/TestResultsProps";
import testResultsStyles from './TestResults.module.css'
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {loadChunkRequestCreator} from "../../../../types/Implementation/RequestCreators/TestResultRequestCreator";
import axios from "axios";
import {TestResult} from "../../../../types/Implementation/Models/Test/TestResult";

const TestResults = (props: TestResultsProps) => {
    useEffect(()=>{
        if(props.count === 0){
            invokeCallbackLoadChunk(props.tokenType, props.accessToken, props.page, props.chunkSize, props.loadTestResults);
        }
    },[])
    return (
        <ul className={testResultsStyles.ul}>
            {props.loadedChunkTestResults?.map(x=>
                <li className={testResultsStyles.li}>
                    <div>{x.name}</div>
                    <div>{x.date.toString().split('T')[0]}</div>
                    <div style={{color:getColor(x.accuracy)}}>{Math.round(x.accuracy * 100)} %</div>
                    <Link to={`testResult/${x.id}`} className={testResultsStyles.button} onClick={()=>props.selectTestResult(x.id ?? "")}><FontAwesomeIcon icon={faExternalLink} /></Link>
                </li>
            )}
            <li className={testResultsStyles.load_more} onClick={() => invokeCallbackLoadChunk(props.tokenType, props.accessToken, props.page, props.chunkSize, props.loadTestResults)}>load more...</li>
        </ul>
    );
};

const invokeCallbackLoadChunk = (tokenType: string, accessToken : string, page: number, chunkSize: number, callback: (testResults: Array<TestResult>) => void) : void =>{
    let config = loadChunkRequestCreator(tokenType, accessToken, page, chunkSize);
    axios<Array<TestResult>>(config).then(response => {
        callback(response.data)
    }).catch(error => console.log(error))
}


const getColor = (accuracy: number) : string => {
    let subtrahend = 255 * accuracy;

    let green = accuracy <= 0.5 ? subtrahend * 2 : 255;
    let blue = 0;
    let red = accuracy > 0.5 ? 255 - subtrahend: 255;
    return `rgb(${red},${green},${blue})`;
}

export default TestResults;