import React from 'react';
import {TestsProps} from "../../../types/Implementation/Props/TestsProps";
import TestPage from "./Test/TestPage";
import testsStyles from './Tests.module.css'

let Tests = (props: TestsProps) => {
    return (
        <div className={testsStyles.wrapper}>
            {props.tests.map(x => <TestPage test={x} generateNewTestAnswer={props.generateNewTestAnswer} />)}
        </div>
    );
};

export default Tests;