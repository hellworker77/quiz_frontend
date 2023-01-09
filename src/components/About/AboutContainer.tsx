import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import About from "./About";
import {changeBackgroundActionCreate} from "../../redux/Reducers/AppReducer";
import {AboutPropsDispatch, AboutPropsState} from "../../types/Implementation/Props/AboutProps";
import {ChangeBackgroundActionType} from "../../types/Implementation/ActionTypes/AppActionTypes/ChangeBackgroundActionType";
import {Dispatch} from "redux";

let mapStateToProps = (state: AppStateType) : AboutPropsState => {
    return {
        background: state.appReducer.background
    }
}
let mapDispatchToProps = (dispatch : Dispatch<ChangeBackgroundActionType>) : AboutPropsDispatch => {
    return {
        changeBackground: (background: string)=>{
            dispatch(changeBackgroundActionCreate(background))
        }
    }
}

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);

export default AboutContainer;