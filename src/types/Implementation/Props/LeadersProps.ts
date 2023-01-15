import {User} from "../Models/Users/User";

export type LeadersProps = LeadersPropsState & LeadersPropsDispatch

export type LeadersPropsState = {
    loadedChunk : Array<User>,
    count: number,
    page: number,
    size: number
}

export type LeadersPropsDispatch = {
    loadLeaderBoardPage: (data: Array<User>) => void
}