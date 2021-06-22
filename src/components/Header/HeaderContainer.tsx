
import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";


type PropsType = {
    isAuth: boolean
    login:    string | null
    logout: () => void
}

class  HeaderContainer extends React.Component<PropsType> {
    render() {
        return <Header
            isAuth =  {this.props.isAuth}
            login =  {this.props.login}
            logout =  {this.props.logout}
        />
    }
}
let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps,{ logout})(HeaderContainer);