import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    unfollow
} from "../../Redux/users-reducer";
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


class UsersContainer extends React.Component {
    componentDidMount() {
        let{currentPage,pageSize} = this.props;
        this.props.requestUsers(currentPage,pageSize)

    }

    onPageChanged = (pageNumber) => {
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
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}




let mapStateToProps = (state) => {
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




export default compose(
    connect(mapStateToProps,{    follow,    unfollow,     requestUsers,  setCurrentPage, }),
    WithAuthRedirect)
(UsersContainer)