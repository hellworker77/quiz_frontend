import {connect} from "react-redux";

import {AppStateType} from "../../redux/store";
import DetailTestAnswer from "./DetailTestAnswer";
import {
    DetailTestAnswerPropsDispatch,
    DetailTestAnswerPropsState
} from "../../types/Implementation/Props/DetailTestProps";
import {
    addAnswerActionCreate,
    changeLocalAnswerActionCreate, scrollNextAnswerActionCreate,
    TestAnswerGlobalActionType
} from "../../redux/Reducers/TestAnswerReducer";
import {Dispatch} from "redux";
import {changeBackgroundActionCreate} from "../../redux/Reducers/AppReducer";
import {AboutPropsDispatch} from "../../types/Implementation/Props/AboutProps";
import {
    ChangeBackgroundActionType
} from "../../types/Implementation/ActionTypes/AppActionTypes/ChangeBackgroundActionType";

let mapStateToProps = (state: AppStateType) : DetailTestAnswerPropsState => {
    return {
        loadedTest: state.testAnswerReducer.currentAnswer,
        selectedIndex: state.testAnswerReducer.selectedQuestionIndex,
        localAnswer: state.testAnswerReducer.localAnswer,
        tokenType: state.userReducer.session.token_type,
        accessToken: state.userReducer.session.access_token,
        background: state.appReducer.background
    }
}
let mapDispatchToProps = (dispatch : Dispatch<TestAnswerGlobalActionType | ChangeBackgroundActionType>) : DetailTestAnswerPropsDispatch => {
    return {
        changeLocalAnswer:(value: string)=>{
            dispatch(changeLocalAnswerActionCreate(value))
        },
        addNewAnswer:()=>{
            dispatch(addAnswerActionCreate())
        },
        scrollNext:()=>{
            dispatch(scrollNextAnswerActionCreate())
        },
        changeBackground: (background: string)=>{
            dispatch(changeBackgroundActionCreate(background))
        }
    }
}


const DetailTestAnswerContainer = connect(mapStateToProps, mapDispatchToProps)(DetailTestAnswer);

export default DetailTestAnswerContainer;