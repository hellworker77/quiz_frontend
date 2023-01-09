import {InitialStateAppType} from "../../types/Implementation/InitialStates/InitialStateAppType";
import background from '../../images/2133126.jpg'
import {
    CHANGE_BACKGROUND_ACTION_TYPE,
    ChangeBackgroundActionType
} from "../../types/Implementation/ActionTypes/AppActionTypes/ChangeBackgroundActionType";

let initialState : InitialStateAppType = {
    background: background
}

const AppReducer = (state = initialState, action: ChangeBackgroundActionType) : InitialStateAppType => {
    switch (action.type){
        case CHANGE_BACKGROUND_ACTION_TYPE:
            return {
            ...state,
                background: action.background,
        }
        default:
            return {
            ...state
        }
    }
}

export const changeBackgroundActionCreate = (background: string) : ChangeBackgroundActionType =>({
    type: CHANGE_BACKGROUND_ACTION_TYPE, background: background
})

export default AppReducer;
