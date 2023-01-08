import React from "react";
import {MainProps} from "../../types/Implementation/Props/MainProps";
import TestsContainer from "./Tests/TestsContainer";

let Main = (props : MainProps) => {
    return(
        <div>
            <TestsContainer />
        </div>
    )
}

export default Main;