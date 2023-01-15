import {connect} from "react-redux";

import {AppStateType} from "../../redux/store";
import Leaders from "./Leaders";
import {Dispatch} from "redux";
import {LeadersPropsDispatch, LeadersPropsState} from "../../types/Implementation/Props/LeadersProps";
import {User} from "../../types/Implementation/Models/Users/User";
import {loadLeadersActionCreate} from "../../redux/Reducers/UserReducer";




let mapStateToProps = (state: AppStateType) : LeadersPropsState => {
    return {
        loadedChunk: state.userReducer.leaderBoard,
        count: state.userReducer.leaderBoard.length,
        page: state.userReducer.leaderBoardPage,
        size: state.userReducer.pageSize
    }
}
let mapDispatchToProps = (dispatch : Dispatch) : LeadersPropsDispatch => {
    return {
        loadLeaderBoardPage: (data: Array<User>)=>{
            dispatch(loadLeadersActionCreate(data))
        }
    }
}

const LeadersContainerContainer = connect(mapStateToProps, mapDispatchToProps)(Leaders);

export default LeadersContainerContainer;