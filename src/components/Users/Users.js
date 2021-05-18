import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


const Users = ({ onPageChanged,currentPage,totalUsersCount,pageSize,...props}) => {

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