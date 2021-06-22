import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {UsersType} from "../../types/types";


type PropsType = {
    onPageChanged: (pageNumber:number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    followingInProgress: Array<number>
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    users: Array<UsersType>
}

let Users: React.FC<PropsType> = ({ onPageChanged,currentPage,totalUsersCount,pageSize,...props}) => {

    return (
        <div>
        <Paginator onPageChanged={onPageChanged} currentPage={currentPage} totalItemsCount={totalUsersCount} pageSize={pageSize} />
            {
                props.users.map(u => <User key={u.id}
                                           user={u}
                                           followingInProgress={props.followingInProgress}
                                           unfollow={props.unfollow}
                                           follow={props.follow}
                />
                )
            }
        </div>
    )
}

export default Users