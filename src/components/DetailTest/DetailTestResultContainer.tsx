import {connect} from "react-redux"
import {AppStateType} from "../../redux/store";
import {
    DetailTestResultPropsDispatch,
    DetailTestResultPropsState
} from "../../types/Implementation/Props/DetailTestProps";
import {Dispatch} from "redux";
import DetailTestResult from "./DetailTestResult";
import {changeBackgroundActionCreate} from "../../redux/Reducers/AppReducer";
import {
    ChangeBackgroundActionType
} from "../../types/Implementation/ActionTypes/AppActionTypes/ChangeBackgroundActionType";

let mapStateToProps = (state: AppStateType) : DetailTestResultPropsState => {
    return {
        loadedTest: state.testResultReducer.loadedTestResult,
        selectedIndex: state.testResultReducer.selectedQuestionIndex,
        background: state.appReducer.background
    }
}
let mapDispatchToProps = (dispatch : Dispatch<ChangeBackgroundActionType>) : DetailTestResultPropsDispatch => {
    return {
        changeBackground: (background: string)=>{
            dispatch(changeBackgroundActionCreate(background))
        }
    }
}


const DetailTestAnswerContainer = connect(mapStateToProps, mapDispatchToProps)(DetailTestResult);

export default DetailTestAnswerContainer;