import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import React from "react";


type PropsType = {

}

const Navbar: React.FC<PropsType> = (props) => {

    // let friendsElements = props.state.sideBar.map(  (f) => ())

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.activeLink}>Massages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.activeLink} >News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.activeLink} >Settings</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/friends' activeClassName={s.activeLink} >Friends</NavLink>
        </div>


    </nav>
}

export default Navbar;