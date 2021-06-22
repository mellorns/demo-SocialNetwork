import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header: React.FC<PropsType> = ({isAuth,login,logout}) => {
    return <header className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"/>
        <div className={s.loginBlock}>
            {isAuth ?
                <div> {login}  - <button onClick={logout}>Log out</button></div>
                :<NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>;
}

export default Header;