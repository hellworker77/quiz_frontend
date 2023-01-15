import React from 'react';
import {TestProps} from "../../../../types/Implementation/Props/TestProps";
import testPageStyles from './TestPage.module.css'
import {Link} from "react-router-dom";
import {Test} from "../../../../types/Implementation/Models/Test/Test";

const TestPage = (props: TestProps) => {
    return (
        <div className={testPageStyles.box}>
            <div className={testPageStyles.img}>
                <img src={`data:image/jpeg;base64,${props.test?.photo?.data}`} alt={"suka"}></img>
            </div>
            <div className={testPageStyles.content}>
                <div className={testPageStyles.name}>
                    {props.test.name}
                </div>
                <div className={testPageStyles.description}>
                    {props.test.description}
                </div>
                <div className={testPageStyles.button}>
                    <Link to={`test/${props.test.id}`} onClick={() => {
                        generateTestAnswerCallBacks(props.test, props.generateNewTestAnswer)
                    }}>Вперёд!</Link>
                </div>
            </div>
        </div>
    );
};
const generateTestAnswerCallBacks = (copyFrom: Test | null, callback: (copyFrom: Test) => void): void => {
    if (copyFrom != null) {
        callback(copyFrom)
    }
}

export default TestPage;