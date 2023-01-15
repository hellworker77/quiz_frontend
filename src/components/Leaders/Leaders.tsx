import React, {useEffect} from 'react';
import {LeadersProps} from "../../types/Implementation/Props/LeadersProps";
import {User} from "../../types/Implementation/Models/Users/User";
import {getLeadersRequestCreator} from "../../types/Implementation/RequestCreators/UserRequestCreator";
import axios from "axios";
import leadersPageStyles from "./Leader.module.css"
import {getRankFromRatingValue} from "../../utilities/getRankFromRatingValue";

const Leaders = (props: LeadersProps) => {
    useEffect(()=>{
        if(props.count === 0){
            invokeCallbackLoadLeaders(props.page, props.size, props.loadLeaderBoardPage)
        }
    },[])
    return (
        <div className={leadersPageStyles.page_container}>
            <table className={leadersPageStyles.table}>
                <tr className={leadersPageStyles.header}>
                    <th>#</th>
                    <th></th>
                    <th></th>
                    <th>Name</th>
                    <th>Rating</th>
                </tr>
                {props.loadedChunk.map(x=>
                    <tr className={leadersPageStyles.row}>
                        <th>{props.loadedChunk.indexOf(x) + 1}</th>
                        <th><img className={leadersPageStyles.rank}
                            src={getRankFromRatingValue(x.rating ?? 0)}
                            alt={""}/></th>
                        <th> <img className={leadersPageStyles.avatar}
                            src={`data:image/jpeg;base64,${x.photo?.data}`}
                            alt={""}/></th>
                        <th>{x.userName}</th>
                        <th>{x.rating}</th>
                    </tr>
                )}
            </table>
            <div className={leadersPageStyles.load_more} onClick={()=>{invokeCallbackLoadLeaders(props.page, props.size, props.loadLeaderBoardPage)}}>load more...</div>
        </div>
    );
};

const invokeCallbackLoadLeaders = (page: number, size: number, callback: (data: Array<User>) => void) : void => {
    let config = getLeadersRequestCreator(page, size);
    axios<Array<User>>(config).then(response => callback(response.data)).catch(error => console.log(error))
}

export default Leaders;