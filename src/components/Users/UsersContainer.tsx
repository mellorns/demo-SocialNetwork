import React from 'react';
import {connect} from "react-redux";
import {follow,requestUsers,unfollow} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";
import {UsersType} from "../../types/types";
import {AppStateType} from "../../Redux/redux-store";


type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UsersType>
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    requestUsers: (currentPage: number,  pageSize: number) => void
}

type OwnPropsType = {
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage,pageSize} = this.props;
        this.props.requestUsers(currentPage,pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber,pageSize)
    }


    render() {
        return<>
            {this.props.isFetching ? <Preloader />: null}
            <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            // toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}




let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage:(currentPage) => {
//           dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUsersCount:(totalCount) => {
//           dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching:(isFetching) => {
//           dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//     }
// }




export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
        { follow, unfollow, requestUsers }),
    WithAuthRedirect)
(UsersContainer)